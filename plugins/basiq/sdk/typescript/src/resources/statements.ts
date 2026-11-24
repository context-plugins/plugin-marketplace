import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  usersStatementsResponseSchema,
  type UsersStatementsResponse,
} from "../models/users-statements-response.js";
import {
  usersStatements400Error1Schema,
  type UsersStatements400Error1,
} from "../models/users-statements400-error1.js";
import {
  usersStatements403Error1Schema,
  type UsersStatements403Error1,
} from "../models/users-statements403-error1.js";
import {
  usersStatements404Error1Schema,
  type UsersStatements404Error1,
} from "../models/users-statements404-error1.js";
import {
  usersStatements500Error1Schema,
  type UsersStatements500Error1,
} from "../models/users-statements500-error1.js";
import {
  usersStatements503Error1Schema,
  type UsersStatements503Error1,
} from "../models/users-statements503-error1.js";
import type { Servers } from "../servers.js";

export class Statements {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a statement
   *
   * @remarks
   * Create a new statement by uploading an official PDF bank statement or CSV file. The server will
   * create a job that processes the following steps:
   * 1. **verify-credentials**: Verify the file, validate the layout, and attempt to parse the
   *    statement.
   * 2. **retrieve-accounts**: Retrieve the list of accounts and their details (account number,
   *    name, balances).
   * 3. **retrieve-transactions**: Fetch the transactions for each account.
   *
   * The status of each step can be checked by querying the Retrieve a job.
   *
   * > Note that this function is not supported in sandbox environments (AU00000).
   *
   * For CSV file format specifications, please contact our support team.
   *
   * > 🚧 > > Note that the time it takes to complete the processes above will vary depending on the
   * volume of data along with the complexity of the bank statement. As a rough guide this entire
   * process could take anywhere between 10 - 30 secs. Upload multiple statements in parallel to
   * provide the best user experience
   *
   * @returns Job resource created successfully
   *
   * @throws {@link Statements.CreateStatementError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BasiqError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStatement(
    request: Statements.CreateStatementRequest,
    options?: RequestOptions,
  ): ApiPromise<UsersStatementsResponse, Statements.CreateStatementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/users/{userId}/statements"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.servicesToken),
        pathParams: [{ name: "userId", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "institutionId", value: request.institutionId, schema: s.string() },
            { kind: "file", name: "statement", value: request.statement },
          ],
        },
      },
      {
        success: { kind: "json", schema: usersStatementsResponseSchema },
        errorFactory: Statements.CreateStatementError,
      },
      options,
    );
  }
}

export namespace Statements {
  export type CreateStatementRequest = {
    /** The unique identifier of the user */
    userId: string;
    /**
     * The identifier of the institution to which the statement relates (e.g., "AU01001"). **Note**:
     * Sandbox institutions (AU00000) do not support file uploads.
     */
    institutionId: string;
    /**
     * The official PDF bank statement or CSV file to be uploaded. CSV files must conform to the
     * file specification provided by Basiq.
     */
    statement: FileInput;
  };

  export class CreateStatementError extends ApiError {
    declare readonly payload:
      | Declared<"usersStatements400Error1", UsersStatements400Error1>
      | Declared<"usersStatements403Error1", UsersStatements403Error1>
      | Declared<"usersStatements404Error1", UsersStatements404Error1>
      | Declared<"usersStatements500Error1", UsersStatements500Error1>
      | Declared<"usersStatements503Error1", UsersStatements503Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStatementError> = [
      {
        on: 400,
        kind: "usersStatements400Error1",
        decode: { kind: "json", schema: usersStatements400Error1Schema },
      },
      {
        on: 403,
        kind: "usersStatements403Error1",
        decode: { kind: "json", schema: usersStatements403Error1Schema },
      },
      {
        on: 404,
        kind: "usersStatements404Error1",
        decode: { kind: "json", schema: usersStatements404Error1Schema },
      },
      {
        on: 500,
        kind: "usersStatements500Error1",
        decode: { kind: "json", schema: usersStatements500Error1Schema },
      },
      {
        on: 503,
        kind: "usersStatements503Error1",
        decode: { kind: "json", schema: usersStatements503Error1Schema },
      },
    ];
  }
}
