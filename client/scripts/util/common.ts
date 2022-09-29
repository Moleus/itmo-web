export const ElementsContext = {
    canvas: document.getElementById('axis-canvas') as HTMLCanvasElement,
    axis3d: document.getElementById('axis-canvas-3d') as HTMLElement,
    inputX: document.getElementById('x-input') as HTMLSelectElement,
    inputY: document.getElementById('y-input') as HTMLInputElement,
    checkboxesR: document.getElementsByName('paramR') as NodeListOf<HTMLInputElement>,
    submitButton: document.getElementById('submit') as HTMLButtonElement,
    resetButton: document.getElementById('reset') as HTMLButtonElement,
    inputForm: document.getElementById('input-form') as HTMLFormElement,
    hitTableIframe: document.getElementById('table-container_frame') as HTMLIFrameElement
}

export class Vector {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    public toString = () => {
        return `{${this.x}, ${this.y}}`
    }
}

export class HitResult {
    readonly x: number;
    readonly y: number;
    readonly r: number;
    readonly isHit: boolean;

    constructor(x: number, y: number, r: number, isHit: boolean) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = isHit;
    }
}