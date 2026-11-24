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
    form_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_new_api_key_error import CreateNewApiKeyErrorBody, create_new_api_key_error_mapper
from ..errors.get_account_error import GetAccountErrorBody, get_account_error_mapper
from ..errors.get_universal_account_error import GetUniversalAccountErrorBody, get_universal_account_error_mapper
from ..models.api_key import ApiKey
from ..models.universal_credits_user_model_with_extra_attributes import UniversalCreditsUserModelWithExtraAttributes
from ..models.user_model import UserModel
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def create_new_api_key(
        self, *, api_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiKey:
        """Create New API Key

        Args:
            api_key: The API key for your account. You can also find your API key `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the new API key.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.create_new_api_key(api_key=api_key, request_options=request_options))

    def get_account(self, *, request_options: RequestOptionsOrDict | None = None) -> UserModel:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the account object.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_account(request_options=request_options))

    def get_universal_account(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> UniversalCreditsUserModelWithExtraAttributes:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the account object.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(self._with_raw_response.get_universal_account(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def create_new_api_key(
        self, *, api_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiKey:
        """Create New API Key

        Args:
            api_key: The API key for your account. You can also find your API key `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the new API key.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_new_api_key(api_key=api_key, request_options=request_options)
        )

    async def get_account(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> UserModel:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the account object.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.get_account(request_options=request_options))

    async def get_universal_account(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UniversalCreditsUserModelWithExtraAttributes:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Returns the account object.

        Raises:
            ApiError: Bad Request. The request is malformed or missing required parameters. Unauthorized. API Key is
                missing or invalid. Forbidden. API Key lacks permission to perform this action. Not Found. The requested
                resource (e.g., profile) does not exist. Too Many Requests. API request limit reached -- slow down
                requests. Internal Server Error. Unexpected error on RocketReach servers. Try again later. ``error`` is
                ``RawError``."""
        return unwrap(await self._with_raw_response.get_universal_account(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_new_api_key(
        self, *, api_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKey, CreateNewApiKeyErrorBody]:
        """Create New API Key

        Args:
            api_key: The API key for your account. You can also find your API key `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/account/key/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(param[str | None]("api_key", api_key)),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[ApiKey],
            error_mapper=create_new_api_key_error_mapper,
            request_options=request_options,
        )

    def get_account(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UserModel, GetAccountErrorBody]:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account/"),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[UserModel],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    def get_universal_account(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UniversalCreditsUserModelWithExtraAttributes, GetUniversalAccountErrorBody]:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/account/"),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=json_decoder[UniversalCreditsUserModelWithExtraAttributes],
            error_mapper=get_universal_account_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_new_api_key(
        self, *, api_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKey, CreateNewApiKeyErrorBody]:
        """Create New API Key

        Args:
            api_key: The API key for your account. You can also find your API key `here
                <https://rocketreach.co/account?section=nav_gen_api>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/account/key/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(param[str | None]("api_key", api_key)),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[ApiKey],
            error_mapper=create_new_api_key_error_mapper,
            request_options=request_options,
        )

    async def get_account(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UserModel, GetAccountErrorBody]:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account/"),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[UserModel],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    async def get_universal_account(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UniversalCreditsUserModelWithExtraAttributes, GetUniversalAccountErrorBody]:
        """Retrieve & Manage Account Details

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/universal/account/"),
            auth_scheme=self._auth.rocket_reach_api_key,
            decoder=async_json_decoder[UniversalCreditsUserModelWithExtraAttributes],
            error_mapper=get_universal_account_error_mapper,
            request_options=request_options,
        )
