from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_session_info_error import GetSessionInfoErrorBody, get_session_info_error_mapper
from ..errors.list_all_organizations_error import ListAllOrganizationsErrorBody, list_all_organizations_error_mapper
from ..errors.login_error import LoginErrorBody, login_error_mapper
from ..errors.logout_error import LogoutErrorBody, logout_error_mapper
from ..models.list_all_response_dto_all_organizations_response_dto import ListAllResponseDtoAllOrganizationsResponseDto
from ..models.login_request_dto import LoginRequestDto, LoginRequestDtoDict
from ..models.login_response_dto import LoginResponseDto
from ..models.session_info_response_dto import SessionInfoResponseDto
from ..server.server import Server


class Authentication:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuthenticationWithRawResponse(client, server)

    def get_session_info(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SessionInfoResponseDto:
        """Get details about your current API session. This includes information about the current organization ID, user
        ID, and MFA status of the organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get API session details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_session_info(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_all_organizations(
        self,
        *,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListAllResponseDtoAllOrganizationsResponseDto:
        """Get a list of organizations you can access with your current API session. You get 100 results on one page of
        results.

        In the response, you get a list of organizations and console organizations. When a console organization is
        available in the response, this indicates that the console organization is a parent of the listed organization.

        Args:
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of login organizations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_all_organizations(
                page=page, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def login(
        self, body: LoginRequestDto | LoginRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> LoginResponseDto:
        """Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated
        ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you are in a
        signed-in session.

        To create an MFA-trusted API session, set ``rememberMeId`` and ``device`` in addition to the required fields.
        See MFA setup for information about the BILL MFA process.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        See API partner login for information about the additional permissions you get with the API partner login.

        **Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend &
        Expense API token for information about authentication for the Spend & Expense API endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API login response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(self._with_raw_response.login(body, request_options=request_options))

    def logout(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sign out of your BILL developer account. In response, the current ``sessionId`` expires and your API session
        is terminated.

        You will be required to sign in again with ``/v3/login`` before you can make another API call.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API logout response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.logout(session_id=session_id, dev_key=dev_key, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AuthenticationWithRawResponse:
        return self._with_raw_response


class AsyncAuthentication:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuthenticationWithRawResponse(client, server)

    async def get_session_info(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SessionInfoResponseDto:
        """Get details about your current API session. This includes information about the current organization ID, user
        ID, and MFA status of the organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get API session details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_info(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_all_organizations(
        self,
        *,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListAllResponseDtoAllOrganizationsResponseDto:
        """Get a list of organizations you can access with your current API session. You get 100 results on one page of
        results.

        In the response, you get a list of organizations and console organizations. When a console organization is
        available in the response, this indicates that the console organization is a parent of the listed organization.

        Args:
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of login organizations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_all_organizations(
                page=page, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def login(
        self, body: LoginRequestDto | LoginRequestDtoDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LoginResponseDto:
        """Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated
        ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you are in a
        signed-in session.

        To create an MFA-trusted API session, set ``rememberMeId`` and ``device`` in addition to the required fields.
        See MFA setup for information about the BILL MFA process.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        See API partner login for information about the additional permissions you get with the API partner login.

        **Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend &
        Expense API token for information about authentication for the Spend & Expense API endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API login response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(await self._with_raw_response.login(body, request_options=request_options))

    async def logout(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sign out of your BILL developer account. In response, the current ``sessionId`` expires and your API session
        is terminated.

        You will be required to sign in again with ``/v3/login`` before you can make another API call.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API logout response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.logout(
                session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuthenticationWithRawResponse:
        return self._with_raw_response


class AuthenticationWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_session_info(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionInfoResponseDto, GetSessionInfoErrorBody]:
        """Get details about your current API session. This includes information about the current organization ID, user
        ID, and MFA status of the organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/login/session"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[SessionInfoResponseDto],
            error_mapper=get_session_info_error_mapper,
            request_options=request_options,
        )

    def list_all_organizations(
        self,
        *,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAllResponseDtoAllOrganizationsResponseDto, ListAllOrganizationsErrorBody]:
        """Get a list of organizations you can access with your current API session. You get 100 results on one page of
        results.

        In the response, you get a list of organizations and console organizations. When a console organization is
        available in the response, this indicates that the console organization is a parent of the listed organization.

        Args:
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/login/organizations"),
            query_params=[param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListAllResponseDtoAllOrganizationsResponseDto],
            error_mapper=list_all_organizations_error_mapper,
            request_options=request_options,
        )

    def login(
        self, body: LoginRequestDto | LoginRequestDtoDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LoginResponseDto, LoginErrorBody]:
        """Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated
        ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you are in a
        signed-in session.

        To create an MFA-trusted API session, set ``rememberMeId`` and ``device`` in addition to the required fields.
        See MFA setup for information about the BILL MFA process.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        See API partner login for information about the additional permissions you get with the API partner login.

        **Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend &
        Expense API token for information about authentication for the Spend & Expense API endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LoginRequestDto | LoginRequestDtoDict](body),
            decoder=json_decoder[LoginResponseDto],
            error_mapper=login_error_mapper,
            request_options=request_options,
        )

    def logout(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, LogoutErrorBody]:
        """Sign out of your BILL developer account. In response, the current ``sessionId`` expires and your API session
        is terminated.

        You will be required to sign in again with ``/v3/login`` before you can make another API call.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/logout"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=empty_response,
            error_mapper=logout_error_mapper,
            request_options=request_options,
        )


class AsyncAuthenticationWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_session_info(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SessionInfoResponseDto, GetSessionInfoErrorBody]:
        """Get details about your current API session. This includes information about the current organization ID, user
        ID, and MFA status of the organization.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/login/session"),
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[SessionInfoResponseDto],
            error_mapper=get_session_info_error_mapper,
            request_options=request_options,
        )

    async def list_all_organizations(
        self,
        *,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListAllResponseDtoAllOrganizationsResponseDto, ListAllOrganizationsErrorBody]:
        """Get a list of organizations you can access with your current API session. You get 100 results on one page of
        results.

        In the response, you get a list of organizations and console organizations. When a console organization is
        available in the response, this indicates that the console organization is a parent of the listed organization.

        Args:
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/login/organizations"),
            query_params=[param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListAllResponseDtoAllOrganizationsResponseDto],
            error_mapper=list_all_organizations_error_mapper,
            request_options=request_options,
        )

    async def login(
        self, body: LoginRequestDto | LoginRequestDtoDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LoginResponseDto, LoginErrorBody]:
        """Sign in to your BILL developer account. In the response, your API session is created and a BILL-generated
        ``sessionId`` is available. Use the ``sessionId`` in all subsequent API calls to confirm that you are in a
        signed-in session.

        To create an MFA-trusted API session, set ``rememberMeId`` and ``device`` in addition to the required fields.
        See MFA setup for information about the BILL MFA process.

        You can sign out with ``POST /v3/logout``. If your API session is inactive for 35 minutes, the session expires
        and you are automatically signed out.

        See API partner login for information about the additional permissions you get with the API partner login.

        **Note**: This section is about authentication for working with the BILL v3 API. See Authentication with Spend &
        Expense API token for information about authentication for the Spend & Expense API endpoints.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LoginRequestDto | LoginRequestDtoDict](body),
            decoder=async_json_decoder[LoginResponseDto],
            error_mapper=login_error_mapper,
            request_options=request_options,
        )

    async def logout(
        self,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, LogoutErrorBody]:
        """Sign out of your BILL developer account. In response, the current ``sessionId`` expires and your API session
        is terminated.

        You will be required to sign in again with ``/v3/login`` before you can make another API call.

        Args:
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/logout"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_empty_response,
            error_mapper=logout_error_mapper,
            request_options=request_options,
        )
