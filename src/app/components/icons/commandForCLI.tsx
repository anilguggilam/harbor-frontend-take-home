import type {IconProps} from '@/types';
export default function CommandForCLI (props: IconProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}><path d="M0 96C0 43 43 0 96 0s96 43 96 96v32h128V96c0-53 43-96 96-96s96 43 96 96-43 96-96 96h-32v128h32c53 0 96 43 96 96s-43 96-96 96-96-43-96-96v-32H192v32c0 53-43 96-96 96S0 469 0 416s43-96 96-96h32V192H96c-53 0-96-43-96-96zm128 32V96c0-17.7-14.3-32-32-32S64 78.3 64 96s14.3 32 32 32h32zm64 192h128V192H192v128zm-64 64H96c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32v-32zm256 0v32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-32zm0-256h32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32v32z"/></svg>;
}