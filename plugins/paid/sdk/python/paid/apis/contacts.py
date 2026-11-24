from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_contact_error import CreateContactErrorBody, create_contact_error_mapper
from ..errors.delete_contact_by_id_error import DeleteContactByIdErrorBody, delete_contact_by_id_error_mapper
from ..errors.get_contact_by_id_error import GetContactByIdErrorBody, get_contact_by_id_error_mapper
from ..errors.list_contacts_error import ListContactsErrorBody, list_contacts_error_mapper
from ..errors.update_contact_by_external_id_error import (
    UpdateContactByExternalIdErrorBody,
    update_contact_by_external_id_error_mapper,
)
from ..errors.update_contact_by_id_error import UpdateContactByIdErrorBody, update_contact_by_id_error_mapper
from ..models.contact import Contact
from ..models.contact1 import Contact1
from ..models.contact_create import ContactCreate, ContactCreateDict
from ..models.contact_list_response import ContactListResponse
from ..models.create_contact_request import CreateContactRequest, CreateContactRequestDict
from ..models.update_contact_request import UpdateContactRequest, UpdateContactRequestDict
from ..server.server import Server


class Contacts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ContactsWithRawResponse(client, server)

    def create_contact(
        self,
        authorization: str,
        *,
        body: CreateContactRequest | CreateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Contact1:
        """Creates a new contact for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_contact(authorization, body=body, request_options=request_options))

    def create2(
        self,
        authorization: str,
        *,
        body: ContactCreate | ContactCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Contact:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create2(authorization, body=body, request_options=request_options))

    def delete_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_by_external_id2(external_id, authorization, request_options=request_options)
        )

    def delete_contact_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Delete a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_contact_by_id(id_, authorization, request_options=request_options))

    def delete2(
        self, contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete2(contact_id, authorization, request_options=request_options))

    def get_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Contact:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_by_external_id2(external_id, authorization, request_options=request_options)
        )

    def get_contact_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Contact1:
        """Get a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_by_id(id_, authorization, request_options=request_options))

    def get2(
        self, contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Contact:
        """Send a ``GET`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get2(contact_id, authorization, request_options=request_options))

    def list_contacts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactListResponse:
        """Get a list of contacts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_contacts(
                authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list2(self, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Contact]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list2(authorization, request_options=request_options))

    def update_contact_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Contact1:
        """Update a contact by its external ID

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_contact_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_contact_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Contact1:
        """Update a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_contact_by_id(id_, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ContactsWithRawResponse:
        return self._with_raw_response


class AsyncContacts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncContactsWithRawResponse(client, server)

    async def create_contact(
        self,
        authorization: str,
        *,
        body: CreateContactRequest | CreateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Contact1:
        """Creates a new contact for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_contact(authorization, body=body, request_options=request_options)
        )

    async def create2(
        self,
        authorization: str,
        *,
        body: ContactCreate | ContactCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Contact:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create2(authorization, body=body, request_options=request_options))

    async def delete_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_by_external_id2(
                external_id, authorization, request_options=request_options
            ),
        )

    async def delete_contact_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Delete a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_contact_by_id(id_, authorization, request_options=request_options)
        )

    async def delete2(
        self, contact_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete2(contact_id, authorization, request_options=request_options))

    async def get_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Contact:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_by_external_id2(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get_contact_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Contact1:
        """Get a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_contact_by_id(id_, authorization, request_options=request_options)
        )

    async def get2(
        self, contact_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Contact:
        """Send a ``GET`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get2(contact_id, authorization, request_options=request_options))

    async def list_contacts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactListResponse:
        """Get a list of contacts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_contacts(
                authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list2(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Contact]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list2(authorization, request_options=request_options))

    async def update_contact_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Contact1:
        """Update a contact by its external ID

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_contact_by_external_id(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_contact_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Contact1:
        """Update a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_contact_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncContactsWithRawResponse:
        return self._with_raw_response


class ContactsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_contact(
        self,
        authorization: str,
        *,
        body: CreateContactRequest | CreateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact1, CreateContactErrorBody]:
        """Creates a new contact for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContactRequest | CreateContactRequestDict | None](body),
            decoder=json_decoder[Contact1],
            error_mapper=create_contact_error_mapper,
            request_options=request_options,
        )

    def create2(
        self,
        authorization: str,
        *,
        body: ContactCreate | ContactCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactCreate | ContactCreateDict | None](body),
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_contact_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteContactByIdErrorBody]:
        """Delete a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=delete_contact_by_id_error_mapper,
            request_options=request_options,
        )

    def delete2(
        self, contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/{contactId}"),
            path_params=[param[str]("contactId", contact_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_contact_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Contact1, GetContactByIdErrorBody]:
        """Get a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Contact1],
            error_mapper=get_contact_by_id_error_mapper,
            request_options=request_options,
        )

    def get2(
        self, contact_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``GET`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{contactId}"),
            path_params=[param[str]("contactId", contact_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_contacts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactListResponse, ListContactsErrorBody]:
        """Get a list of contacts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ContactListResponse],
            error_mapper=list_contacts_error_mapper,
            request_options=request_options,
        )

    def list2(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Contact], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[Contact]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_contact_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact1, UpdateContactByExternalIdErrorBody]:
        """Update a contact by its external ID

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/contacts/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateContactRequest | UpdateContactRequestDict | None](body),
            decoder=json_decoder[Contact1],
            error_mapper=update_contact_by_external_id_error_mapper,
            request_options=request_options,
        )

    def update_contact_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact1, UpdateContactByIdErrorBody]:
        """Update a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateContactRequest | UpdateContactRequestDict | None](body),
            decoder=json_decoder[Contact1],
            error_mapper=update_contact_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncContactsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_contact(
        self,
        authorization: str,
        *,
        body: CreateContactRequest | CreateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact1, CreateContactErrorBody]:
        """Creates a new contact for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateContactRequest | CreateContactRequestDict | None](body),
            decoder=async_json_decoder[Contact1],
            error_mapper=create_contact_error_mapper,
            request_options=request_options,
        )

    async def create2(
        self,
        authorization: str,
        *,
        body: ContactCreate | ContactCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactCreate | ContactCreateDict | None](body),
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_contact_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteContactByIdErrorBody]:
        """Delete a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=delete_contact_by_id_error_mapper,
            request_options=request_options,
        )

    async def delete2(
        self, contact_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/{contactId}"),
            path_params=[param[str]("contactId", contact_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_by_external_id2(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_contact_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Contact1, GetContactByIdErrorBody]:
        """Get a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Contact1],
            error_mapper=get_contact_by_id_error_mapper,
            request_options=request_options,
        )

    async def get2(
        self, contact_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``GET`` request.

        Args:
            contact_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{contactId}"),
            path_params=[param[str]("contactId", contact_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_contacts(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactListResponse, ListContactsErrorBody]:
        """Get a list of contacts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ContactListResponse],
            error_mapper=list_contacts_error_mapper,
            request_options=request_options,
        )

    async def list2(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Contact], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[Contact]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_contact_by_external_id(
        self,
        external_id: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact1, UpdateContactByExternalIdErrorBody]:
        """Update a contact by its external ID

        Args:
            external_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/contacts/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateContactRequest | UpdateContactRequestDict | None](body),
            decoder=async_json_decoder[Contact1],
            error_mapper=update_contact_by_external_id_error_mapper,
            request_options=request_options,
        )

    async def update_contact_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateContactRequest | UpdateContactRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact1, UpdateContactByIdErrorBody]:
        """Update a contact by its ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateContactRequest | UpdateContactRequestDict | None](body),
            decoder=async_json_decoder[Contact1],
            error_mapper=update_contact_by_id_error_mapper,
            request_options=request_options,
        )
