import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";


type MotionDivProps = HTMLMotionProps<"div"> & {
  className?: string;
  children: React.ReactNode;
};

export function Card({
  className,
  children,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={clsx(
        "rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl hover:shadow-purple-500/20 p-5 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}


export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "mb-4 border-b border-gray-600 pb-3 flex items-center justify-between",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={clsx(
        "text-xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx("text-gray-300 leading-relaxed space-y-2", className)}
      {...props}
    />
  );
}