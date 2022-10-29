export default function Container({ children, className }) {
  return (
    <div className={`container px-4 mx-auto max-w-screen-xl ${className}`}>
      {children}
    </div>
  );
}
