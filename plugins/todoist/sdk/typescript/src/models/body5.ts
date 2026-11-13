import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ProductApp, productAppSchema } from "./product-app.js";
import { workspaceRoleSchema, type WorkspaceRole } from "./workspace-role.js";

export type Body5 = {
  /** List of user emails to invite to the workspace. */
  emailList?: string[] | null;
  /** Role assigned to invited users. */
  role?: WorkspaceRole | null;
  /**
   * For first-party clients usage only. This attribute may be removed or changed without notice, so
   * we strongly advise not to rely on it. Product the invitation is sent from. Products without
   * their own invite emails are recorded as Todoist.
   *
   * @default ProductApp.Todoist
   */
  app?: ProductApp;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body5Properties: s.Shape<Body5> = {
  emailList: s.optionalNullable(s.array(s.string())),
  role: s.optionalNullable(s.lazy(() => workspaceRoleSchema)),
  app: s.defaulted(productAppSchema, ProductApp.Todoist),
  _keysMap: {
    emailList: "email_list",
  },
};

export const body5InternalSchema: Schema<Body5> = s.object<Body5>(body5Properties, {
  additionalProperties: s.json(),
});

export const body5Schema: Schema<Body5> = s.lazySchema(() =>
  s.object<Body5>(
    {
      ...body5Properties,
      emailList: s.optionalNullable(s.array(s.string().check(s.email()))),
    },
    { additionalProperties: s.json() },
  ),
);
