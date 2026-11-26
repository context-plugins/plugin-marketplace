import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { userInternalSchema, userSchema, type User } from "../user.js";
import { user1InternalSchema, user1Schema, type User1 } from "../user1.js";
import { user2InternalSchema, user2Schema, type User2 } from "../user2.js";
import { user3InternalSchema, user3Schema, type User3 } from "../user3.js";

export type User4 = User | User1 | User2 | User3;

export const user4InternalSchema: Schema<User4> = s.of<User4>(
  s.union([
    s.lazy(() => userInternalSchema),
    s.lazy(() => user1InternalSchema),
    s.lazy(() => user2InternalSchema),
    s.lazy(() => user3InternalSchema),
  ]),
);

export const user4Schema: Schema<User4> = s.lazySchema(() =>
  s.of<User4>(
    s.union([
      s.lazy(() => userSchema),
      s.lazy(() => user1Schema),
      s.lazy(() => user2Schema),
      s.lazy(() => user3Schema),
    ]),
  ),
);
