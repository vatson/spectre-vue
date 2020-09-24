import * as tsx from 'vue-tsx-support';
export interface InputEvent {
    target: {
        value: string;
        selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    };
}
export interface NormalizedOption {
    label: string;
    value: any;
}
export interface FormSelectEvents {
    onInput: (value: string | string[] | number | number[]) => void;
}
export declare const FormSelect: tsx.TsxComponent<object & Record<never, any> & {
    __attrs: ((data: string) => void)[];
} & Record<string, unknown> & {
    __attrs: () => any;
} & import("vue").default & {
    __listeners: ((data: string) => void)[];
} & {
    __listeners: () => any;
}, {} & {
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
    value?: string | number | string[] | number[];
    size?: string | number;
    multiple?: boolean;
    options?: string[] | {
        [label: string]: string;
    };
    placeholder?: string;
    scale?: "lg" | "sm";
}, FormSelectEvents, {}, {
    onInput({ target: { selectedOptions } }: InputEvent): void;
    isSelected(label: string | number | undefined, value: string | number | undefined, current?: string | string[] | number | number[]): boolean;
    normalizeOptions(options: string[] | {
        [label: string]: any;
    }): NormalizedOption[];
} & {
    options: string[] | {
        [label: string]: string;
    };
    multiple: boolean;
    placeholder: string;
    value: string | number | string[] | number[];
    size: string | number;
    scale: "lg" | "sm";
    error: boolean;
    success: boolean;
    disabled: boolean;
}>;