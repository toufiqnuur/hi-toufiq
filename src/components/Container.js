export default function Container({ children, className }) {
  return (
    <div
      className={`container px-4 md:px-12 mx-auto max-w-screen-xl ${className}`}
    >
      {children}
    </div>
  );
}
