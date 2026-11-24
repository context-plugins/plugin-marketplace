from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.contact_restore_error import ContactRestoreErrorBody, contact_restore_error_mapper
from ..errors.contacts_destroy_error import ContactsDestroyErrorBody, contacts_destroy_error_mapper
from ..errors.contacts_index_error import ContactsIndexErrorBody, contacts_index_error_mapper
from ..errors.contacts_show_error import ContactsShowErrorBody, contacts_show_error_mapper
from ..errors.contacts_store_error import ContactsStoreErrorBody, contacts_store_error_mapper
from ..errors.contacts_update_error import ContactsUpdateErrorBody, contacts_update_error_mapper
from ..models.contact_resource import ContactResource
from ..models.enums.contact_type import ContactTypeOrStr
from ..models.enums.sort_by import SortByOrStr
from ..models.enums.sort_by_desc import SortByDescOrStr
from ..models.update_contact_request import UpdateContactRequest, UpdateContactRequestDict
from ..models.v1_contacts_request import V1ContactsRequest, V1ContactsRequestDict
from ..models.v1_contacts_response import V1ContactsResponse
from ..server.server import Server


class Contacts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactsWithRawResponse(client, server, auth)

    def contact_restore(self, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource:
        """Send a ``PATCH`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.contact_restore(contact, request_options=request_options))

    def contacts_destroy(self, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.contacts_destroy(contact, request_options=request_options))

    def contacts_index(
        self,
        *,
        type_: ContactTypeOrStr | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        total_contributions_min: float | None = None,
        total_contributions_max: float | None = None,
        recurring_contributions_min: float | None = None,
        recurring_contributions_max: float | None = None,
        tags: str | None = None,
        sort_by: SortByOrStr | None = None,
        sort_by_desc: SortByDescOrStr | None = None,
        email: str | None = None,
        primary_email: str | None = None,
        first_name: str | None = None,
        last_name: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1ContactsResponse:
        """Send a ``GET`` request.

        Args:
            type_: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            total_contributions_min: Value sent with the request.
            total_contributions_max: Value sent with the request.
            recurring_contributions_min: Value sent with the request.
            recurring_contributions_max: Value sent with the request.
            tags: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            email: Value sent with the request.
            primary_email: Value sent with the request.
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``ContactResource``

        Raises:
            ApiError: Authorization error Validation error ``error`` is ``AuthorizationException1 | ValidationException1
                | RawError``."""
        return unwrap(
            self._with_raw_response.contacts_index(
                type_=type_,
                created_after=created_after,
                created_before=created_before,
                updated_after=updated_after,
                updated_before=updated_before,
                total_contributions_min=total_contributions_min,
                total_contributions_max=total_contributions_max,
                recurring_contributions_min=recurring_contributions_min,
                recurring_contributions_max=recurring_contributions_max,
                tags=tags,
                sort_by=sort_by,
                sort_by_desc=sort_by_desc,
                email=email,
                primary_email=primary_email,
                first_name=first_name,
                last_name=last_name,
                request_options=request_options,
            ),
        )

    def contacts_show(self, contact: int, *, request_options: RequestOptionsOrDict | None = None) -> ContactResource:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.contacts_show(contact, request_options=request_options))

    def contacts_store(
        self,
        *,
        body: V1ContactsRequest | V1ContactsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.contacts_store(body=body, request_options=request_options))

    def contacts_update(
        self,
        contact: int,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.contacts_update(contact, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ContactsWithRawResponse:
        return self._with_raw_response


class AsyncContacts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactsWithRawResponse(client, server, auth)

    async def contact_restore(
        self, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactResource:
        """Send a ``PATCH`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.contact_restore(contact, request_options=request_options))

    async def contacts_destroy(self, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.contacts_destroy(contact, request_options=request_options))

    async def contacts_index(
        self,
        *,
        type_: ContactTypeOrStr | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        total_contributions_min: float | None = None,
        total_contributions_max: float | None = None,
        recurring_contributions_min: float | None = None,
        recurring_contributions_max: float | None = None,
        tags: str | None = None,
        sort_by: SortByOrStr | None = None,
        sort_by_desc: SortByDescOrStr | None = None,
        email: str | None = None,
        primary_email: str | None = None,
        first_name: str | None = None,
        last_name: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ContactsResponse:
        """Send a ``GET`` request.

        Args:
            type_: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            total_contributions_min: Value sent with the request.
            total_contributions_max: Value sent with the request.
            recurring_contributions_min: Value sent with the request.
            recurring_contributions_max: Value sent with the request.
            tags: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            email: Value sent with the request.
            primary_email: Value sent with the request.
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``ContactResource``

        Raises:
            ApiError: Authorization error Validation error ``error`` is ``AuthorizationException1 | ValidationException1
                | RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_index(
                type_=type_,
                created_after=created_after,
                created_before=created_before,
                updated_after=updated_after,
                updated_before=updated_before,
                total_contributions_min=total_contributions_min,
                total_contributions_max=total_contributions_max,
                recurring_contributions_min=recurring_contributions_min,
                recurring_contributions_max=recurring_contributions_max,
                tags=tags,
                sort_by=sort_by,
                sort_by_desc=sort_by_desc,
                email=email,
                primary_email=primary_email,
                first_name=first_name,
                last_name=last_name,
                request_options=request_options,
            ),
        )

    async def contacts_show(
        self, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ContactResource:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.contacts_show(contact, request_options=request_options))

    async def contacts_store(
        self,
        *,
        body: V1ContactsRequest | V1ContactsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.contacts_store(body=body, request_options=request_options))

    async def contacts_update(
        self,
        contact: int,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactResource:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``ContactResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.contacts_update(contact, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncContactsWithRawResponse:
        return self._with_raw_response


class ContactsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def contact_restore(
        self, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactResource, ContactRestoreErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/contacts/{contact}/restore"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contact_restore_error_mapper,
            request_options=request_options,
        )

    def contacts_destroy(
        self, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ContactsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/contacts/{contact}"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=contacts_destroy_error_mapper,
            request_options=request_options,
        )

    def contacts_index(
        self,
        *,
        type_: ContactTypeOrStr | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        total_contributions_min: float | None = None,
        total_contributions_max: float | None = None,
        recurring_contributions_min: float | None = None,
        recurring_contributions_max: float | None = None,
        tags: str | None = None,
        sort_by: SortByOrStr | None = None,
        sort_by_desc: SortByDescOrStr | None = None,
        email: str | None = None,
        primary_email: str | None = None,
        first_name: str | None = None,
        last_name: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContactsResponse, ContactsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            type_: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            total_contributions_min: Value sent with the request.
            total_contributions_max: Value sent with the request.
            recurring_contributions_min: Value sent with the request.
            recurring_contributions_max: Value sent with the request.
            tags: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            email: Value sent with the request.
            primary_email: Value sent with the request.
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts"),
            query_params=[
                param[ContactTypeOrStr | None]("type", type_),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("updatedAfter", updated_after),
                param[RFC3339DateTime | None]("updatedBefore", updated_before),
                param[float | None]("totalContributionsMin", total_contributions_min),
                param[float | None]("totalContributionsMax", total_contributions_max),
                param[float | None]("recurringContributionsMin", recurring_contributions_min),
                param[float | None]("recurringContributionsMax", recurring_contributions_max),
                param[str | None]("tags", tags),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortByDescOrStr | None]("sortByDesc", sort_by_desc),
                param[str | None]("email", email),
                param[str | None]("primaryEmail", primary_email),
                param[str | None]("firstName", first_name),
                param[str | None]("lastName", last_name),
            ],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1ContactsResponse],
            error_mapper=contacts_index_error_mapper,
            request_options=request_options,
        )

    def contacts_show(
        self, contact: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ContactResource, ContactsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts/{contact}"),
            path_params=[param[int]("contact", contact)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contacts_show_error_mapper,
            request_options=request_options,
        )

    def contacts_store(
        self,
        *,
        body: V1ContactsRequest | V1ContactsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsRequest | V1ContactsRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contacts_store_error_mapper,
            request_options=request_options,
        )

    def contacts_update(
        self,
        contact: int,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/contacts/{contact}"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateContactRequest | UpdateContactRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[ContactResource],
            error_mapper=contacts_update_error_mapper,
            request_options=request_options,
        )


class AsyncContactsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def contact_restore(
        self, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactResource, ContactRestoreErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/contacts/{contact}/restore"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contact_restore_error_mapper,
            request_options=request_options,
        )

    async def contacts_destroy(
        self, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ContactsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/contacts/{contact}"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=contacts_destroy_error_mapper,
            request_options=request_options,
        )

    async def contacts_index(
        self,
        *,
        type_: ContactTypeOrStr | None = None,
        created_after: RFC3339DateTime | None = None,
        created_before: RFC3339DateTime | None = None,
        updated_after: RFC3339DateTime | None = None,
        updated_before: RFC3339DateTime | None = None,
        total_contributions_min: float | None = None,
        total_contributions_max: float | None = None,
        recurring_contributions_min: float | None = None,
        recurring_contributions_max: float | None = None,
        tags: str | None = None,
        sort_by: SortByOrStr | None = None,
        sort_by_desc: SortByDescOrStr | None = None,
        email: str | None = None,
        primary_email: str | None = None,
        first_name: str | None = None,
        last_name: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ContactsResponse, ContactsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            type_: Value sent with the request.
            created_after: Value sent with the request.
            created_before: Value sent with the request.
            updated_after: Value sent with the request.
            updated_before: Value sent with the request.
            total_contributions_min: Value sent with the request.
            total_contributions_max: Value sent with the request.
            recurring_contributions_min: Value sent with the request.
            recurring_contributions_max: Value sent with the request.
            tags: Value sent with the request.
            sort_by: Value sent with the request.
            sort_by_desc: Value sent with the request.
            email: Value sent with the request.
            primary_email: Value sent with the request.
            first_name: Value sent with the request.
            last_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts"),
            query_params=[
                param[ContactTypeOrStr | None]("type", type_),
                param[RFC3339DateTime | None]("createdAfter", created_after),
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[RFC3339DateTime | None]("updatedAfter", updated_after),
                param[RFC3339DateTime | None]("updatedBefore", updated_before),
                param[float | None]("totalContributionsMin", total_contributions_min),
                param[float | None]("totalContributionsMax", total_contributions_max),
                param[float | None]("recurringContributionsMin", recurring_contributions_min),
                param[float | None]("recurringContributionsMax", recurring_contributions_max),
                param[str | None]("tags", tags),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortByDescOrStr | None]("sortByDesc", sort_by_desc),
                param[str | None]("email", email),
                param[str | None]("primaryEmail", primary_email),
                param[str | None]("firstName", first_name),
                param[str | None]("lastName", last_name),
            ],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1ContactsResponse],
            error_mapper=contacts_index_error_mapper,
            request_options=request_options,
        )

    async def contacts_show(
        self, contact: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ContactResource, ContactsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            contact: The contact ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/contacts/{contact}"),
            path_params=[param[int]("contact", contact)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contacts_show_error_mapper,
            request_options=request_options,
        )

    async def contacts_store(
        self,
        *,
        body: V1ContactsRequest | V1ContactsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ContactsRequest | V1ContactsRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contacts_store_error_mapper,
            request_options=request_options,
        )

    async def contacts_update(
        self,
        contact: int,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactResource, ContactsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            contact: The contact ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/contacts/{contact}"),
            path_params=[param[int]("contact", contact)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateContactRequest | UpdateContactRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[ContactResource],
            error_mapper=contacts_update_error_mapper,
            request_options=request_options,
        )
