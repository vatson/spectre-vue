import { VueComponent } from 'vue-tsx-helper';
import { Size } from './Size';
import { VNode, CreateElement } from 'vue';
export interface IRadioProps {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    inline?: boolean;
    label?: string;
    name?: string;
    size?: Size;
    value?: any;
    model?: any;
}
export declare class Radio extends VueComponent<IRadioProps> {
    value: any;
    label: string;
    name: string;
    checked?: boolean;
    inline: boolean;
    error: boolean;
    size: Size;
    disabled: boolean;
    protected model: any;
    onChecked(e: any): void;
    render(h: CreateElement): VNode;
    private get _label();
    private get _value();
}
