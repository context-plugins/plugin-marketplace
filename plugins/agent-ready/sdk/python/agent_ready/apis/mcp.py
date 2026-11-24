from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.scan_mcp_error import ScanMcpErrorBody, scan_mcp_error_mapper
from ..models.mcp_scan_request import McpScanRequest, McpScanRequestDict
from ..models.mcp_scan_response import McpScanResponse
from ..server.server import Server


class Mcp:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = McpWithRawResponse(client, server)

    def scan_mcp(
        self, body: McpScanRequest | McpScanRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> McpScanResponse:
        """Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources,
        and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check
        findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers
        aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The MCP server scan result and its shareable report URL.

        Raises:
            ApiError: Invalid or blocked endpoint (bad URL, non-http(s), or a private/reserved address). Rate limit
                exceeded. Response carries ``Retry-After`` (seconds). Back off with exponential delay + jitter. The MCP
                server could not be scanned. Retry. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.scan_mcp(body, request_options=request_options))

    @property
    def with_raw_response(self) -> McpWithRawResponse:
        return self._with_raw_response


class AsyncMcp:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMcpWithRawResponse(client, server)

    async def scan_mcp(
        self, body: McpScanRequest | McpScanRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> McpScanResponse:
        """Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources,
        and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check
        findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers
        aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The MCP server scan result and its shareable report URL.

        Raises:
            ApiError: Invalid or blocked endpoint (bad URL, non-http(s), or a private/reserved address). Rate limit
                exceeded. Response carries ``Retry-After`` (seconds). Back off with exponential delay + jitter. The MCP
                server could not be scanned. Retry. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.scan_mcp(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMcpWithRawResponse:
        return self._with_raw_response


class McpWithRawResponse(BaseRawResponse[RawClient, Server]):
    def scan_mcp(
        self, body: McpScanRequest | McpScanRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[McpScanResponse, ScanMcpErrorBody]:
        """Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources,
        and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check
        findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers
        aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/scan/mcp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[McpScanRequest | McpScanRequestDict](body),
            decoder=json_decoder[McpScanResponse],
            error_mapper=scan_mcp_error_mapper,
            request_options=request_options,
        )


class AsyncMcpWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def scan_mcp(
        self, body: McpScanRequest | McpScanRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[McpScanResponse, ScanMcpErrorBody]:
        """Connects to a remote MCP endpoint over Streamable HTTP, runs the handshake, and grades the tools, resources,
        and prompts it advertises against MCP best practices. Returns a weighted mcpScore (0–100) with per-check
        findings. Synchronous (no polling). Public — no API key required. Remote http(s) endpoints only; stdio servers
        aren't reachable. This is a standalone tool: its score is independent of the site agent-readability score.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/scan/mcp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[McpScanRequest | McpScanRequestDict](body),
            decoder=async_json_decoder[McpScanResponse],
            error_mapper=scan_mcp_error_mapper,
            request_options=request_options,
        )
