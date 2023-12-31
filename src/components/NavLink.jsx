import { useRouter } from "next/router"
import Link from "./Link"
import classNames from "classnames"

export const NavLink = (props) => {
  const { asPath } = useRouter()

  return (
    <Link
      {...props}
      className={classNames("text-sm", {
        underline: asPath === props.href,
      })}
    />
  )
}
