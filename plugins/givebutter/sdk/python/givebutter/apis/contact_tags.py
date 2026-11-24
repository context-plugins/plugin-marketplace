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
from ..errors.contact_tag_destroy_error import ContactTagDestroyErrorBody, contact_tag_destroy_error_mapper
from ..errors.contact_tag_store_error import ContactTagStoreErrorBody, contact_tag_store_error_mapper
from ..errors.contact_tag_sync_error import ContactTagSyncErrorBody, contact_tag_sync_error_mapper
from ..models.contact_resource import ContactResource
from ..models.v1_contacts_tags_add_request import V1ContactsTagsAddRequest, V1ContactsTagsAddRequestDict
from ..models.v1_contacts_tags_remove_request import V1ContactsTagsRemoveRequest, V1ContactsTagsRemoveRequestDict
from ..models.v1_contacts_tags_sync_request import V1ContactsTagsSyncRequest, V1ContactsTagsSyncRequestDict
from ..server.server import Server


class ContactTags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactTagsWithRawResponse(client, server, auth)

    def contact_tag_destroy(
        self,
        contact: int,
        body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error Not found Authorization error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.contact_tag_destroy(contact, body, request_options=request_options))

    def contact_tag_store(
        self,
        contact: int,
        body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error Not found Authorization error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.contact_tag_store(contact, body, request_options=request_options))

    def contact_tag_sync(
        self,
        contact: int,
        body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error Not found Authorization error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.contact_tag_sync(contact, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ContactTagsWithRawResponse:
        return self._with_raw_response


class AsyncContactTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactTagsWithRawResponse(client, server, auth)

    async def contact_tag_destroy(
        self,
        contact: int,
        body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error Not found Authorization error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.contact_tag_destroy(contact, body, request_options=request_options))

    async def contact_tag_store(
        self,
        contact: int,
        body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error Not found Authorization error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.contact_tag_store(contact, body, request_options=request_options))

    async def contact_tag_sync(
        self,
        contact: int,
        body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error Not found Authorization error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.contact_tag_sync(contact, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncContactTagsWithRawResponse:
        return self._with_raw_response


class ContactTagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def contact_tag_destroy(
        self,
        contact: int,
        body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactTagDestroyErrorBody]:
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
            url_template=self._server.default("/v1/contacts/{contact}/tags/remove"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contact_tag_destroy_error_mapper,
            request_options=request_options,
        )

    def contact_tag_store(
        self,
        contact: int,
        body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactTagStoreErrorBody]:
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
            url_template=self._server.default("/v1/contacts/{contact}/tags/add"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contact_tag_store_error_mapper,
            request_options=request_options,
        )

    def contact_tag_sync(
        self,
        contact: int,
        body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactTagSyncErrorBody]:
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
            url_template=self._server.default("/v1/contacts/{contact}/tags/sync"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contact_tag_sync_error_mapper,
            request_options=request_options,
        )


class AsyncContactTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def contact_tag_destroy(
        self,
        contact: int,
        body: V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactTagDestroyErrorBody]:
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
            url_template=self._server.default("/v1/contacts/{contact}/tags/remove"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsTagsRemoveRequest | V1ContactsTagsRemoveRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contact_tag_destroy_error_mapper,
            request_options=request_options,
        )

    async def contact_tag_store(
        self,
        contact: int,
        body: V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactTagStoreErrorBody]:
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
            url_template=self._server.default("/v1/contacts/{contact}/tags/add"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsTagsAddRequest | V1ContactsTagsAddRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contact_tag_store_error_mapper,
            request_options=request_options,
        )

    async def contact_tag_sync(
        self,
        contact: int,
        body: V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactTagSyncErrorBody]:
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
            url_template=self._server.default("/v1/contacts/{contact}/tags/sync"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsTagsSyncRequest | V1ContactsTagsSyncRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contact_tag_sync_error_mapper,
            request_options=request_options,
        )
