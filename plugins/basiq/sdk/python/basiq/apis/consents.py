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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_consent_error import DeleteConsentErrorBody, delete_consent_error_mapper
from ..errors.get_consents_error import GetConsentsErrorBody, get_consents_error_mapper
from ..models.users_consents_response import UsersConsentsResponse
from ..server.server import Server


class Consents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConsentsWithRawResponse(client, server, auth)

    def delete_consent(
        self, user_id: str, consent_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a users consent, this action cannot be undone.

        Args:
            user_id: User identification.
            consent_id: Consent identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``UsersConsents400Error1 | UsersConsents401Error1 | UsersConsents403Error1 | UsersConsents404Error1 |
                UsersConsents500Error1 | UsersConsents503Error1 | RawError``."""
        return unwrap(self._with_raw_response.delete_consent(user_id, consent_id, request_options=request_options))

    def get_consents(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> UsersConsentsResponse:
        """Retrieves a list of the user consents

        Args:
            user_id: The identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a list of user consents if they exist.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersConsents400Error1 | UsersConsents401Error1 | UsersConsents403Error1 | UsersConsents404Error1 |
                UsersConsents500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_consents(user_id, request_options=request_options))

    @property
    def with_raw_response(self) -> ConsentsWithRawResponse:
        return self._with_raw_response


class AsyncConsents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConsentsWithRawResponse(client, server, auth)

    async def delete_consent(
        self, user_id: str, consent_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a users consent, this action cannot be undone.

        Args:
            user_id: User identification.
            consent_id: Consent identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. Returns error
                response code indicates that the server is not ready to handle the request. ``error`` is
                ``UsersConsents400Error1 | UsersConsents401Error1 | UsersConsents403Error1 | UsersConsents404Error1 |
                UsersConsents500Error1 | UsersConsents503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_consent(user_id, consent_id, request_options=request_options)
        )

    async def get_consents(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsersConsentsResponse:
        """Retrieves a list of the user consents

        Args:
            user_id: The identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a list of user consents if they exist.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error status response code indicates that the request has not been
                applied because it lacks valid authentication credentials for the target resource. Error that access is
                forbidden and tied to the application logic, such as insufficient rights to a resource. Returns error
                indicating that server can't find requested resource. Returns error response code indicates that the
                server encountered an unexpected condition that prevented it from fulfilling the request. ``error`` is
                ``UsersConsents400Error1 | UsersConsents401Error1 | UsersConsents403Error1 | UsersConsents404Error1 |
                UsersConsents500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_consents(user_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncConsentsWithRawResponse:
        return self._with_raw_response


class ConsentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_consent(
        self, user_id: str, consent_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteConsentErrorBody]:
        """Permanently deletes a users consent, this action cannot be undone.

        Args:
            user_id: User identification.
            consent_id: Consent identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}/consents/{consentId}"),
            path_params=[param[str]("userId", user_id), param[str]("consentId", consent_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=delete_consent_error_mapper,
            request_options=request_options,
        )

    def get_consents(
        self, user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsersConsentsResponse, GetConsentsErrorBody]:
        """Retrieves a list of the user consents

        Args:
            user_id: The identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/consents"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersConsentsResponse],
            error_mapper=get_consents_error_mapper,
            request_options=request_options,
        )


class AsyncConsentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_consent(
        self, user_id: str, consent_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteConsentErrorBody]:
        """Permanently deletes a users consent, this action cannot be undone.

        Args:
            user_id: User identification.
            consent_id: Consent identification.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/users/{userId}/consents/{consentId}"),
            path_params=[param[str]("userId", user_id), param[str]("consentId", consent_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=delete_consent_error_mapper,
            request_options=request_options,
        )

    async def get_consents(
        self, user_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersConsentsResponse, GetConsentsErrorBody]:
        """Retrieves a list of the user consents

        Args:
            user_id: The identifier of the user
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/consents"),
            path_params=[param[str]("userId", user_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersConsentsResponse],
            error_mapper=get_consents_error_mapper,
            request_options=request_options,
        )
