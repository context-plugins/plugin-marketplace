from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    json_body,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.buy_credit_error import BuyCreditErrorBody, buy_credit_error_mapper
from ..errors.credit_balance_error import CreditBalanceErrorBody, credit_balance_error_mapper
from ..errors.excerpt_error import ExcerptErrorBody, excerpt_error_mapper
from ..errors.overview_error import OverviewErrorBody, overview_error_mapper
from ..errors.search_error import SearchErrorBody, search_error_mapper
from ..errors.transcribe_error import TranscribeErrorBody, transcribe_error_mapper
from ..errors.transcription_status_error import TranscriptionStatusErrorBody, transcription_status_error_mapper
from ..models.agent_search_request import AgentSearchRequest, AgentSearchRequestDict
from ..models.agent_transcribe_request import AgentTranscribeRequest, AgentTranscribeRequestDict
from ..models.buy_credit_request import BuyCreditRequest, BuyCreditRequestDict
from ..server.server import Server


class AgentRail:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AgentRailWithRawResponse(client, server, auth)

    def buy_credit(
        self, body: BuyCreditRequest | BuyCreditRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paid: the balance; on a first top-up also the workspace API key and a claim link (shown once)

        Raises:
            ApiError: Challenge: WWW-Authenticate (MPP, method=stripe) and/or PAYMENT-REQUIRED (x402) The key's
                workspace is on a plan Rail or both protocols not enabled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.buy_credit(body, request_options=request_options))

    def credit_balance(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pricing mode, balance in micro-dollars and the last 20 entries

        Raises:
            ApiError: Missing or unknown API key ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.credit_balance(request_options=request_options))

    def excerpt(
        self,
        episode_id: int,
        t: float,
        *,
        seconds: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            t: Moment in seconds.
            seconds: Seconds after the moment, 10–180 (default 90).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Segments around the moment and a link to it

        Raises:
            ApiError: Payment required: an anonymous call, or a key whose balance is empty, is paid per call Unknown,
                private or untranscribed recording (never charged) ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.excerpt(episode_id, t, seconds=seconds, request_options=request_options))

    def manifest(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Prices, payment protocols and limits for AI agents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.manifest(request_options=request_options))

    def overview(self, episode_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Chapters, top entities and duration

        Raises:
            ApiError: Payment required: an anonymous call, or a key whose balance is empty, is paid per call Unknown or
                private recording (never charged) ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.overview(episode_id, request_options=request_options))

    def search(
        self,
        body: AgentSearchRequest | AgentSearchRequestDict,
        *,
        scope: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            scope: ``podcasts``, or ``government`` (public meetings and court hearings). Unset: the whole record.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching segments with links to the moment (empty results are free)

        Raises:
            ApiError: Invalid request (never charged) Payment required: an anonymous call, or a key whose balance is
                empty, is paid per call; the body lists the ways to pay that are open (a balance top-up, and x402's
                PAYMENT-REQUIRED header where offered) ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.search(body, scope=scope, request_options=request_options))

    def transcribe(
        self,
        body: AgentTranscribeRequest | AgentTranscribeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted: job_id to poll at /api/agent/v1/transcriptions/{job_id}

        Raises:
            ApiError: A workspace API key is needed (a first top-up returns one) The key's workspace is read-only: it
                holds no recordings ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.transcribe(body, request_options=request_options))

    def transcription_status(self, job_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            job_id: Job id from /api/agent/v1/transcribe
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Status; 'waiting' with a reason when the balance or allowance falls short

        Raises:
            ApiError: No such job in this workspace ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.transcription_status(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AgentRailWithRawResponse:
        return self._with_raw_response


class AsyncAgentRail:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAgentRailWithRawResponse(client, server, auth)

    async def buy_credit(
        self, body: BuyCreditRequest | BuyCreditRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paid: the balance; on a first top-up also the workspace API key and a claim link (shown once)

        Raises:
            ApiError: Challenge: WWW-Authenticate (MPP, method=stripe) and/or PAYMENT-REQUIRED (x402) The key's
                workspace is on a plan Rail or both protocols not enabled ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.buy_credit(body, request_options=request_options))

    async def credit_balance(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pricing mode, balance in micro-dollars and the last 20 entries

        Raises:
            ApiError: Missing or unknown API key ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.credit_balance(request_options=request_options))

    async def excerpt(
        self,
        episode_id: int,
        t: float,
        *,
        seconds: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            t: Moment in seconds.
            seconds: Seconds after the moment, 10–180 (default 90).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Segments around the moment and a link to it

        Raises:
            ApiError: Payment required: an anonymous call, or a key whose balance is empty, is paid per call Unknown,
                private or untranscribed recording (never charged) ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.excerpt(episode_id, t, seconds=seconds, request_options=request_options)
        )

    async def manifest(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Prices, payment protocols and limits for AI agents

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.manifest(request_options=request_options))

    async def overview(self, episode_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Chapters, top entities and duration

        Raises:
            ApiError: Payment required: an anonymous call, or a key whose balance is empty, is paid per call Unknown or
                private recording (never charged) ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.overview(episode_id, request_options=request_options))

    async def search(
        self,
        body: AgentSearchRequest | AgentSearchRequestDict,
        *,
        scope: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            scope: ``podcasts``, or ``government`` (public meetings and court hearings). Unset: the whole record.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching segments with links to the moment (empty results are free)

        Raises:
            ApiError: Invalid request (never charged) Payment required: an anonymous call, or a key whose balance is
                empty, is paid per call; the body lists the ways to pay that are open (a balance top-up, and x402's
                PAYMENT-REQUIRED header where offered) ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.search(body, scope=scope, request_options=request_options))

    async def transcribe(
        self,
        body: AgentTranscribeRequest | AgentTranscribeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted: job_id to poll at /api/agent/v1/transcriptions/{job_id}

        Raises:
            ApiError: A workspace API key is needed (a first top-up returns one) The key's workspace is read-only: it
                holds no recordings ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.transcribe(body, request_options=request_options))

    async def transcription_status(
        self, job_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            job_id: Job id from /api/agent/v1/transcribe
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Status; 'waiting' with a reason when the balance or allowance falls short

        Raises:
            ApiError: No such job in this workspace ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.transcription_status(job_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAgentRailWithRawResponse:
        return self._with_raw_response


class AgentRailWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def buy_credit(
        self, body: BuyCreditRequest | BuyCreditRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, BuyCreditErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/agent/v1/credits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuyCreditRequest | BuyCreditRequestDict](body),
            decoder=empty_response,
            error_mapper=buy_credit_error_mapper,
            request_options=request_options,
        )

    def credit_balance(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreditBalanceErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=credit_balance_error_mapper,
            request_options=request_options,
        )

    def excerpt(
        self,
        episode_id: int,
        t: float,
        *,
        seconds: float | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ExcerptErrorBody]:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            t: Moment in seconds.
            seconds: Seconds after the moment, 10–180 (default 90).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/excerpt"),
            query_params=[
                param[int]("episode_id", episode_id), param[float]("t", t), param[float | None]("seconds", seconds)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=excerpt_error_mapper,
            request_options=request_options,
        )

    def manifest(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1"),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def overview(
        self, episode_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverviewErrorBody]:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/overview"),
            query_params=[param[int]("episode_id", episode_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=overview_error_mapper,
            request_options=request_options,
        )

    def search(
        self,
        body: AgentSearchRequest | AgentSearchRequestDict,
        *,
        scope: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            scope: ``podcasts``, or ``government`` (public meetings and court hearings). Unset: the whole record.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/agent/v1/search"),
            query_params=[param[str | None]("scope", scope)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentSearchRequest | AgentSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    def transcribe(
        self,
        body: AgentTranscribeRequest | AgentTranscribeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TranscribeErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/agent/v1/transcribe"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentTranscribeRequest | AgentTranscribeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=transcribe_error_mapper,
            request_options=request_options,
        )

    def transcription_status(
        self, job_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, TranscriptionStatusErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: Job id from /api/agent/v1/transcribe
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/transcriptions/{job_id}"),
            path_params=[param[int]("job_id", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=transcription_status_error_mapper,
            request_options=request_options,
        )


class AsyncAgentRailWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def buy_credit(
        self, body: BuyCreditRequest | BuyCreditRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, BuyCreditErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/agent/v1/credits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BuyCreditRequest | BuyCreditRequestDict](body),
            decoder=async_empty_response,
            error_mapper=buy_credit_error_mapper,
            request_options=request_options,
        )

    async def credit_balance(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CreditBalanceErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=credit_balance_error_mapper,
            request_options=request_options,
        )

    async def excerpt(
        self,
        episode_id: int,
        t: float,
        *,
        seconds: float | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, ExcerptErrorBody]:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            t: Moment in seconds.
            seconds: Seconds after the moment, 10–180 (default 90).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/excerpt"),
            query_params=[
                param[int]("episode_id", episode_id), param[float]("t", t), param[float | None]("seconds", seconds)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=excerpt_error_mapper,
            request_options=request_options,
        )

    async def manifest(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1"),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def overview(
        self, episode_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, OverviewErrorBody]:
        """Send a ``GET`` request.

        Args:
            episode_id: Recording id (from a search result).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/overview"),
            query_params=[param[int]("episode_id", episode_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=overview_error_mapper,
            request_options=request_options,
        )

    async def search(
        self,
        body: AgentSearchRequest | AgentSearchRequestDict,
        *,
        scope: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SearchErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            scope: ``podcasts``, or ``government`` (public meetings and court hearings). Unset: the whole record.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/agent/v1/search"),
            query_params=[param[str | None]("scope", scope)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentSearchRequest | AgentSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=search_error_mapper,
            request_options=request_options,
        )

    async def transcribe(
        self,
        body: AgentTranscribeRequest | AgentTranscribeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TranscribeErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/agent/v1/transcribe"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AgentTranscribeRequest | AgentTranscribeRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=transcribe_error_mapper,
            request_options=request_options,
        )

    async def transcription_status(
        self, job_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, TranscriptionStatusErrorBody]:
        """Send a ``GET`` request.

        Args:
            job_id: Job id from /api/agent/v1/transcribe
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/agent/v1/transcriptions/{job_id}"),
            path_params=[param[int]("job_id", job_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=transcription_status_error_mapper,
            request_options=request_options,
        )
