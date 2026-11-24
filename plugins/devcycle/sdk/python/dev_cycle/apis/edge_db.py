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
from ..errors.patch_v1_edgedb_by_user_id_error import (
    PatchV1EdgedbByUserIdErrorBody,
    patch_v1_edgedb_by_user_id_error_mapper,
)
from ..models.edge_db_api_response import EdgeDbApiResponse
from ..models.user_data_edge_db import UserDataEdgeDb, UserDataEdgeDbDict
from ..server.server import Server


class EdgeDb:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = EdgeDbWithRawResponse(client, server)

    def patch_v1_edgedb_by_user_id(
        self,
        user_id: str,
        body: UserDataEdgeDb | UserDataEdgeDbDict,
        *,
        sdk_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EdgeDbApiResponse:
        """Send a ``PATCH`` request.

        Args:
            user_id: A unique id used to fetch and update the EdgeDB data
            body: User properties to update the EdgeDB data
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Client SDK API Response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.patch_v1_edgedb_by_user_id(
                user_id, body, sdk_key=sdk_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EdgeDbWithRawResponse:
        return self._with_raw_response


class AsyncEdgeDb:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncEdgeDbWithRawResponse(client, server)

    async def patch_v1_edgedb_by_user_id(
        self,
        user_id: str,
        body: UserDataEdgeDb | UserDataEdgeDbDict,
        *,
        sdk_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EdgeDbApiResponse:
        """Send a ``PATCH`` request.

        Args:
            user_id: A unique id used to fetch and update the EdgeDB data
            body: User properties to update the EdgeDB data
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Client SDK API Response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.patch_v1_edgedb_by_user_id(
                user_id, body, sdk_key=sdk_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEdgeDbWithRawResponse:
        return self._with_raw_response


class EdgeDbWithRawResponse(BaseRawResponse[RawClient, Server]):
    def patch_v1_edgedb_by_user_id(
        self,
        user_id: str,
        body: UserDataEdgeDb | UserDataEdgeDbDict,
        *,
        sdk_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EdgeDbApiResponse, PatchV1EdgedbByUserIdErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            user_id: A unique id used to fetch and update the EdgeDB data
            body: User properties to update the EdgeDB data
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/edgedb/{user_id}"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str | None]("sdkKey", sdk_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserDataEdgeDb | UserDataEdgeDbDict](body),
            decoder=json_decoder[EdgeDbApiResponse],
            error_mapper=patch_v1_edgedb_by_user_id_error_mapper,
            request_options=request_options,
        )


class AsyncEdgeDbWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def patch_v1_edgedb_by_user_id(
        self,
        user_id: str,
        body: UserDataEdgeDb | UserDataEdgeDbDict,
        *,
        sdk_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EdgeDbApiResponse, PatchV1EdgedbByUserIdErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            user_id: A unique id used to fetch and update the EdgeDB data
            body: User properties to update the EdgeDB data
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/edgedb/{user_id}"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str | None]("sdkKey", sdk_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserDataEdgeDb | UserDataEdgeDbDict](body),
            decoder=async_json_decoder[EdgeDbApiResponse],
            error_mapper=patch_v1_edgedb_by_user_id_error_mapper,
            request_options=request_options,
        )
