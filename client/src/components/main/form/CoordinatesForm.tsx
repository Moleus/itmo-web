import React from "react";
import {useForm} from "react-hook-form";
import {range} from "../../util/Util";

import {hitAPI} from "../../../services/HitsService";

import "../../../styles/index.scss"
import TabTrap from "@jetbrains/ring-ui/dist/tab-trap/tab-trap";
import "@jetbrains/ring-ui/dist/style.css"
import {setR} from "../../../store/reducers/FormCoordinatesSlice";
import {useAppDispatch} from "../../../hooks/redux";
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

type FormValues = {
    x: number;
    y: number;
    r: number;
};

const CoordinatesForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const [createHit, {}] = hitAPI.useCreateHitMutation({fixedCacheKey: 'shared-create-hit'});
    const [deleteHits, {}] = hitAPI.useDeleteAllHitsMutation();
    const dispatch = useAppDispatch();

    const onSubmit = handleSubmit((data: FormValues) => {
        createHit({x: data.x, y: data.y, r: data.r})
    });

    const onReset = () => deleteHits();

    const onUpdateR = (newRadius: number) => dispatch(setR(newRadius));

    return (
        <section className="grid-section input-section">
            <TabTrap>
                <form id="input-form">
                    <div className="input-container">
                        X:
                        <select {...register("x", {required: true})}>
                            {
                                range(5, 0).map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="input-container">
                        <Slider
                            // defaultValue={[30, 50]}
                            // draggableTrack
                            // pushable={5}
                            // allowCross={false}
                            onChange={onUpdateR}
                            // value={value}

                            min={0.3}
                            max={4}
                            defaultValue={1}
                            step={0.1}
                        />
                    </div>
                    <div className="input-container">
                        Y:
                        <input defaultValue="0" {...register("y", {
                            required: true,
                            min: 0,
                            max: 5
                        })} />
                    </div>
                    {/*<div className="ring-form__group">*/}
                    {/*    <label className="ring-form__label">Y</label>*/}
                    {/*    <div className="ring-form__control">*/}
                    {/*        <input className="ring-input ring-input_error ring-input-size_m"*/}
                    {/*               {...register("y", {required: true, min: 0, max: 5})}/>*/}
                    {/*        {errors.y && <div className="ring-error-bubble active">{errors.y.message}</div>}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div>
                        <button type="button" className="input-field backlight clickable" onClick={onSubmit}>Add
                        </button>
                        <button type="button" className="input-field backlight clickable" onClick={onReset}>Reset
                        </button>
                    </div>
                </form>
            </TabTrap>
        </section>
    );
}

export default CoordinatesForm;