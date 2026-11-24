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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.contacts_activities_destroy_error import (
    ContactsActivitiesDestroyErrorBody,
    contacts_activities_destroy_error_mapper,
)
from ..errors.contacts_activities_index_error import (
    ContactsActivitiesIndexErrorBody,
    contacts_activities_index_error_mapper,
)
from ..errors.contacts_activities_show_error import (
    ContactsActivitiesShowErrorBody,
    contacts_activities_show_error_mapper,
)
from ..errors.contacts_activities_store_error import (
    ContactsActivitiesStoreErrorBody,
    contacts_activities_store_error_mapper,
)
from ..errors.contacts_activities_update_error import (
    ContactsActivitiesUpdateErrorBody,
    contacts_activities_update_error_mapper,
)
from ..models.contact_activity_resource import ContactActivityResource
from ..models.enums.contact_activity_type_enum import ContactActivityTypeEnumOrStr
from ..models.store_contact_activity_request import StoreContactActivityRequest, StoreContactActivityRequestDict
from ..models.v1_contacts_activities_response import V1ContactsActivitiesResponse
from ..server.server import Server


class ContactActivities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactActivitiesWithRawResponse(client, server, auth)

    def contacts_activities_destroy(
        self, contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.contacts_activities_destroy(contact, activity, request_options=request_options)
        )

    def contacts_activities_index(
        self,
        contact: int,
        *,
        type_: ContactActivityTypeEnumOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ContactsActivitiesResponse:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            type_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``ContactActivityResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.contacts_activities_index(contact, type_=type_, request_options=request_options)
        )

    def contacts_activities_show(
        self, contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContactActivityResource:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactActivityResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.contacts_activities_show(contact, activity, request_options=request_options)
        )

    def contacts_activities_store(
        self,
        contact: int,
        body: StoreContactActivityRequest | StoreContactActivityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactActivityResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactActivityResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.contacts_activities_store(contact, body, request_options=request_options))

    def contacts_activities_update(
        self, contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ContactActivityResource:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactActivityResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.contacts_activities_update(contact, activity, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ContactActivitiesWithRawResponse:
        return self._with_raw_response


class AsyncContactActivities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactActivitiesWithRawResponse(client, server, auth)

    async def contacts_activities_destroy(
        self, contact: int, activity: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_activities_destroy(
                contact, activity, request_options=request_options
            ),
        )

    async def contacts_activities_index(
        self,
        contact: int,
        *,
        type_: ContactActivityTypeEnumOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ContactsActivitiesResponse:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            type_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``ContactActivityResource``

        Raises:
            ApiError: Validation error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_activities_index(
                contact, type_=type_, request_options=request_options
            ),
        )

    async def contacts_activities_show(
        self, contact: int, activity: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactActivityResource:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactActivityResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_activities_show(contact, activity, request_options=request_options)
        )

    async def contacts_activities_store(
        self,
        contact: int,
        body: StoreContactActivityRequest | StoreContactActivityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactActivityResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactActivityResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_activities_store(contact, body, request_options=request_options)
        )

    async def contacts_activities_update(
        self, contact: int, activity: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactActivityResource:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactActivityResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_activities_update(contact, activity, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncContactActivitiesWithRawResponse:
        return self._with_raw_response


class ContactActivitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def contacts_activities_destroy(
        self, contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ContactsActivitiesDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/contacts/{contact}/activities/{activity}"),
            path_params=[param[int]("contact", contact), param[int]("activity", activity)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=contacts_activities_destroy_error_mapper,
            request_options=request_options,
        )

    def contacts_activities_index(
        self,
        contact: int,
        *,
        type_: ContactActivityTypeEnumOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContactsActivitiesResponse, ContactsActivitiesIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            type_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts/{contact}/activities"),
            path_params=[param[int]("contact", contact)],
            query_params=[param[ContactActivityTypeEnumOrStr | None]("type", type_)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1ContactsActivitiesResponse],
            error_mapper=contacts_activities_index_error_mapper,
            request_options=request_options,
        )

    def contacts_activities_show(
        self, contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactActivityResource, ContactsActivitiesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts/{contact}/activities/{activity}"),
            path_params=[param[int]("contact", contact), param[int]("activity", activity)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactActivityResource],
            error_mapper=contacts_activities_show_error_mapper,
            request_options=request_options,
        )

    def contacts_activities_store(
        self,
        contact: int,
        body: StoreContactActivityRequest | StoreContactActivityRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactActivityResource, ContactsActivitiesStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contacts/{contact}/activities"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreContactActivityRequest | StoreContactActivityRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactActivityResource],
            error_mapper=contacts_activities_store_error_mapper,
            request_options=request_options,
        )

    def contacts_activities_update(
        self, contact: int, activity: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactActivityResource, ContactsActivitiesUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/contacts/{contact}/activities/{activity}"),
            path_params=[param[int]("contact", contact), param[int]("activity", activity)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactActivityResource],
            error_mapper=contacts_activities_update_error_mapper,
            request_options=request_options,
        )


class AsyncContactActivitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def contacts_activities_destroy(
        self, contact: int, activity: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ContactsActivitiesDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/contacts/{contact}/activities/{activity}"),
            path_params=[param[int]("contact", contact), param[int]("activity", activity)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=contacts_activities_destroy_error_mapper,
            request_options=request_options,
        )

    async def contacts_activities_index(
        self,
        contact: int,
        *,
        type_: ContactActivityTypeEnumOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContactsActivitiesResponse, ContactsActivitiesIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            type_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts/{contact}/activities"),
            path_params=[param[int]("contact", contact)],
            query_params=[param[ContactActivityTypeEnumOrStr | None]("type", type_)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1ContactsActivitiesResponse],
            error_mapper=contacts_activities_index_error_mapper,
            request_options=request_options,
        )

    async def contacts_activities_show(
        self, contact: int, activity: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactActivityResource, ContactsActivitiesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts/{contact}/activities/{activity}"),
            path_params=[param[int]("contact", contact), param[int]("activity", activity)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactActivityResource],
            error_mapper=contacts_activities_show_error_mapper,
            request_options=request_options,
        )

    async def contacts_activities_store(
        self,
        contact: int,
        body: StoreContactActivityRequest | StoreContactActivityRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactActivityResource, ContactsActivitiesStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contacts/{contact}/activities"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreContactActivityRequest | StoreContactActivityRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactActivityResource],
            error_mapper=contacts_activities_store_error_mapper,
            request_options=request_options,
        )

    async def contacts_activities_update(
        self, contact: int, activity: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactActivityResource, ContactsActivitiesUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/contacts/{contact}/activities/{activity}"),
            path_params=[param[int]("contact", contact), param[int]("activity", activity)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactActivityResource],
            error_mapper=contacts_activities_update_error_mapper,
            request_options=request_options,
        )
