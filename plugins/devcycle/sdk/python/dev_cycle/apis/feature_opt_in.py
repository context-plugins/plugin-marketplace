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
from ..errors.get_v1_opt_in_config_error import GetV1OptInConfigErrorBody, get_v1_opt_in_config_error_mapper
from ..errors.put_v1_opt_ins_by_user_id_error import (
    PutV1OptInsByUserIdErrorBody,
    put_v1_opt_ins_by_user_id_error_mapper,
)
from ..models.opt_in_config_response import OptInConfigResponse
from ..models.v1_opt_ins_response import V1OptInsResponse
from ..server.server import Server


class FeatureOptIn:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FeatureOptInWithRawResponse(client, server)

    def get_v1_opt_in_config(
        self, user_id: str, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> OptInConfigResponse:
        """Fetch a project config to display features available for Opt-in

        Args:
            user_id: Unique id to identify the user
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Opt-in Config Response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Internal Server Error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_v1_opt_in_config(user_id, sdk_key=sdk_key, request_options=request_options)
        )

    def put_v1_opt_ins_by_user_id(
        self,
        user_id: str,
        body: dict[str, bool],
        *,
        sdk_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1OptInsResponse:
        """Send a ``PUT`` request.

        Args:
            user_id: Unique user_id to identify the user
            body: A map of feature IDs to boolean values. The value should be true if the user has opted in, false
                otherwise
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Opt-in update success response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Forbidden - Feature not
                enabled or insufficient permissions Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.put_v1_opt_ins_by_user_id(
                user_id, body, sdk_key=sdk_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FeatureOptInWithRawResponse:
        return self._with_raw_response


class AsyncFeatureOptIn:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFeatureOptInWithRawResponse(client, server)

    async def get_v1_opt_in_config(
        self, user_id: str, *, sdk_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OptInConfigResponse:
        """Fetch a project config to display features available for Opt-in

        Args:
            user_id: Unique id to identify the user
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Opt-in Config Response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Internal Server Error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_v1_opt_in_config(
                user_id, sdk_key=sdk_key, request_options=request_options
            ),
        )

    async def put_v1_opt_ins_by_user_id(
        self,
        user_id: str,
        body: dict[str, bool],
        *,
        sdk_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1OptInsResponse:
        """Send a ``PUT`` request.

        Args:
            user_id: Unique user_id to identify the user
            body: A map of feature IDs to boolean values. The value should be true if the user has opted in, false
                otherwise
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Opt-in update success response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Forbidden - Feature not
                enabled or insufficient permissions Internal Server Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.put_v1_opt_ins_by_user_id(
                user_id, body, sdk_key=sdk_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFeatureOptInWithRawResponse:
        return self._with_raw_response


class FeatureOptInWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_v1_opt_in_config(
        self, user_id: str, *, sdk_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OptInConfigResponse, GetV1OptInConfigErrorBody]:
        """Fetch a project config to display features available for Opt-in

        Args:
            user_id: Unique id to identify the user
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/optInConfig"),
            query_params=[param[str]("user_id", user_id), param[str | None]("sdkKey", sdk_key)],
            decoder=json_decoder[OptInConfigResponse],
            error_mapper=get_v1_opt_in_config_error_mapper,
            request_options=request_options,
        )

    def put_v1_opt_ins_by_user_id(
        self,
        user_id: str,
        body: dict[str, bool],
        *,
        sdk_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1OptInsResponse, PutV1OptInsByUserIdErrorBody]:
        """Send a ``PUT`` request.

        Args:
            user_id: Unique user_id to identify the user
            body: A map of feature IDs to boolean values. The value should be true if the user has opted in, false
                otherwise
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/optIns/{user_id}"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str | None]("sdkKey", sdk_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[dict[str, bool]](body),
            decoder=json_decoder[V1OptInsResponse],
            error_mapper=put_v1_opt_ins_by_user_id_error_mapper,
            request_options=request_options,
        )


class AsyncFeatureOptInWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_v1_opt_in_config(
        self, user_id: str, *, sdk_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OptInConfigResponse, GetV1OptInConfigErrorBody]:
        """Fetch a project config to display features available for Opt-in

        Args:
            user_id: Unique id to identify the user
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/optInConfig"),
            query_params=[param[str]("user_id", user_id), param[str | None]("sdkKey", sdk_key)],
            decoder=async_json_decoder[OptInConfigResponse],
            error_mapper=get_v1_opt_in_config_error_mapper,
            request_options=request_options,
        )

    async def put_v1_opt_ins_by_user_id(
        self,
        user_id: str,
        body: dict[str, bool],
        *,
        sdk_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1OptInsResponse, PutV1OptInsByUserIdErrorBody]:
        """Send a ``PUT`` request.

        Args:
            user_id: Unique user_id to identify the user
            body: A map of feature IDs to boolean values. The value should be true if the user has opted in, false
                otherwise
            sdk_key: SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header
                or "sdkKey" query parameter is required to be set.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/optIns/{user_id}"),
            path_params=[param[str]("user_id", user_id)],
            query_params=[param[str | None]("sdkKey", sdk_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[dict[str, bool]](body),
            decoder=async_json_decoder[V1OptInsResponse],
            error_mapper=put_v1_opt_ins_by_user_id_error_mapper,
            request_options=request_options,
        )
