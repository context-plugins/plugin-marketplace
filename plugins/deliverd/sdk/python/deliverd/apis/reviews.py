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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_api_v1_reviews_by_id_error import GetApiV1ReviewsByIdErrorBody, get_api_v1_reviews_by_id_error_mapper
from ..errors.post_api_v1_reviews_by_id_cancel_error import (
    PostApiV1ReviewsByIdCancelErrorBody,
    post_api_v1_reviews_by_id_cancel_error_mapper,
)
from ..errors.post_api_v1_reviews_error import PostApiV1ReviewsErrorBody, post_api_v1_reviews_error_mapper
from ..models.api_v1_reviews_cancel_response import ApiV1ReviewsCancelResponse
from ..models.api_v1_reviews_request import ApiV1ReviewsRequest, ApiV1ReviewsRequestDict
from ..models.api_v1_reviews_response import ApiV1ReviewsResponse
from ..models.api_v1_reviews_response1 import ApiV1ReviewsResponse1
from ..models.enums.status_deliverd_dev_reviews_api import StatusDeliverdDevReviewsApiOrStr
from ..server.server import Server


class Reviews:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReviewsWithRawResponse(client, server, auth)

    def get_api_v1_reviews(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevReviewsApiOrStr | None = None,
        external_id: str | None = None,
        report_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReviewsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            report_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_reviews(
                limit=limit,
                cursor=cursor,
                status=status,
                external_id=external_id,
                report_id=report_id,
                request_options=request_options,
            ),
        )

    def get_api_v1_reviews_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ReviewsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_reviews_by_id(id_, request_options=request_options))

    def post_api_v1_reviews(
        self,
        *,
        body: ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ReviewsResponse:
        """Creates a review and returns its page. The verdict is a person's: read it by polling GET
        /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP
        tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by
        email or id and must be active members or guests who can already open the report; anyone else is refused. The
        requester cannot review their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review, pending

        Raises:
            ApiError: A reviewer is not someone the organisation knows, or the requester named only themselves ``error``
                is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_reviews(body=body, request_options=request_options))

    def post_api_v1_reviews_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ReviewsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review, cancelled

        Raises:
            ApiError: Not the requester Already settled ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_reviews_by_id_cancel(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> ReviewsWithRawResponse:
        return self._with_raw_response


class AsyncReviews:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReviewsWithRawResponse(client, server, auth)

    async def get_api_v1_reviews(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevReviewsApiOrStr | None = None,
        external_id: str | None = None,
        report_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReviewsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            report_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_reviews(
                limit=limit,
                cursor=cursor,
                status=status,
                external_id=external_id,
                report_id=report_id,
                request_options=request_options,
            ),
        )

    async def get_api_v1_reviews_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ReviewsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_reviews_by_id(id_, request_options=request_options))

    async def post_api_v1_reviews(
        self,
        *,
        body: ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ReviewsResponse:
        """Creates a review and returns its page. The verdict is a person's: read it by polling GET
        /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP
        tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by
        email or id and must be active members or guests who can already open the report; anyone else is refused. The
        requester cannot review their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review, pending

        Raises:
            ApiError: A reviewer is not someone the organisation knows, or the requester named only themselves ``error``
                is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_reviews(body=body, request_options=request_options))

    async def post_api_v1_reviews_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ReviewsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The review, cancelled

        Raises:
            ApiError: Not the requester Already settled ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_reviews_by_id_cancel(id_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncReviewsWithRawResponse:
        return self._with_raw_response


class ReviewsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_reviews(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevReviewsApiOrStr | None = None,
        external_id: str | None = None,
        report_id: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReviewsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            report_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reviews"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[StatusDeliverdDevReviewsApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
                param[UUID | None]("reportId", report_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReviewsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_reviews_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReviewsResponse, GetApiV1ReviewsByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reviews/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReviewsResponse],
            error_mapper=get_api_v1_reviews_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reviews(
        self,
        *,
        body: ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReviewsResponse, PostApiV1ReviewsErrorBody]:
        """Creates a review and returns its page. The verdict is a person's: read it by polling GET
        /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP
        tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by
        email or id and must be active members or guests who can already open the report; anyone else is refused. The
        requester cannot review their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reviews"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReviewsResponse],
            error_mapper=post_api_v1_reviews_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_reviews_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReviewsCancelResponse, PostApiV1ReviewsByIdCancelErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reviews/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ReviewsCancelResponse],
            error_mapper=post_api_v1_reviews_by_id_cancel_error_mapper,
            request_options=request_options,
        )


class AsyncReviewsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_reviews(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevReviewsApiOrStr | None = None,
        external_id: str | None = None,
        report_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReviewsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            report_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reviews"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[StatusDeliverdDevReviewsApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
                param[UUID | None]("reportId", report_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReviewsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_reviews_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReviewsResponse, GetApiV1ReviewsByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/reviews/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReviewsResponse],
            error_mapper=get_api_v1_reviews_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reviews(
        self,
        *,
        body: ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ReviewsResponse, PostApiV1ReviewsErrorBody]:
        """Creates a review and returns its page. The verdict is a person's: read it by polling GET
        /api/v1/reviews/{id}, by the organisation's webhooks (review.approved, review.changes_requested), or by the MCP
        tool get_review. There is no endpoint that records a verdict — a key is not a person. Reviewers are named by
        email or id and must be active members or guests who can already open the report; anyone else is refused. The
        requester cannot review their own request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reviews"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ReviewsRequest | ApiV1ReviewsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReviewsResponse],
            error_mapper=post_api_v1_reviews_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_reviews_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ReviewsCancelResponse, PostApiV1ReviewsByIdCancelErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/reviews/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ReviewsCancelResponse],
            error_mapper=post_api_v1_reviews_by_id_cancel_error_mapper,
            request_options=request_options,
        )
