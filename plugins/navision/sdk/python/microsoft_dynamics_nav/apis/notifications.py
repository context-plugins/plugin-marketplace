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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_notification_recipient_error import (
    AddNotificationRecipientErrorBody,
    add_notification_recipient_error_mapper,
)
from ..errors.list_notification_recipients_error import (
    ListNotificationRecipientsErrorBody,
    list_notification_recipients_error_mapper,
)
from ..models.applications_environments_notifications_response import ApplicationsEnvironmentsNotificationsResponse
from ..models.notification_recipient import NotificationRecipient, NotificationRecipientDict
from ..server.server import Server


class Notifications:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NotificationsWithRawResponse(client, server, auth)

    def add_notification_recipient(
        self,
        environment_name: str,
        body: NotificationRecipient | NotificationRecipientDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> NotificationRecipient:
        """Adds a new notification recipient for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Notification recipient added

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterNotificationsApi | RawError``."""
        return unwrap(
            self._with_raw_response.add_notification_recipient(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    def list_notification_recipients(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationsEnvironmentsNotificationsResponse:
        """Returns a list of notification recipients for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved notification recipients

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterNotificationsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_notification_recipients(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> NotificationsWithRawResponse:
        return self._with_raw_response


class AsyncNotifications:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNotificationsWithRawResponse(client, server, auth)

    async def add_notification_recipient(
        self,
        environment_name: str,
        body: NotificationRecipient | NotificationRecipientDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NotificationRecipient:
        """Adds a new notification recipient for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Notification recipient added

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterNotificationsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.add_notification_recipient(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    async def list_notification_recipients(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationsEnvironmentsNotificationsResponse:
        """Returns a list of notification recipients for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved notification recipients

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterNotificationsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_notification_recipients(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNotificationsWithRawResponse:
        return self._with_raw_response


class NotificationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_notification_recipient(
        self,
        environment_name: str,
        body: NotificationRecipient | NotificationRecipientDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationRecipient, AddNotificationRecipientErrorBody]:
        """Adds a new notification recipient for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/notifications"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationRecipient | NotificationRecipientDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[NotificationRecipient],
            error_mapper=add_notification_recipient_error_mapper,
            request_options=request_options,
        )

    def list_notification_recipients(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationsEnvironmentsNotificationsResponse, ListNotificationRecipientsErrorBody]:
        """Returns a list of notification recipients for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/notifications"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsEnvironmentsNotificationsResponse],
            error_mapper=list_notification_recipients_error_mapper,
            request_options=request_options,
        )


class AsyncNotificationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_notification_recipient(
        self,
        environment_name: str,
        body: NotificationRecipient | NotificationRecipientDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationRecipient, AddNotificationRecipientErrorBody]:
        """Adds a new notification recipient for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/notifications"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationRecipient | NotificationRecipientDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[NotificationRecipient],
            error_mapper=add_notification_recipient_error_mapper,
            request_options=request_options,
        )

    async def list_notification_recipients(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationsEnvironmentsNotificationsResponse, ListNotificationRecipientsErrorBody]:
        """Returns a list of notification recipients for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/notifications"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsEnvironmentsNotificationsResponse],
            error_mapper=list_notification_recipients_error_mapper,
            request_options=request_options,
        )
