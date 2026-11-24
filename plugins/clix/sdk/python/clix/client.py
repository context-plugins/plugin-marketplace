from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseClixClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AllSchemes,
    ApiKeyHeaderScheme,
    ApiResult,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    SecuredRawResponse,
    json_body,
    json_decoder,
    no_auth,
    param,
    raw_error_response,
    unwrap,
)
from .errors.clix_external_service_create_user_error import (
    ClixExternalServiceCreateUserErrorBody,
    clix_external_service_create_user_error_mapper,
)
from .errors.clix_external_service_delete_user_error import (
    ClixExternalServiceDeleteUserErrorBody,
    clix_external_service_delete_user_error_mapper,
)
from .errors.clix_external_service_send_push_notifications_error import (
    ClixExternalServiceSendPushNotificationsErrorBody,
    clix_external_service_send_push_notifications_error_mapper,
)
from .errors.clix_external_service_start_live_activities_error import (
    ClixExternalServiceStartLiveActivitiesErrorBody,
    clix_external_service_start_live_activities_error_mapper,
)
from .errors.clix_external_service_trigger_campaign_error import (
    ClixExternalServiceTriggerCampaignErrorBody,
    clix_external_service_trigger_campaign_error_mapper,
)
from .errors.clix_external_service_update_user_error import (
    ClixExternalServiceUpdateUserErrorBody,
    clix_external_service_update_user_error_mapper,
)
from .models.clix_external_service_create_or_update_users_properties_by_device_id_body import (
    ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody,
    ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict,
)
from .models.clix_external_service_set_project_user_id_for_device_body import (
    ClixExternalServiceSetProjectUserIdForDeviceBody,
    ClixExternalServiceSetProjectUserIdForDeviceBodyDict,
)
from .models.clixexternalv1_health_check_response import Clixexternalv1HealthCheckResponse
from .models.v1_create_events_request import V1CreateEventsRequest, V1CreateEventsRequestDict
from .models.v1_create_events_response import V1CreateEventsResponse
from .models.v1_create_or_update_devices_request import (
    V1CreateOrUpdateDevicesRequest,
    V1CreateOrUpdateDevicesRequestDict,
)
from .models.v1_create_or_update_devices_response import V1CreateOrUpdateDevicesResponse
from .models.v1_create_or_update_users_properties_by_device_id_response import (
    V1CreateOrUpdateUsersPropertiesByDeviceIdResponse,
)
from .models.v1_create_user_request import V1CreateUserRequest, V1CreateUserRequestDict
from .models.v1_create_user_response import V1CreateUserResponse
from .models.v1_send_push_notifications_request import (
    V1SendPushNotificationsRequest,
    V1SendPushNotificationsRequestDict,
)
from .models.v1_send_push_notifications_response import V1SendPushNotificationsResponse
from .models.v1_set_project_user_id_for_device_response import V1SetProjectUserIdForDeviceResponse
from .models.v1_start_live_activities_request import V1StartLiveActivitiesRequest, V1StartLiveActivitiesRequestDict
from .models.v1_start_live_activities_response import V1StartLiveActivitiesResponse
from .models.v1_trigger_campaign_request import V1TriggerCampaignRequest, V1TriggerCampaignRequestDict
from .models.v1_trigger_campaign_response import V1TriggerCampaignResponse
from .models.v1_update_user_request import V1UpdateUserRequest, V1UpdateUserRequestDict
from .models.v1_update_user_response import V1UpdateUserResponse
from .server.server import Server


class ClixClient(BaseClixClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        project_id_auth: str | None = None,
        api_key_auth: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "ClixClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            project_id_auth=(
                ApiKeyHeaderScheme("X-Clix-Project-ID", project_id_auth) if project_id_auth is not None else no_auth
            ),
            api_key_auth=ApiKeyHeaderScheme("X-Clix-API-Key", api_key_auth) if api_key_auth is not None else no_auth,
        )

    @cached_property
    def with_raw_response(self) -> ApiWithRawResponse:
        return ApiWithRawResponse(self._raw_client, self._server, self._auth)

    def clix_external_service_create_events(
        self,
        body: V1CreateEventsRequest | V1CreateEventsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CreateEventsResponse:
        """Send a ``POST`` request.

        Args:
            body: Request body containing the event details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self.with_raw_response.clix_external_service_create_events(body, request_options=request_options))

    def clix_external_service_create_or_update_devices(
        self,
        body: V1CreateOrUpdateDevicesRequest | V1CreateOrUpdateDevicesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CreateOrUpdateDevicesResponse:
        """Send a ``POST`` request.

        Args:
            body: Request body containing device information.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_create_or_update_devices(body, request_options=request_options)
        )

    def clix_external_service_create_or_update_users_properties_by_device_id(
        self,
        device_id: str,
        body: (
            ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody
            | ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CreateOrUpdateUsersPropertiesByDeviceIdResponse:
        """Send a ``POST`` request.

        Args:
            device_id: Value sent with the request.
            body: Request body containing user properties to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_create_or_update_users_properties_by_device_id(
                device_id, body, request_options=request_options
            ),
        )

    def clix_external_service_create_user(
        self,
        body: V1CreateUserRequest | V1CreateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1CreateUserResponse:
        """Creates a new user with the specified project_user_id

        Args:
            body: User data to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User created successfully

        Raises:
            ApiError: Bad request - invalid or missing parameters ``error`` is ``str | RawError``."""
        return unwrap(self.with_raw_response.clix_external_service_create_user(body, request_options=request_options))

    def clix_external_service_delete_user(
        self, project_user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Permanently deletes a user and all associated data

        Args:
            project_user_id: The unique identifier of the user to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User deleted successfully

        Raises:
            ApiError: Bad request - invalid or missing parameters ``error`` is ``str | RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_delete_user(project_user_id, request_options=request_options)
        )

    def clix_external_service_health_check(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> Clixexternalv1HealthCheckResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self.with_raw_response.clix_external_service_health_check(request_options=request_options))

    def clix_external_service_send_push_notifications(
        self,
        body: V1SendPushNotificationsRequest | V1SendPushNotificationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SendPushNotificationsResponse:
        """This endpoint sends push notifications to one or more user devices.

        Args:
            body: Request body containing the push notifications to send.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response containing the delivery results for each push notification.

        Raises:
            ApiError: Bad request - invalid parameters ``error`` is ``str | RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_send_push_notifications(body, request_options=request_options)
        )

    def clix_external_service_set_project_user_id_for_device(
        self,
        device_id: str,
        body: ClixExternalServiceSetProjectUserIdForDeviceBody | ClixExternalServiceSetProjectUserIdForDeviceBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1SetProjectUserIdForDeviceResponse:
        """Send a ``POST`` request.

        Args:
            device_id: Value sent with the request.
            body: Request body containing the project user ID to set for the device.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_set_project_user_id_for_device(
                device_id, body, request_options=request_options
            ),
        )

    def clix_external_service_start_live_activities(
        self,
        body: V1StartLiveActivitiesRequest | V1StartLiveActivitiesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1StartLiveActivitiesResponse:
        """This endpoint starts iOS Live Activities on one or more user devices using Push to Start.

        Args:
            body: Request body containing the live activities to start.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A successful response containing the delivery results for each live activity.

        Raises:
            ApiError: Bad request - invalid parameters ``error`` is ``str | RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_start_live_activities(body, request_options=request_options)
        )

    def clix_external_service_trigger_campaign(
        self,
        campaign_id: str,
        *,
        body: V1TriggerCampaignRequest | V1TriggerCampaignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1TriggerCampaignResponse:
        """Triggers an API-triggered campaign to send messages to a specific audience

        Args:
            campaign_id: The unique identifier of the campaign to trigger
            body: Campaign trigger configuration
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign triggered successfully

        Raises:
            ApiError: Bad request - invalid parameters or campaign not found ``error`` is ``str | RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_trigger_campaign(
                campaign_id, body=body, request_options=request_options
            ),
        )

    def clix_external_service_update_user(
        self,
        project_user_id: str,
        body: V1UpdateUserRequest | V1UpdateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1UpdateUserResponse:
        """Updates user properties

        Args:
            project_user_id: The unique identifier of the user to update
            body: User data to update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User updated successfully

        Raises:
            ApiError: Bad request - invalid or missing parameters User not found ``error`` is ``str | RawError``."""
        return unwrap(
            self.with_raw_response.clix_external_service_update_user(
                project_user_id, body, request_options=request_options
            ),
        )

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


class ApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def clix_external_service_create_events(
        self,
        body: V1CreateEventsRequest | V1CreateEventsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CreateEventsResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Request body containing the event details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/events"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CreateEventsRequest | V1CreateEventsRequestDict](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1CreateEventsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def clix_external_service_create_or_update_devices(
        self,
        body: V1CreateOrUpdateDevicesRequest | V1CreateOrUpdateDevicesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CreateOrUpdateDevicesResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            body: Request body containing device information.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/devices"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CreateOrUpdateDevicesRequest | V1CreateOrUpdateDevicesRequestDict](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1CreateOrUpdateDevicesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def clix_external_service_create_or_update_users_properties_by_device_id(
        self,
        device_id: str,
        body: (
            ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody
            | ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            device_id: Value sent with the request.
            body: Request body containing user properties to create or update.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/devices/{deviceId}/user/properties"),
            path_params=[param[str]("deviceId", device_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBody
                    | ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdBodyDict
                )
            ](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1CreateOrUpdateUsersPropertiesByDeviceIdResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def clix_external_service_create_user(
        self,
        body: V1CreateUserRequest | V1CreateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1CreateUserResponse, ClixExternalServiceCreateUserErrorBody]:
        """Creates a new user with the specified project_user_id

        Args:
            body: User data to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/users"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1CreateUserRequest | V1CreateUserRequestDict](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1CreateUserResponse],
            error_mapper=clix_external_service_create_user_error_mapper,
            request_options=request_options,
        )

    def clix_external_service_delete_user(
        self, project_user_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ClixExternalServiceDeleteUserErrorBody]:
        """Permanently deletes a user and all associated data

        Args:
            project_user_id: The unique identifier of the user to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/users/{project_user_id}"),
            path_params=[param[str]("project_user_id", project_user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[Any],
            error_mapper=clix_external_service_delete_user_error_mapper,
            request_options=request_options,
        )

    def clix_external_service_health_check(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Clixexternalv1HealthCheckResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/health"),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[Clixexternalv1HealthCheckResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def clix_external_service_send_push_notifications(
        self,
        body: V1SendPushNotificationsRequest | V1SendPushNotificationsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SendPushNotificationsResponse, ClixExternalServiceSendPushNotificationsErrorBody]:
        """This endpoint sends push notifications to one or more user devices.

        Args:
            body: Request body containing the push notifications to send.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/messages:send"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1SendPushNotificationsRequest | V1SendPushNotificationsRequestDict](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1SendPushNotificationsResponse],
            error_mapper=clix_external_service_send_push_notifications_error_mapper,
            request_options=request_options,
        )

    def clix_external_service_set_project_user_id_for_device(
        self,
        device_id: str,
        body: ClixExternalServiceSetProjectUserIdForDeviceBody | ClixExternalServiceSetProjectUserIdForDeviceBodyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1SetProjectUserIdForDeviceResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            device_id: Value sent with the request.
            body: Request body containing the project user ID to set for the device.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/devices/{deviceId}/user/project-user-id"),
            path_params=[param[str]("deviceId", device_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ClixExternalServiceSetProjectUserIdForDeviceBody | ClixExternalServiceSetProjectUserIdForDeviceBodyDict
            ](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1SetProjectUserIdForDeviceResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def clix_external_service_start_live_activities(
        self,
        body: V1StartLiveActivitiesRequest | V1StartLiveActivitiesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1StartLiveActivitiesResponse, ClixExternalServiceStartLiveActivitiesErrorBody]:
        """This endpoint starts iOS Live Activities on one or more user devices using Push to Start.

        Args:
            body: Request body containing the live activities to start.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/live-activities:start"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1StartLiveActivitiesRequest | V1StartLiveActivitiesRequestDict](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1StartLiveActivitiesResponse],
            error_mapper=clix_external_service_start_live_activities_error_mapper,
            request_options=request_options,
        )

    def clix_external_service_trigger_campaign(
        self,
        campaign_id: str,
        *,
        body: V1TriggerCampaignRequest | V1TriggerCampaignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1TriggerCampaignResponse, ClixExternalServiceTriggerCampaignErrorBody]:
        """Triggers an API-triggered campaign to send messages to a specific audience

        Args:
            campaign_id: The unique identifier of the campaign to trigger
            body: Campaign trigger configuration
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/campaigns/{campaign_id}:trigger"),
            path_params=[param[str]("campaign_id", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1TriggerCampaignRequest | V1TriggerCampaignRequestDict | None](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1TriggerCampaignResponse],
            error_mapper=clix_external_service_trigger_campaign_error_mapper,
            request_options=request_options,
        )

    def clix_external_service_update_user(
        self,
        project_user_id: str,
        body: V1UpdateUserRequest | V1UpdateUserRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1UpdateUserResponse, ClixExternalServiceUpdateUserErrorBody]:
        """Updates user properties

        Args:
            project_user_id: The unique identifier of the user to update
            body: User data to update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/users/{project_user_id}"),
            path_params=[param[str]("project_user_id", project_user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1UpdateUserRequest | V1UpdateUserRequestDict](body),
            auth_scheme=AllSchemes(self._auth.project_id_auth, self._auth.api_key_auth),
            decoder=json_decoder[V1UpdateUserResponse],
            error_mapper=clix_external_service_update_user_error_mapper,
            request_options=request_options,
        )


Client = ClixClient
