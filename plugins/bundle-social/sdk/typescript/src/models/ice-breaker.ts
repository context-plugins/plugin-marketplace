import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IceBreaker = {
  question: string;
  payload: string;
};

const iceBreakerProperties: s.Shape<IceBreaker> = {
  question: s.string(),
  payload: s.string(),
};

export const iceBreakerInternalSchema: Schema<IceBreaker> = s.object<IceBreaker>(iceBreakerProperties);

export const iceBreakerSchema: Schema<IceBreaker> = s.lazySchema(() =>
  s.object<IceBreaker>({
    ...iceBreakerProperties,
    question: s.string().check(s.minLength(1)),
    payload: s.string().check(s.minLength(1), s.maxLength(1000)),
  }),
);
