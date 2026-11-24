from __future__ import annotations

from typing import Any
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
from ..errors.get_current_value_model_error import GetCurrentValueModelErrorBody, get_current_value_model_error_mapper
from ..errors.get_value_model_version_error import GetValueModelVersionErrorBody, get_value_model_version_error_mapper
from ..errors.list_value_model_versions_error import (
    ListValueModelVersionsErrorBody,
    list_value_model_versions_error_mapper,
)
from ..errors.refresh_value_model_backfill_error import (
    RefreshValueModelBackfillErrorBody,
    refresh_value_model_backfill_error_mapper,
)
from ..errors.update_value_model_error import UpdateValueModelErrorBody, update_value_model_error_mapper
from ..models.backfill_response import BackfillResponse
from ..models.value_model_detail import ValueModelDetail
from ..models.value_model_upload_request import ValueModelUploadRequest, ValueModelUploadRequestDict
from ..models.value_model_version_list_response import ValueModelVersionListResponse
from ..server.server import Server


class ValueModels:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ValueModelsWithRawResponse(client, server)

    def get_current_value_model(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ValueModelDetail:
        """Returns the current (latest active) value model for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_current_value_model(authorization, request_options=request_options))

    def get_value_model_version(
        self, version: int, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ValueModelDetail:
        """Returns a specific historical value model version by version number, including full content.

        Args:
            version: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_value_model_version(version, authorization, request_options=request_options)
        )

    def list_value_model_versions(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueModelVersionListResponse:
        """Returns all value model versions sorted by version descending. Does not include the full content.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_value_model_versions(
                authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def refresh_value_model_backfill(
        self, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> BackfillResponse:
        """Manually triggers a recalculation of all ClickHouse rows against the current value model.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.refresh_value_model_backfill(
                authorization, body=body, request_options=request_options
            ),
        )

    def update_value_model(
        self,
        authorization: str,
        *,
        body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueModelDetail:
        """Uploads a new value model version. Validates the content, creates a new version, archives the previous active
        version, syncs to ClickHouse, and triggers a backfill of all historical signals.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_value_model(authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ValueModelsWithRawResponse:
        return self._with_raw_response


class AsyncValueModels:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncValueModelsWithRawResponse(client, server)

    async def get_current_value_model(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ValueModelDetail:
        """Returns the current (latest active) value model for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_current_value_model(authorization, request_options=request_options)
        )

    async def get_value_model_version(
        self, version: int, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ValueModelDetail:
        """Returns a specific historical value model version by version number, including full content.

        Args:
            version: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_value_model_version(
                version, authorization, request_options=request_options
            ),
        )

    async def list_value_model_versions(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueModelVersionListResponse:
        """Returns all value model versions sorted by version descending. Does not include the full content.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_value_model_versions(
                authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def refresh_value_model_backfill(
        self, authorization: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BackfillResponse:
        """Manually triggers a recalculation of all ClickHouse rows against the current value model.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.refresh_value_model_backfill(
                authorization, body=body, request_options=request_options
            ),
        )

    async def update_value_model(
        self,
        authorization: str,
        *,
        body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueModelDetail:
        """Uploads a new value model version. Validates the content, creates a new version, archives the previous active
        version, syncs to ClickHouse, and triggers a backfill of all historical signals.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_value_model(authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncValueModelsWithRawResponse:
        return self._with_raw_response


class ValueModelsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_current_value_model(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ValueModelDetail, GetCurrentValueModelErrorBody]:
        """Returns the current (latest active) value model for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ValueModelDetail],
            error_mapper=get_current_value_model_error_mapper,
            request_options=request_options,
        )

    def get_value_model_version(
        self, version: int, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ValueModelDetail, GetValueModelVersionErrorBody]:
        """Returns a specific historical value model version by version number, including full content.

        Args:
            version: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/versions/{version}"),
            path_params=[param[int]("version", version)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ValueModelDetail],
            error_mapper=get_value_model_version_error_mapper,
            request_options=request_options,
        )

    def list_value_model_versions(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueModelVersionListResponse, ListValueModelVersionsErrorBody]:
        """Returns all value model versions sorted by version descending. Does not include the full content.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/versions"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ValueModelVersionListResponse],
            error_mapper=list_value_model_versions_error_mapper,
            request_options=request_options,
        )

    def refresh_value_model_backfill(
        self, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BackfillResponse, RefreshValueModelBackfillErrorBody]:
        """Manually triggers a recalculation of all ClickHouse rows against the current value model.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/backfill"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[BackfillResponse],
            error_mapper=refresh_value_model_backfill_error_mapper,
            request_options=request_options,
        )

    def update_value_model(
        self,
        authorization: str,
        *,
        body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueModelDetail, UpdateValueModelErrorBody]:
        """Uploads a new value model version. Validates the content, creates a new version, archives the previous active
        version, syncs to ClickHouse, and triggers a backfill of all historical signals.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ValueModelUploadRequest | ValueModelUploadRequestDict | None](body),
            decoder=json_decoder[ValueModelDetail],
            error_mapper=update_value_model_error_mapper,
            request_options=request_options,
        )


class AsyncValueModelsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_current_value_model(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ValueModelDetail, GetCurrentValueModelErrorBody]:
        """Returns the current (latest active) value model for the organization.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ValueModelDetail],
            error_mapper=get_current_value_model_error_mapper,
            request_options=request_options,
        )

    async def get_value_model_version(
        self, version: int, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ValueModelDetail, GetValueModelVersionErrorBody]:
        """Returns a specific historical value model version by version number, including full content.

        Args:
            version: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/versions/{version}"),
            path_params=[param[int]("version", version)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ValueModelDetail],
            error_mapper=get_value_model_version_error_mapper,
            request_options=request_options,
        )

    async def list_value_model_versions(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueModelVersionListResponse, ListValueModelVersionsErrorBody]:
        """Returns all value model versions sorted by version descending. Does not include the full content.

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/versions"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ValueModelVersionListResponse],
            error_mapper=list_value_model_versions_error_mapper,
            request_options=request_options,
        )

    async def refresh_value_model_backfill(
        self, authorization: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BackfillResponse, RefreshValueModelBackfillErrorBody]:
        """Manually triggers a recalculation of all ClickHouse rows against the current value model.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/backfill"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[BackfillResponse],
            error_mapper=refresh_value_model_backfill_error_mapper,
            request_options=request_options,
        )

    async def update_value_model(
        self,
        authorization: str,
        *,
        body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueModelDetail, UpdateValueModelErrorBody]:
        """Uploads a new value model version. Validates the content, creates a new version, archives the previous active
        version, syncs to ClickHouse, and triggers a backfill of all historical signals.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/value-models/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ValueModelUploadRequest | ValueModelUploadRequestDict | None](body),
            decoder=async_json_decoder[ValueModelDetail],
            error_mapper=update_value_model_error_mapper,
            request_options=request_options,
        )
