from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.fetch_recommendations_error import FetchRecommendationsErrorBody, fetch_recommendations_error_mapper
from ..errors.upsert_icp_error import UpsertIcpErrorBody, upsert_icp_error_mapper
from ..models.icp_definition import IcpDefinition, IcpDefinitionDict
from ..models.recommendations_fetch_request import RecommendationsFetchRequest, RecommendationsFetchRequestDict
from ..models.recommendations_fetch_response import RecommendationsFetchResponse
from ..server.server import Server


class Recommendations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecommendationsWithRawResponse(client, server, auth)

    def fetch_recommendations(
        self,
        body: RecommendationsFetchRequest | RecommendationsFetchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecommendationsFetchResponse:
        """Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lookalike company recommendations.

        Raises:
            ApiError: Missing or invalid API key. Too many requests. The API allows up to 10 requests per second with
                short bursts to 20, plus a daily request quota. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_recommendations(body, request_options=request_options))

    def upsert_icp(
        self, body: IcpDefinition | IcpDefinitionDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> IcpDefinition:
        """Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ICP saved.

        Raises:
            ApiError: Missing or invalid API key. Too many requests. The API allows up to 10 requests per second with
                short bursts to 20, plus a daily request quota. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.upsert_icp(body, request_options=request_options))

    @property
    def with_raw_response(self) -> RecommendationsWithRawResponse:
        return self._with_raw_response


class AsyncRecommendations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecommendationsWithRawResponse(client, server, auth)

    async def fetch_recommendations(
        self,
        body: RecommendationsFetchRequest | RecommendationsFetchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecommendationsFetchResponse:
        """Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Lookalike company recommendations.

        Raises:
            ApiError: Missing or invalid API key. Too many requests. The API allows up to 10 requests per second with
                short bursts to 20, plus a daily request quota. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_recommendations(body, request_options=request_options))

    async def upsert_icp(
        self, body: IcpDefinition | IcpDefinitionDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IcpDefinition:
        """Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ICP saved.

        Raises:
            ApiError: Missing or invalid API key. Too many requests. The API allows up to 10 requests per second with
                short bursts to 20, plus a daily request quota. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.upsert_icp(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRecommendationsWithRawResponse:
        return self._with_raw_response


class RecommendationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_recommendations(
        self,
        body: RecommendationsFetchRequest | RecommendationsFetchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecommendationsFetchResponse, FetchRecommendationsErrorBody]:
        """Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/recommendations/fetch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecommendationsFetchRequest | RecommendationsFetchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[RecommendationsFetchResponse],
            error_mapper=fetch_recommendations_error_mapper,
            request_options=request_options,
        )

    def upsert_icp(
        self, body: IcpDefinition | IcpDefinitionDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IcpDefinition, UpsertIcpErrorBody]:
        """Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/recommendations/icp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IcpDefinition | IcpDefinitionDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IcpDefinition],
            error_mapper=upsert_icp_error_mapper,
            request_options=request_options,
        )


class AsyncRecommendationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_recommendations(
        self,
        body: RecommendationsFetchRequest | RecommendationsFetchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecommendationsFetchResponse, FetchRecommendationsErrorBody]:
        """Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/recommendations/fetch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecommendationsFetchRequest | RecommendationsFetchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[RecommendationsFetchResponse],
            error_mapper=fetch_recommendations_error_mapper,
            request_options=request_options,
        )

    async def upsert_icp(
        self, body: IcpDefinition | IcpDefinitionDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IcpDefinition, UpsertIcpErrorBody]:
        """Create or update the Ideal Customer Profile used to generate lookalike account recommendations.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/recommendations/icp"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IcpDefinition | IcpDefinitionDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IcpDefinition],
            error_mapper=upsert_icp_error_mapper,
            request_options=request_options,
        )
