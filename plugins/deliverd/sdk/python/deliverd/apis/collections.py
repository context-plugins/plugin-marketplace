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
from ..errors.get_api_v1_collections_by_id_error import (
    GetApiV1CollectionsByIdErrorBody,
    get_api_v1_collections_by_id_error_mapper,
)
from ..errors.post_api_v1_collections_by_id_cancel_error import (
    PostApiV1CollectionsByIdCancelErrorBody,
    post_api_v1_collections_by_id_cancel_error_mapper,
)
from ..errors.post_api_v1_collections_error import PostApiV1CollectionsErrorBody, post_api_v1_collections_error_mapper
from ..models.api_v1_collections_cancel_response import ApiV1CollectionsCancelResponse
from ..models.api_v1_collections_request import ApiV1CollectionsRequest, ApiV1CollectionsRequestDict
from ..models.api_v1_collections_response import ApiV1CollectionsResponse
from ..models.api_v1_collections_response1 import ApiV1CollectionsResponse1
from ..models.enums.status_deliverd_dev_collections_api import StatusDeliverdDevCollectionsApiOrStr
from ..server.server import Server


class Collections:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CollectionsWithRawResponse(client, server, auth)

    def get_api_v1_collections(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevCollectionsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CollectionsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_collections(
                limit=limit, cursor=cursor, status=status, external_id=external_id, request_options=request_options
            ),
        )

    def get_api_v1_collections_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CollectionsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_collections_by_id(id_, request_options=request_options))

    def post_api_v1_collections(
        self,
        *,
        body: ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CollectionsResponse:
        """Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET
        /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool
        get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by
        email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers
        are checked against the kind of question that asked for them, and a required question blocks submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, pending

        Raises:
            ApiError: A respondent is not someone the organisation knows, or a choice question has fewer than two
                options ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_collections(body=body, request_options=request_options))

    def post_api_v1_collections_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1CollectionsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, cancelled

        Raises:
            ApiError: Not the requester Already settled ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_collections_by_id_cancel(id_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CollectionsWithRawResponse:
        return self._with_raw_response


class AsyncCollections:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCollectionsWithRawResponse(client, server, auth)

    async def get_api_v1_collections(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevCollectionsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CollectionsResponse1:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Newest first

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_collections(
                limit=limit, cursor=cursor, status=status, external_id=external_id, request_options=request_options
            ),
        )

    async def get_api_v1_collections_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CollectionsResponse:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request

        Raises:
            ApiError: Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_collections_by_id(id_, request_options=request_options))

    async def post_api_v1_collections(
        self,
        *,
        body: ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CollectionsResponse:
        """Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET
        /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool
        get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by
        email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers
        are checked against the kind of question that asked for them, and a required question blocks submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, pending

        Raises:
            ApiError: A respondent is not someone the organisation knows, or a choice question has fewer than two
                options ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_collections(body=body, request_options=request_options))

    async def post_api_v1_collections_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1CollectionsCancelResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The request, cancelled

        Raises:
            ApiError: Not the requester Already settled ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_collections_by_id_cancel(id_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCollectionsWithRawResponse:
        return self._with_raw_response


class CollectionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_collections(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevCollectionsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CollectionsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/collections"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[StatusDeliverdDevCollectionsApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CollectionsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_api_v1_collections_by_id(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CollectionsResponse, GetApiV1CollectionsByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/collections/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CollectionsResponse],
            error_mapper=get_api_v1_collections_by_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_collections(
        self,
        *,
        body: ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CollectionsResponse, PostApiV1CollectionsErrorBody]:
        """Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET
        /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool
        get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by
        email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers
        are checked against the kind of question that asked for them, and a required question blocks submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/collections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CollectionsResponse],
            error_mapper=post_api_v1_collections_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_collections_by_id_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CollectionsCancelResponse, PostApiV1CollectionsByIdCancelErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/collections/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CollectionsCancelResponse],
            error_mapper=post_api_v1_collections_by_id_cancel_error_mapper,
            request_options=request_options,
        )


class AsyncCollectionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_collections(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        status: StatusDeliverdDevCollectionsApiOrStr | None = None,
        external_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CollectionsResponse1, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            cursor: nextCursor from a previous response. One we did not issue is refused.
            status: Value sent with the request.
            external_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/collections"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[StatusDeliverdDevCollectionsApiOrStr | None]("status", status),
                param[str | None]("externalId", external_id),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CollectionsResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_api_v1_collections_by_id(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CollectionsResponse, GetApiV1CollectionsByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/collections/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CollectionsResponse],
            error_mapper=get_api_v1_collections_by_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_collections(
        self,
        *,
        body: ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CollectionsResponse, PostApiV1CollectionsErrorBody]:
        """Creates a request and returns the page people fill in. The answers are theirs: read them by polling GET
        /api/v1/collections/{id}, by the organisation's webhooks (collection.completed), or by the MCP tool
        get_collection. There is no endpoint that submits an answer — a key is not a person. Respondents are named by
        email or id and must be active members or guests the organisation already knows; anyone else is refused. Answers
        are checked against the kind of question that asked for them, and a required question blocks submission.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/collections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1CollectionsRequest | ApiV1CollectionsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CollectionsResponse],
            error_mapper=post_api_v1_collections_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_collections_by_id_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1CollectionsCancelResponse, PostApiV1CollectionsByIdCancelErrorBody]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/collections/{id}/cancel"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CollectionsCancelResponse],
            error_mapper=post_api_v1_collections_by_id_cancel_error_mapper,
            request_options=request_options,
        )
