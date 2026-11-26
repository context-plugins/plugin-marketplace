import { ResponseErrorBase, type ResponseErrorInit } from "./errors.js";

/**
 * An error body the spec describes, tagged with the arm name to narrow on.
 *
 * @remarks
 * `kind` is the arm name the operation's error class declares. Narrow `err.payload.kind` and
 * `body` is typed for that arm, with no cast.
 */
export type Declared<K extends string, B> = {
  readonly kind: K;
  readonly body: B;
};

/**
 * An error body the spec does not describe: the server answered with a status no matcher covers,
 * and the operation declares no `default` response.
 *
 * @remarks
 * The untouched bytes come back as `rawBody` so the failure stays diagnosable. A status the spec
 * *does* describe whose body fails to decode is **not** this and throws `DecodeError`, because
 * shape drift on a declared status is a contract violation rather than an open error. A `default`
 * response describes every status the spec does not list, so an operation that declares one never
 * produces this arm: its body either decodes or is that same contract violation.
 */
export type Undeclared = {
  readonly kind: "undeclared";
  readonly rawBody: ArrayBuffer;
};

/** What an {@link ApiError} is built with: the call it names, and the answer the API gave. */
export type ApiErrorInit<Payload = Undeclared> = ResponseErrorInit & {
  readonly payload: Payload;
};

/**
 * An error answer from the API.
 *
 * @remarks
 * Thrown when the server responded with an error status. It is a `ResponseError`, so a `catch` for
 * everything the server had a say in sees it beside `DecodeError`, and it is a `CoreError`, so one
 * `instanceof AcmeError` catches it too. An operation that declares error bodies throws a subclass
 * redeclaring `payload` as a typed union; the rest throw this class directly.
 *
 * On this class `payload.kind` is `string`, so comparing it to `"undeclared"` does not narrow and
 * `"rawBody" in payload` does. A subclass declares a union of literals, which narrows on its own.
 */
export class ApiError extends ResponseErrorBase {
  readonly kind = "api" as const;

  /** The error body, as the arm the spec declared for this status, or `"undeclared"`. */
  readonly payload: Declared<string, unknown> | Undeclared;

  constructor(init: ApiErrorInit<Declared<string, unknown> | Undeclared>) {
    super(`${init.method} ${init.uri} failed with ${init.status}`, init);
    this.payload = init.payload;
  }
}
