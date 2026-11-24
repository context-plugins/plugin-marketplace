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
from ..errors.delete_api_v1_notification_rules_notification_rule_id_error import (
    DeleteApiV1NotificationRulesNotificationRuleIdErrorBody,
    delete_api_v1_notification_rules_notification_rule_id_error_mapper,
)
from ..errors.get_api_v1_notification_rules_error import (
    GetApiV1NotificationRulesErrorBody,
    get_api_v1_notification_rules_error_mapper,
)
from ..errors.post_api_v1_notification_rules_error import (
    PostApiV1NotificationRulesErrorBody,
    post_api_v1_notification_rules_error_mapper,
)
from ..errors.post_api_v1_notification_rules_notification_rule_id_error import (
    PostApiV1NotificationRulesNotificationRuleIdErrorBody,
    post_api_v1_notification_rules_notification_rule_id_error_mapper,
)
from ..models.public_api_delete_notification_rule_response import PublicApiDeleteNotificationRuleResponse
from ..models.public_api_list_notification_rules_response import PublicApiListNotificationRulesResponse
from ..models.public_api_notification_rule_dto import PublicApiNotificationRuleDto
from ..models.public_api_notification_rule_request_dto import (
    PublicApiNotificationRuleRequestDto,
    PublicApiNotificationRuleRequestDtoDict,
)
from ..server.server import Server


class NotificationRules:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NotificationRulesWithRawResponse(client, server, auth)

    def delete_api_v1_notification_rules_notification_rule_id(
        self, notification_rule_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteNotificationRuleResponse:
        """Schedules a notification rule for deletion. Deletion is processed asynchronously.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_notification_rules_notification_rule_id(
                notification_rule_id, request_options=request_options
            ),
        )

    def get_api_v1_notification_rules(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiListNotificationRulesResponse:
        """This endpoint allows you to list the notification rules in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_notification_rules(page=page, size=size, request_options=request_options)
        )

    def post_api_v1_notification_rules(
        self,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiNotificationRuleDto:
        """Creates a notification rule with the provided filter and recipients.

        The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and monitor attributes;
        recipients can be users, user groups, emails, integrations, or roles.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_notification_rules(body, request_options=request_options))

    def post_api_v1_notification_rules_notification_rule_id(
        self,
        notification_rule_id: str,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiNotificationRuleDto:
        """Updates a notification rule. This is a full replacement: the rule's name, type, filter, recipients, status,
        and customization are all set from the request body.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_notification_rules_notification_rule_id(
                notification_rule_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> NotificationRulesWithRawResponse:
        return self._with_raw_response


class AsyncNotificationRules:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNotificationRulesWithRawResponse(client, server, auth)

    async def delete_api_v1_notification_rules_notification_rule_id(
        self, notification_rule_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteNotificationRuleResponse:
        """Schedules a notification rule for deletion. Deletion is processed asynchronously.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_notification_rules_notification_rule_id(
                notification_rule_id, request_options=request_options
            ),
        )

    async def get_api_v1_notification_rules(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListNotificationRulesResponse:
        """This endpoint allows you to list the notification rules in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_notification_rules(
                page=page, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_notification_rules(
        self,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiNotificationRuleDto:
        """Creates a notification rule with the provided filter and recipients.

        The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and monitor attributes;
        recipients can be users, user groups, emails, integrations, or roles.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_notification_rules(body, request_options=request_options)
        )

    async def post_api_v1_notification_rules_notification_rule_id(
        self,
        notification_rule_id: str,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiNotificationRuleDto:
        """Updates a notification rule. This is a full replacement: the rule's name, type, filter, recipients, status,
        and customization are all set from the request body.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_notification_rules_notification_rule_id(
                notification_rule_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNotificationRulesWithRawResponse:
        return self._with_raw_response


class NotificationRulesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_notification_rules_notification_rule_id(
        self, notification_rule_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteNotificationRuleResponse, DeleteApiV1NotificationRulesNotificationRuleIdErrorBody]:
        """Schedules a notification rule for deletion. Deletion is processed asynchronously.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/notificationRules/{notificationRuleId}"),
            path_params=[param[str]("notificationRuleId", notification_rule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteNotificationRuleResponse],
            error_mapper=delete_api_v1_notification_rules_notification_rule_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_notification_rules(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiListNotificationRulesResponse, GetApiV1NotificationRulesErrorBody]:
        """This endpoint allows you to list the notification rules in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/notificationRules"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListNotificationRulesResponse],
            error_mapper=get_api_v1_notification_rules_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_notification_rules(
        self,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesErrorBody]:
        """Creates a notification rule with the provided filter and recipients.

        The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and monitor attributes;
        recipients can be users, user groups, emails, integrations, or roles.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/notificationRules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiNotificationRuleDto],
            error_mapper=post_api_v1_notification_rules_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_notification_rules_notification_rule_id(
        self,
        notification_rule_id: str,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesNotificationRuleIdErrorBody]:
        """Updates a notification rule. This is a full replacement: the rule's name, type, filter, recipients, status,
        and customization are all set from the request body.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/notificationRules/{notificationRuleId}"),
            path_params=[param[str]("notificationRuleId", notification_rule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiNotificationRuleDto],
            error_mapper=post_api_v1_notification_rules_notification_rule_id_error_mapper,
            request_options=request_options,
        )


class AsyncNotificationRulesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_notification_rules_notification_rule_id(
        self, notification_rule_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteNotificationRuleResponse, DeleteApiV1NotificationRulesNotificationRuleIdErrorBody]:
        """Schedules a notification rule for deletion. Deletion is processed asynchronously.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/notificationRules/{notificationRuleId}"),
            path_params=[param[str]("notificationRuleId", notification_rule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteNotificationRuleResponse],
            error_mapper=delete_api_v1_notification_rules_notification_rule_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_notification_rules(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListNotificationRulesResponse, GetApiV1NotificationRulesErrorBody]:
        """This endpoint allows you to list the notification rules in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/notificationRules"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListNotificationRulesResponse],
            error_mapper=get_api_v1_notification_rules_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_notification_rules(
        self,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesErrorBody]:
        """Creates a notification rule with the provided filter and recipients.

        The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and monitor attributes;
        recipients can be users, user groups, emails, integrations, or roles.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/notificationRules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiNotificationRuleDto],
            error_mapper=post_api_v1_notification_rules_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_notification_rules_notification_rule_id(
        self,
        notification_rule_id: str,
        body: PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiNotificationRuleDto, PostApiV1NotificationRulesNotificationRuleIdErrorBody]:
        """Updates a notification rule. This is a full replacement: the rule's name, type, filter, recipients, status,
        and customization are all set from the request body.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.

        ## Tags

        ``Notification Rules``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            notification_rule_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/notificationRules/{notificationRuleId}"),
            path_params=[param[str]("notificationRuleId", notification_rule_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiNotificationRuleRequestDto | PublicApiNotificationRuleRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiNotificationRuleDto],
            error_mapper=post_api_v1_notification_rules_notification_rule_id_error_mapper,
            request_options=request_options,
        )
