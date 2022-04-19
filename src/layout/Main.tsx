import { ReactNode } from 'react';

type MainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: MainProps) => {
  return (
    <div className="w-full antialiased">
      {props.meta}
      <div>{props.children}</div>
    </div>
  );
};

export { Main };
