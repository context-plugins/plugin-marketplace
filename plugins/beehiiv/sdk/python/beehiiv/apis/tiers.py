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
from ..errors.create12_error import Create12ErrorBody, create12_error_mapper
from ..errors.index21_error import Index21ErrorBody, index21_error_mapper
from ..errors.patch4_error import Patch4ErrorBody, patch4_error_mapper
from ..errors.put4_error import Put4ErrorBody, put4_error_mapper
from ..errors.show16_error import Show16ErrorBody, show16_error_mapper
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.index_tiers_response import IndexTiersResponse
from ..models.publications_tiers_request import PublicationsTiersRequest, PublicationsTiersRequestDict
from ..models.publications_tiers_request1 import PublicationsTiersRequest1, PublicationsTiersRequest1Dict
from ..models.tier_response import TierResponse
from ..server.server import Server


class Tiers:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TiersWithRawResponse(client, server)

    def create12(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest | PublicationsTiersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Create a new tier for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create12(publication_id, authorization, body=body, request_options=request_options)
        )

    def index21(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IndexTiersResponse:
        """Retrieve all tiers belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index21(
                publication_id,
                authorization,
                expand=expand,
                limit=limit,
                page=page,
                direction=direction,
                request_options=request_options,
            ),
        )

    def patch4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.patch4(
                publication_id, tier_id, authorization, body=body, request_options=request_options
            ),
        )

    def put4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.put4(
                publication_id, tier_id, authorization, body=body, request_options=request_options
            ),
        )

    def show16(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Retrieve a single tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show16(
                publication_id, tier_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TiersWithRawResponse:
        return self._with_raw_response


class AsyncTiers:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTiersWithRawResponse(client, server)

    async def create12(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest | PublicationsTiersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Create a new tier for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create12(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def index21(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IndexTiersResponse:
        """Retrieve all tiers belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index21(
                publication_id,
                authorization,
                expand=expand,
                limit=limit,
                page=page,
                direction=direction,
                request_options=request_options,
            ),
        )

    async def patch4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.patch4(
                publication_id, tier_id, authorization, body=body, request_options=request_options
            ),
        )

    async def put4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.put4(
                publication_id, tier_id, authorization, body=body, request_options=request_options
            ),
        )

    async def show16(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TierResponse:
        """Retrieve a single tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show16(
                publication_id, tier_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTiersWithRawResponse:
        return self._with_raw_response


class TiersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create12(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest | PublicationsTiersRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Create12ErrorBody]:
        """Create a new tier for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/tiers"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsTiersRequest | PublicationsTiersRequestDict | None](body),
            decoder=json_decoder[TierResponse],
            error_mapper=create12_error_mapper,
            request_options=request_options,
        )

    def index21(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IndexTiersResponse, Index21ErrorBody]:
        """Retrieve all tiers belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/tiers"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[str | None]("expand[]", expand),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[IndexTiersResponse],
            error_mapper=index21_error_mapper,
            request_options=request_options,
        )

    def patch4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Patch4ErrorBody]:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/tiers/{tierId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("tierId", tier_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None](body),
            decoder=json_decoder[TierResponse],
            error_mapper=patch4_error_mapper,
            request_options=request_options,
        )

    def put4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Put4ErrorBody]:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/tiers/{tierId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("tierId", tier_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None](body),
            decoder=json_decoder[TierResponse],
            error_mapper=put4_error_mapper,
            request_options=request_options,
        )

    def show16(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Show16ErrorBody]:
        """Retrieve a single tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/tiers/{tierId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("tierId", tier_id)],
            query_params=[param[str | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[TierResponse],
            error_mapper=show16_error_mapper,
            request_options=request_options,
        )


class AsyncTiersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create12(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest | PublicationsTiersRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Create12ErrorBody]:
        """Create a new tier for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/tiers"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsTiersRequest | PublicationsTiersRequestDict | None](body),
            decoder=async_json_decoder[TierResponse],
            error_mapper=create12_error_mapper,
            request_options=request_options,
        )

    async def index21(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IndexTiersResponse, Index21ErrorBody]:
        """Retrieve all tiers belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/tiers"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[str | None]("expand[]", expand),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[IndexTiersResponse],
            error_mapper=index21_error_mapper,
            request_options=request_options,
        )

    async def patch4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Patch4ErrorBody]:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/tiers/{tierId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("tierId", tier_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None](body),
            decoder=async_json_decoder[TierResponse],
            error_mapper=patch4_error_mapper,
            request_options=request_options,
        )

    async def put4(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        body: PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Put4ErrorBody]:
        """Update an existing tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/publications/{publicationId}/tiers/{tierId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("tierId", tier_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsTiersRequest1 | PublicationsTiersRequest1Dict | None](body),
            decoder=async_json_decoder[TierResponse],
            error_mapper=put4_error_mapper,
            request_options=request_options,
        )

    async def show16(
        self,
        publication_id: str,
        tier_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TierResponse, Show16ErrorBody]:
        """Retrieve a single tier belonging to a specific publication

        Args:
            publication_id: The prefixed ID of the publication object
            tier_id: The prefixed ID of the tier object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``stats`` - Returns statistics about the
                tier(s).<br>``prices`` - Returns prices for the tier(s).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/tiers/{tierId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("tierId", tier_id)],
            query_params=[param[str | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[TierResponse],
            error_mapper=show16_error_mapper,
            request_options=request_options,
        )
