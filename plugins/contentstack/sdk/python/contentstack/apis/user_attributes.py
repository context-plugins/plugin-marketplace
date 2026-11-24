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
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.merge_user_attributes_error import MergeUserAttributesErrorBody, merge_user_attributes_error_mapper
from ..errors.set_user_attributes_error import SetUserAttributesErrorBody, set_user_attributes_error_mapper
from ..models.merge_user_attributes_request import MergeUserAttributesRequest, MergeUserAttributesRequestDict
from ..server.server import Server


class UserAttributes:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = UserAttributesWithRawResponse(client, server)

    def merge_user_attributes(
        self,
        x_project_uid: str,
        body: MergeUserAttributesRequest | MergeUserAttributesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Merges the attributes of a source user identity into a target user identity. This is used in identity
        resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon
        login, preserving all accumulated behavioral and attribute data.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User attributes merged successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.merge_user_attributes(x_project_uid, body, request_options=request_options)
        )

    def set_user_attributes(
        self,
        x_project_uid: str,
        body: dict[str, Any],
        *,
        x_cs_personalize_user_uid: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes
        set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use
        this endpoint to update attributes based on user actions or profile data from external systems.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User attributes added or updated successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            self._with_raw_response.set_user_attributes(
                x_project_uid,
                body,
                x_cs_personalize_user_uid=x_cs_personalize_user_uid,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> UserAttributesWithRawResponse:
        return self._with_raw_response


class AsyncUserAttributes:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncUserAttributesWithRawResponse(client, server)

    async def merge_user_attributes(
        self,
        x_project_uid: str,
        body: MergeUserAttributesRequest | MergeUserAttributesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Merges the attributes of a source user identity into a target user identity. This is used in identity
        resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon
        login, preserving all accumulated behavioral and attribute data.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User attributes merged successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.merge_user_attributes(x_project_uid, body, request_options=request_options)
        )

    async def set_user_attributes(
        self,
        x_project_uid: str,
        body: dict[str, Any],
        *,
        x_cs_personalize_user_uid: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes
        set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use
        this endpoint to update attributes based on user actions or profile data from external systems.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User attributes added or updated successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. The request is not authorized for this
                project. ``error`` is ``ErrorContentstackPersonalizeManagementAttributesApi | RawError``."""
        return unwrap(
            await self._with_raw_response.set_user_attributes(
                x_project_uid,
                body,
                x_cs_personalize_user_uid=x_cs_personalize_user_uid,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUserAttributesWithRawResponse:
        return self._with_raw_response


class UserAttributesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def merge_user_attributes(
        self,
        x_project_uid: str,
        body: MergeUserAttributesRequest | MergeUserAttributesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, MergeUserAttributesErrorBody]:
        """Merges the attributes of a source user identity into a target user identity. This is used in identity
        resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon
        login, preserving all accumulated behavioral and attribute data.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_events_api("/user-attributes/actions/merge"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MergeUserAttributesRequest | MergeUserAttributesRequestDict](body),
            decoder=empty_response,
            error_mapper=merge_user_attributes_error_mapper,
            request_options=request_options,
        )

    def set_user_attributes(
        self,
        x_project_uid: str,
        body: dict[str, Any],
        *,
        x_cs_personalize_user_uid: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetUserAttributesErrorBody]:
        """Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes
        set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use
        this endpoint to update attributes based on user actions or profile data from external systems.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_contentstack_events_api("/user-attributes"),
            headers=[
                param[str]("x-project-uid", x_project_uid),
                param[str | None]("x-cs-personalize-user-uid", x_cs_personalize_user_uid),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[dict[str, Any]](body),
            decoder=empty_response,
            error_mapper=set_user_attributes_error_mapper,
            request_options=request_options,
        )


class AsyncUserAttributesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def merge_user_attributes(
        self,
        x_project_uid: str,
        body: MergeUserAttributesRequest | MergeUserAttributesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, MergeUserAttributesErrorBody]:
        """Merges the attributes of a source user identity into a target user identity. This is used in identity
        resolution scenarios where an anonymous user record needs to be combined with an authenticated user record upon
        login, preserving all accumulated behavioral and attribute data.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_events_api("/user-attributes/actions/merge"),
            headers=[param[str]("x-project-uid", x_project_uid), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MergeUserAttributesRequest | MergeUserAttributesRequestDict](body),
            decoder=async_empty_response,
            error_mapper=merge_user_attributes_error_mapper,
            request_options=request_options,
        )

    async def set_user_attributes(
        self,
        x_project_uid: str,
        body: dict[str, Any],
        *,
        x_cs_personalize_user_uid: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetUserAttributesErrorBody]:
        """Persists custom user attribute values at the Personalize Edge for use in audience rule evaluation. Attributes
        set via this endpoint are stored against the user's identifier and used in all subsequent manifest requests. Use
        this endpoint to update attributes based on user actions or profile data from external systems.

        Args:
            x_project_uid: The UID of the Contentstack Personalize project.
            body: The request body.
            x_cs_personalize_user_uid: The unique identifier for the end user. If not provided, a new anonymous user
                will be created and the UID returned in the response headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_contentstack_events_api("/user-attributes"),
            headers=[
                param[str]("x-project-uid", x_project_uid),
                param[str | None]("x-cs-personalize-user-uid", x_cs_personalize_user_uid),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[dict[str, Any]](body),
            decoder=async_empty_response,
            error_mapper=set_user_attributes_error_mapper,
            request_options=request_options,
        )
