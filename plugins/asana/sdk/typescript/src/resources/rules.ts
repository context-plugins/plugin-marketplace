import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  ruleTriggersRunRequestSchema,
  type RuleTriggersRunRequest,
} from "../models/rule-triggers-run-request.js";
import {
  ruleTriggersRunResponseSchema,
  type RuleTriggersRunResponse,
} from "../models/rule-triggers-run-response.js";
import type { Servers } from "../servers.js";

/**
 * Trigger rules via incoming web requests.
 */
export class Rules {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Asana Trigger a rule
   *
   * @remarks
   * Trigger a rule which uses an incoming web request trigger.
   *
   * @returns Successfully triggered the rule.
   *
   * @throws {@link Rules.TriggerRuleError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerRule(
    request: Rules.TriggerRuleRequest,
    options?: RequestOptions,
  ): ApiPromise<RuleTriggersRunResponse, Rules.TriggerRuleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rule_triggers/{rule_trigger_gid}/run"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [{ name: "rule_trigger_gid", value: request.ruleTriggerGid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: ruleTriggersRunRequestSchema },
      },
      {
        success: { kind: "json", schema: ruleTriggersRunResponseSchema },
        errorFactory: Rules.TriggerRuleError,
      },
      options,
    );
  }
}

export namespace Rules {
  export type TriggerRuleRequest = {
    ruleTriggerGid: string;
    body: RuleTriggersRunRequest;
  };

  export class TriggerRuleError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerRuleError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
