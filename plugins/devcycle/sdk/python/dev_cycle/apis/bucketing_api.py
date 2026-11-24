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
from ..errors.get_features_error import GetFeaturesErrorBody, get_features_error_mapper
from ..errors.get_variable_by_key_error import GetVariableByKeyErrorBody, get_variable_by_key_error_mapper
from ..errors.get_variables_error import GetVariablesErrorBody, get_variables_error_mapper
from ..errors.post_events_error import PostEventsErrorBody, post_events_error_mapper
from ..models.feature import Feature
from ..models.user_data import UserData, UserDataDict
from ..models.user_data_and_events_body import UserDataAndEventsBody, UserDataAndEventsBodyDict
from ..models.v1_track_response import V1TrackResponse
from ..models.variable import Variable
from ..server.server import Server


class BucketingApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BucketingApiWithRawResponse(client, server, auth)

    def get_features(
        self, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Feature]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Features response (map of Feature keys to Feature objects)

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_features(body, request_options=request_options))

    def get_variable_by_key(
        self, key: str, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Variable:
        """Send a ``POST`` request.

        Args:
            key: Variable key
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Variable response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_variable_by_key(key, body, request_options=request_options))

    def get_variables(
        self, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Variable]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Variables response (map of variable keys to Variable objects)

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_variables(body, request_options=request_options))

    def post_events(
        self,
        body: UserDataAndEventsBody | UserDataAndEventsBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TrackResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Events received successfully

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_events(body, request_options=request_options))

    @property
    def with_raw_response(self) -> BucketingApiWithRawResponse:
        return self._with_raw_response


class AsyncBucketingApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBucketingApiWithRawResponse(client, server, auth)

    async def get_features(
        self, body: UserData | UserDataDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Feature]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Features response (map of Feature keys to Feature objects)

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_features(body, request_options=request_options))

    async def get_variable_by_key(
        self, key: str, body: UserData | UserDataDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Variable:
        """Send a ``POST`` request.

        Args:
            key: Variable key
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Variable response

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_variable_by_key(key, body, request_options=request_options))

    async def get_variables(
        self, body: UserData | UserDataDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Variable]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Variables response (map of variable keys to Variable objects)

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_variables(body, request_options=request_options))

    async def post_events(
        self,
        body: UserDataAndEventsBody | UserDataAndEventsBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1TrackResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Events received successfully

        Raises:
            ApiError: Bad Request Missing 'sdkKey' query parameter or 'Authorization' header Not Found Internal Server
                Error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_events(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBucketingApiWithRawResponse:
        return self._with_raw_response


class BucketingApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_features(
        self, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Feature], GetFeaturesErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/features"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserData | UserDataDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Feature]],
            error_mapper=get_features_error_mapper,
            request_options=request_options,
        )

    def get_variable_by_key(
        self, key: str, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Variable, GetVariableByKeyErrorBody]:
        """Send a ``POST`` request.

        Args:
            key: Variable key
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/variables/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserData | UserDataDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Variable],
            error_mapper=get_variable_by_key_error_mapper,
            request_options=request_options,
        )

    def get_variables(
        self, body: UserData | UserDataDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Variable], GetVariablesErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/variables"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserData | UserDataDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Variable]],
            error_mapper=get_variables_error_mapper,
            request_options=request_options,
        )

    def post_events(
        self,
        body: UserDataAndEventsBody | UserDataAndEventsBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TrackResponse, PostEventsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/track"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserDataAndEventsBody | UserDataAndEventsBodyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1TrackResponse],
            error_mapper=post_events_error_mapper,
            request_options=request_options,
        )


class AsyncBucketingApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_features(
        self, body: UserData | UserDataDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Feature], GetFeaturesErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/features"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserData | UserDataDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Feature]],
            error_mapper=get_features_error_mapper,
            request_options=request_options,
        )

    async def get_variable_by_key(
        self, key: str, body: UserData | UserDataDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Variable, GetVariableByKeyErrorBody]:
        """Send a ``POST`` request.

        Args:
            key: Variable key
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/variables/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserData | UserDataDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Variable],
            error_mapper=get_variable_by_key_error_mapper,
            request_options=request_options,
        )

    async def get_variables(
        self, body: UserData | UserDataDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Variable], GetVariablesErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/variables"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserData | UserDataDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Variable]],
            error_mapper=get_variables_error_mapper,
            request_options=request_options,
        )

    async def post_events(
        self,
        body: UserDataAndEventsBody | UserDataAndEventsBodyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TrackResponse, PostEventsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_dev_cycle_bucketing_bucketing_api("/v1/track"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserDataAndEventsBody | UserDataAndEventsBodyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1TrackResponse],
            error_mapper=post_events_error_mapper,
            request_options=request_options,
        )
