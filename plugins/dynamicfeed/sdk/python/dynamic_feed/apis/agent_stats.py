from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class AgentStats:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AgentStatsWithRawResponse(client, server)

    def agent_stats_v1_agent_stats_get(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls (today / 7d / 30d /
        all-time) and the distinct agent client types seen (Claude, ChatGPT, Cursor, LangChain, MCP clients, ...).
        Counts only — no IPs, no identities. Powers the public 'agents tapping us' counter on /agents. The response
        itself is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.agent_stats_v1_agent_stats_get(request_options=request_options))

    @property
    def with_raw_response(self) -> AgentStatsWithRawResponse:
        return self._with_raw_response


class AsyncAgentStats:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAgentStatsWithRawResponse(client, server)

    async def agent_stats_v1_agent_stats_get(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls (today / 7d / 30d /
        all-time) and the distinct agent client types seen (Claude, ChatGPT, Cursor, LangChain, MCP clients, ...).
        Counts only — no IPs, no identities. Powers the public 'agents tapping us' counter on /agents. The response
        itself is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.agent_stats_v1_agent_stats_get(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAgentStatsWithRawResponse:
        return self._with_raw_response


class AgentStatsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def agent_stats_v1_agent_stats_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls (today / 7d / 30d /
        all-time) and the distinct agent client types seen (Claude, ChatGPT, Cursor, LangChain, MCP clients, ...).
        Counts only — no IPs, no identities. Powers the public 'agents tapping us' counter on /agents. The response
        itself is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agent-stats"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAgentStatsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def agent_stats_v1_agent_stats_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls (today / 7d / 30d /
        all-time) and the distinct agent client types seen (Claude, ChatGPT, Cursor, LangChain, MCP clients, ...).
        Counts only — no IPs, no identities. Powers the public 'agents tapping us' counter on /agents. The response
        itself is Ed25519-signed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agent-stats"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
