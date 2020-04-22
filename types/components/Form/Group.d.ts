import { VueComponent } from 'vue-tsx-helper';
import { VNode, CreateElement } from 'vue';
interface IGroupProps {
    size?: 'lg' | 'sm';
    disabled?: boolean;
}
export declare class Group extends VueComponent<IGroupProps> {
    size: 'lg' | 'sm';
    disabled: boolean;
    error: boolean;
    success: boolean;
    render(h: CreateElement): VNode;
}
export {};
