from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_new_users_from_office365_async_error import (
    GetNewUsersFromOffice365AsyncErrorBody,
    get_new_users_from_office365_async_error_mapper,
)
from ..errors.get_new_users_from_office365_error import (
    GetNewUsersFromOffice365ErrorBody,
    get_new_users_from_office365_error_mapper,
)
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.list_users_error import ListUsersErrorBody, list_users_error_mapper
from ..errors.update_user_error import UpdateUserErrorBody, update_user_error_mapper
from ..models.companies_api_users_response import CompaniesApiUsersResponse
from ..models.user import User
from ..models.user_update import UserUpdate, UserUpdateDict
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def get_new_users_from_office365(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves new users or updated user information from Office 365. Runs synchronously. Not supported with S2S
        authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Users retrieved successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_new_users_from_office365(company_id, request_options=request_options))

    def get_new_users_from_office365_async(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Schedules a background job to retrieve new users from Office 365. Returns a link to the scheduled job for
        tracking progress. Not supported with S2S authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Background job scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_new_users_from_office365_async(company_id, request_options=request_options)
        )

    def get_user(self, company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> User:
        """Retrieves a specific user by user security ID.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved user

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_user(company_id, user_id, request_options=request_options))

    def list_users(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiUsersResponse:
        """Returns a list of Business Central users.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved users

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_users(company_id, request_options=request_options))

    def update_user(
        self,
        company_id: UUID,
        user_id: UUID,
        if_match: str,
        body: UserUpdate | UserUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> User:
        """Updates properties of a Business Central user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User updated successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_user(company_id, user_id, if_match, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def get_new_users_from_office365(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Retrieves new users or updated user information from Office 365. Runs synchronously. Not supported with S2S
        authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Users retrieved successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_new_users_from_office365(company_id, request_options=request_options)
        )

    async def get_new_users_from_office365_async(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Schedules a background job to retrieve new users from Office 365. Returns a link to the scheduled job for
        tracking progress. Not supported with S2S authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Background job scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_new_users_from_office365_async(
                company_id, request_options=request_options
            ),
        )

    async def get_user(
        self, company_id: UUID, user_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> User:
        """Retrieves a specific user by user security ID.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved user

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_user(company_id, user_id, request_options=request_options))

    async def list_users(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiUsersResponse:
        """Returns a list of Business Central users.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved users

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_users(company_id, request_options=request_options))

    async def update_user(
        self,
        company_id: UUID,
        user_id: UUID,
        if_match: str,
        body: UserUpdate | UserUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> User:
        """Updates properties of a Business Central user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User updated successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_user(
                company_id, user_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_new_users_from_office365(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetNewUsersFromOffice365ErrorBody]:
        """Retrieves new users or updated user information from Office 365. Runs synchronously. Not supported with S2S
        authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=get_new_users_from_office365_error_mapper,
            request_options=request_options,
        )

    def get_new_users_from_office365_async(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetNewUsersFromOffice365AsyncErrorBody]:
        """Schedules a background job to retrieve new users from Office 365. Returns a link to the scheduled job for
        tracking progress. Not supported with S2S authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365Async"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=get_new_users_from_office365_async_error_mapper,
            request_options=request_options,
        )

    def get_user(
        self, company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User, GetUserErrorBody]:
        """Retrieves a specific user by user security ID.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[User],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def list_users(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiUsersResponse, ListUsersErrorBody]:
        """Returns a list of Business Central users.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiUsersResponse],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    def update_user(
        self,
        company_id: UUID,
        user_id: UUID,
        if_match: str,
        body: UserUpdate | UserUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[User, UpdateUserErrorBody]:
        """Updates properties of a Business Central user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserUpdate | UserUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[User],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_new_users_from_office365(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetNewUsersFromOffice365ErrorBody]:
        """Retrieves new users or updated user information from Office 365. Runs synchronously. Not supported with S2S
        authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=get_new_users_from_office365_error_mapper,
            request_options=request_options,
        )

    async def get_new_users_from_office365_async(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, GetNewUsersFromOffice365AsyncErrorBody]:
        """Schedules a background job to retrieve new users from Office 365. Returns a link to the scheduled job for
        tracking progress. Not supported with S2S authentication.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365Async"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=get_new_users_from_office365_async_error_mapper,
            request_options=request_options,
        )

    async def get_user(
        self, company_id: UUID, user_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, GetUserErrorBody]:
        """Retrieves a specific user by user security ID.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[User],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def list_users(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiUsersResponse, ListUsersErrorBody]:
        """Returns a list of Business Central users.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiUsersResponse],
            error_mapper=list_users_error_mapper,
            request_options=request_options,
        )

    async def update_user(
        self,
        company_id: UUID,
        user_id: UUID,
        if_match: str,
        body: UserUpdate | UserUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[User, UpdateUserErrorBody]:
        """Updates properties of a Business Central user.

        Args:
            company_id: The unique identifier of the company
            user_id: The user security ID
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/users({user_id})"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("user_id", user_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserUpdate | UserUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[User],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )
