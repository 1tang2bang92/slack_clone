import { Button, ButtonTypeMap, ExtendButtonBase} from '@mui/material'

const FloatButton: ExtendButtonBase<ButtonTypeMap> = (props: any) => {
  return <Button {...props}> + </Button>
}

export default FloatButton