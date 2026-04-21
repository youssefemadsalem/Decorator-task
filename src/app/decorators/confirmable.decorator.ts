export function Confirmable(message: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const allow = window.confirm(message);

      if (allow) {
        const result = originalMethod.apply(this, args);
        return result;
      }

      return null;
    };

    return descriptor;
  };
}
