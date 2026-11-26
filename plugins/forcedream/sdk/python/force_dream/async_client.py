from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseForceDreamClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RawError,
    RetryOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    no_auth,
    param,
    raw_error_response,
    unwrap,
)
from .errors.get_balance_error import GetBalanceErrorBody, get_balance_error_mapper
from .errors.invoke_agent_error import InvokeAgentErrorBody, invoke_agent_error_mapper
from .models.agent_list_result import AgentListResult
from .models.api_signup_request import ApiSignupRequest, ApiSignupRequestDict
from .models.balance_result import BalanceResult
from .models.invoke_result import InvokeResult
from .models.reliability_list_result import ReliabilityListResult
from .models.signup_result import SignupResult
from .models.v1_agents_invoke_request import V1AgentsInvokeRequest, V1AgentsInvokeRequestDict
from .models.v1_agents_invoke_response import V1AgentsInvokeResponse
from .models.v1_workforce_proof_public_key_response import V1WorkforceProofPublicKeyResponse
from .models.v1_workforce_proof_public_response import V1WorkforceProofPublicResponse
from .server.server import Server


class AsyncForceDreamClient(BaseForceDreamClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "ForceDreamClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server, self._auth)

    async def get_agent_reliability(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReliabilityListResult:
        """Keyless. Used by all three SDKs to merge live ``health`` data into agent search results. A reliability-fetch
        failure never blocks the core agent listing.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reliability data for all agents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.get_agent_reliability(request_options=request_options))

    async def get_balance(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> BalanceResult:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current balance

        Raises:
            ApiError: Invalid or missing API key ``error`` is ``Unauthorized1 | RawError``."""
        return unwrap(await self.with_raw_response.get_balance(request_options=request_options))

    async def get_invoke_result(
        self, slug: str, task_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InvokeResult:
        """Real polling contract used identically by all three official SDKs: start polling at a 2500ms interval, add
        1000ms after each attempt, cap at 6000ms, bounded by a caller-set total wait (default 60s, min 5s, max 120s).
        The response's ``status`` (or ``outcome``) field distinguishes ``completed``/``succeeded``, ``insufficient``
        (agent honestly declined -- charged nothing), ``charge_failed``, ``failed``/``dead_letter``, or still-pending
        (any other value, including the field being absent).

        Args:
            slug: Value sent with the request.
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current task state (may still be pending)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.get_invoke_result(slug, task_id, request_options=request_options))

    async def get_proof(
        self, task_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WorkforceProofPublicResponse:
        """Keyless. Returns the real proof object needed for client-side Ed25519 verification. **Honest gap**: the exact
        behavior for a task_id that has not yet completed (404, a 200 with a null proof, or otherwise) is not directly
        confirmed by tonight's testing -- every real verification tested used an already-completed task. Documented as
        ``200`` below for the confirmed case only; do not assume the shape of an unconfirmed case.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Proof found (confirmed only for already-completed tasks)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.get_proof(task_id, request_options=request_options))

    async def get_proof_public_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WorkforceProofPublicKeyResponse:
        """Keyless. Required to verify any proof's signature.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Public key

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.get_proof_public_key(request_options=request_options))

    async def invoke_agent(
        self,
        slug: str,
        body: V1AgentsInvokeRequest | V1AgentsInvokeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1AgentsInvokeResponse:
        """Spends your balance -- requires an ``fd_live_`` key. Enqueues the task and returns immediately; it does not
        wait for completion. Poll ``/v1/agents/{slug}/result/{taskId}`` for the outcome. Never call this again for the
        same logical task after a timeout -- re-invoking would double-charge.

        Args:
            slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Task enqueued

        Raises:
            ApiError: Invalid or missing API key ``error`` is ``Unauthorized1 | RawError``."""
        return unwrap(await self.with_raw_response.invoke_agent(slug, body, request_options=request_options))

    async def list_agents(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> AgentListResult:
        """Keyless -- no account needed. Real, load-bearing fact confirmed directly from the source, not assumed: **this
        endpoint has no working server-side capability or query filter.** All three official SDKs fetch the full list
        and filter client-side. A prior draft of the OpenAPI scope for this spec listed a nonexistent
        ``/v1/agents/search`` endpoint; it does not exist. Filter client-side against this endpoint's full response
        instead, exactly as the official SDKs do.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full agent registry

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.list_agents(request_options=request_options))

    async def signup(
        self, body: ApiSignupRequest | ApiSignupRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SignupResult:
        """No API key required -- this is how you get one. Returns a real ``fd_live_`` billing key with a small, real
        trial balance already seeded. Verified live, repeatedly, across all three SDKs tonight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.signup(body, request_options=request_options))

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_agent_reliability(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReliabilityListResult, RawError]:
        """Keyless. Used by all three SDKs to merge live ``health`` data into agent search results. A reliability-fetch
        failure never blocks the core agent listing.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agents/reliability"),
            decoder=async_json_decoder[ReliabilityListResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_balance(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BalanceResult, GetBalanceErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/account/balance"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BalanceResult],
            error_mapper=get_balance_error_mapper,
            request_options=request_options,
        )

    async def get_invoke_result(
        self, slug: str, task_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InvokeResult, RawError]:
        """Real polling contract used identically by all three official SDKs: start polling at a 2500ms interval, add
        1000ms after each attempt, cap at 6000ms, bounded by a caller-set total wait (default 60s, min 5s, max 120s).
        The response's ``status`` (or ``outcome``) field distinguishes ``completed``/``succeeded``, ``insufficient``
        (agent honestly declined -- charged nothing), ``charge_failed``, ``failed``/``dead_letter``, or still-pending
        (any other value, including the field being absent).

        Args:
            slug: Value sent with the request.
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agents/{slug}/result/{taskId}"),
            path_params=[param[str]("slug", slug), param[str]("taskId", task_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[InvokeResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_proof(
        self, task_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WorkforceProofPublicResponse, RawError]:
        """Keyless. Returns the real proof object needed for client-side Ed25519 verification. **Honest gap**: the exact
        behavior for a task_id that has not yet completed (404, a 200 with a null proof, or otherwise) is not directly
        confirmed by tonight's testing -- every real verification tested used an already-completed task. Documented as
        ``200`` below for the confirmed case only; do not assume the shape of an unconfirmed case.

        Args:
            task_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/workforce/proof/{task_id}/public"),
            path_params=[param[str]("task_id", task_id)],
            decoder=async_json_decoder[V1WorkforceProofPublicResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_proof_public_key(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WorkforceProofPublicKeyResponse, RawError]:
        """Keyless. Required to verify any proof's signature.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/workforce/proof/public-key"),
            decoder=async_json_decoder[V1WorkforceProofPublicKeyResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def invoke_agent(
        self,
        slug: str,
        body: V1AgentsInvokeRequest | V1AgentsInvokeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1AgentsInvokeResponse, InvokeAgentErrorBody]:
        """Spends your balance -- requires an ``fd_live_`` key. Enqueues the task and returns immediately; it does not
        wait for completion. Poll ``/v1/agents/{slug}/result/{taskId}`` for the outcome. Never call this again for the
        same logical task after a timeout -- re-invoking would double-charge.

        Args:
            slug: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/agents/{slug}/invoke"),
            path_params=[param[str]("slug", slug)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1AgentsInvokeRequest | V1AgentsInvokeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1AgentsInvokeResponse],
            error_mapper=invoke_agent_error_mapper,
            request_options=request_options,
        )

    async def list_agents(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AgentListResult, RawError]:
        """Keyless -- no account needed. Real, load-bearing fact confirmed directly from the source, not assumed: **this
        endpoint has no working server-side capability or query filter.** All three official SDKs fetch the full list
        and filter client-side. A prior draft of the OpenAPI scope for this spec listed a nonexistent
        ``/v1/agents/search`` endpoint; it does not exist. Filter client-side against this endpoint's full response
        instead, exactly as the official SDKs do.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/agents/list"),
            decoder=async_json_decoder[AgentListResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def signup(
        self, body: ApiSignupRequest | ApiSignupRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SignupResult, RawError]:
        """No API key required -- this is how you get one. Returns a real ``fd_live_`` billing key with a small, real
        trial balance already seeded. Verified live, repeatedly, across all three SDKs tonight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/signup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiSignupRequest | ApiSignupRequestDict](body),
            decoder=async_json_decoder[SignupResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


AsyncClient = AsyncForceDreamClient
