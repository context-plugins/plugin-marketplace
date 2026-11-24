import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { mcpScanRequestInternalSchema, type McpScanRequest } from "../models/mcp-scan-request.js";
import { mcpScanResponseInternalSchema, type McpScanResponse } from "../models/mcp-scan-response.js";
import type { Servers } from "../servers.js";

export class Mcp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Scan a live MCP server
   *
   * @remarks
   * Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the
   * tools, resources, and prompts it advertises against MCP best practices. Returns a weighted
   * mcpScore (0–100) with per-check findings. Synchronous (no polling). Public — no API key
   * required. Remote http(s) endpoints only; stdio servers aren't reachable. This is a standalone
   * tool: its score is independent of the site agent-readability score.
   *
   * @returns The MCP server scan result and its shareable report URL.
   *
   * @throws {@link Mcp.ScanMcpError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AgentReadyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  scanMcp(
    request: Mcp.ScanMcpRequest,
    options?: RequestOptions,
  ): ApiPromise<McpScanResponse, Mcp.ScanMcpError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/scan/mcp"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mcpScanRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: mcpScanResponseInternalSchema },
        errorFactory: Mcp.ScanMcpError,
      },
      options,
    );
  }
}

export namespace Mcp {
  export type ScanMcpRequest = {
    body: McpScanRequest;
  };

  export class ScanMcpError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ScanMcpError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
