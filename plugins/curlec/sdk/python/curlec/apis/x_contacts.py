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
from ..errors.create_contact_error import CreateContactErrorBody, create_contact_error_mapper
from ..errors.fetch_contact_error import FetchContactErrorBody, fetch_contact_error_mapper
from ..errors.list_contacts_error import ListContactsErrorBody, list_contacts_error_mapper
from ..errors.update_contact_error import UpdateContactErrorBody, update_contact_error_mapper
from ..models.contacts_request import ContactsRequest, ContactsRequestDict
from ..models.contacts_request1 import ContactsRequest1, ContactsRequest1Dict
from ..models.contacts_response import ContactsResponse
from ..models.x_contact import XContact
from ..server.server import Server


class XContacts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XContactsWithRawResponse(client, server, auth)

    def create_contact(
        self, body: ContactsRequest | ContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> XContact:
        """Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact,
        type) match an existing record.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_contact(body, request_options=request_options))

    def fetch_contact(self, contact_id: str, *, request_options: RequestOptionsOrDict | None = None) -> XContact:
        """Fetch details of a specific contact by its ID.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_contact(contact_id, request_options=request_options))

    def list_contacts(
        self,
        *,
        name: str | None = None,
        email: str | None = None,
        contact: str | None = None,
        reference_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactsResponse:
        """Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active
        status.

        Args:
            name: Filter by contact name (partial match supported).
            email: Filter by contact email address.
            contact: Filter by contact phone number.
            reference_id: Filter by your unique reference ID for the contact (max 40 chars).
            from_: Unix timestamp filter
            to: Unix timestamp. Only contacts created before this timestamp are returned.
            count: Number of contacts to return. Default: 10. Maximum: 100.
            skip: Number of contacts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of contacts

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_contacts(
                name=name,
                email=email,
                contact=contact,
                reference_id=reference_id,
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    def update_contact(
        self,
        contact_id: str,
        body: ContactsRequest1 | ContactsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> XContact:
        """Update contact details or activate/deactivate a contact. Set ``active: false`` to deactivate.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated contact

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_contact(contact_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> XContactsWithRawResponse:
        return self._with_raw_response


class AsyncXContacts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXContactsWithRawResponse(client, server, auth)

    async def create_contact(
        self, body: ContactsRequest | ContactsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> XContact:
        """Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact,
        type) match an existing record.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_contact(body, request_options=request_options))

    async def fetch_contact(
        self, contact_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> XContact:
        """Fetch details of a specific contact by its ID.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_contact(contact_id, request_options=request_options))

    async def list_contacts(
        self,
        *,
        name: str | None = None,
        email: str | None = None,
        contact: str | None = None,
        reference_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactsResponse:
        """Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active
        status.

        Args:
            name: Filter by contact name (partial match supported).
            email: Filter by contact email address.
            contact: Filter by contact phone number.
            reference_id: Filter by your unique reference ID for the contact (max 40 chars).
            from_: Unix timestamp filter
            to: Unix timestamp. Only contacts created before this timestamp are returned.
            count: Number of contacts to return. Default: 10. Maximum: 100.
            skip: Number of contacts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of contacts

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_contacts(
                name=name,
                email=email,
                contact=contact,
                reference_id=reference_id,
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    async def update_contact(
        self,
        contact_id: str,
        body: ContactsRequest1 | ContactsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> XContact:
        """Update contact details or activate/deactivate a contact. Set ``active: false`` to deactivate.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated contact

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_contact(contact_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncXContactsWithRawResponse:
        return self._with_raw_response


class XContactsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_contact(
        self, body: ContactsRequest | ContactsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[XContact, CreateContactErrorBody]:
        """Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact,
        type) match an existing record.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactsRequest | ContactsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[XContact],
            error_mapper=create_contact_error_mapper,
            request_options=request_options,
        )

    def fetch_contact(
        self, contact_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[XContact, FetchContactErrorBody]:
        """Fetch details of a specific contact by its ID.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{contact_id}"),
            path_params=[param[str]("contact_id", contact_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[XContact],
            error_mapper=fetch_contact_error_mapper,
            request_options=request_options,
        )

    def list_contacts(
        self,
        *,
        name: str | None = None,
        email: str | None = None,
        contact: str | None = None,
        reference_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactsResponse, ListContactsErrorBody]:
        """Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active
        status.

        Args:
            name: Filter by contact name (partial match supported).
            email: Filter by contact email address.
            contact: Filter by contact phone number.
            reference_id: Filter by your unique reference ID for the contact (max 40 chars).
            from_: Unix timestamp filter
            to: Unix timestamp. Only contacts created before this timestamp are returned.
            count: Number of contacts to return. Default: 10. Maximum: 100.
            skip: Number of contacts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("email", email),
                param[str | None]("contact", contact),
                param[str | None]("reference_id", reference_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[ContactsResponse],
            error_mapper=list_contacts_error_mapper,
            request_options=request_options,
        )

    def update_contact(
        self,
        contact_id: str,
        body: ContactsRequest1 | ContactsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[XContact, UpdateContactErrorBody]:
        """Update contact details or activate/deactivate a contact. Set ``active: false`` to deactivate.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/contacts/{contact_id}"),
            path_params=[param[str]("contact_id", contact_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactsRequest1 | ContactsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[XContact],
            error_mapper=update_contact_error_mapper,
            request_options=request_options,
        )


class AsyncXContactsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_contact(
        self, body: ContactsRequest | ContactsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[XContact, CreateContactErrorBody]:
        """Create a payout recipient contact. Returns existing contact if all identifying fields (name, email, contact,
        type) match an existing record.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactsRequest | ContactsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[XContact],
            error_mapper=create_contact_error_mapper,
            request_options=request_options,
        )

    async def fetch_contact(
        self, contact_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[XContact, FetchContactErrorBody]:
        """Fetch details of a specific contact by its ID.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{contact_id}"),
            path_params=[param[str]("contact_id", contact_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[XContact],
            error_mapper=fetch_contact_error_mapper,
            request_options=request_options,
        )

    async def list_contacts(
        self,
        *,
        name: str | None = None,
        email: str | None = None,
        contact: str | None = None,
        reference_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactsResponse, ListContactsErrorBody]:
        """Filter and list all contacts. Supports filtering by name, email, phone number, reference ID, and active
        status.

        Args:
            name: Filter by contact name (partial match supported).
            email: Filter by contact email address.
            contact: Filter by contact phone number.
            reference_id: Filter by your unique reference ID for the contact (max 40 chars).
            from_: Unix timestamp filter
            to: Unix timestamp. Only contacts created before this timestamp are returned.
            count: Number of contacts to return. Default: 10. Maximum: 100.
            skip: Number of contacts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("email", email),
                param[str | None]("contact", contact),
                param[str | None]("reference_id", reference_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[ContactsResponse],
            error_mapper=list_contacts_error_mapper,
            request_options=request_options,
        )

    async def update_contact(
        self,
        contact_id: str,
        body: ContactsRequest1 | ContactsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[XContact, UpdateContactErrorBody]:
        """Update contact details or activate/deactivate a contact. Set ``active: false`` to deactivate.

        Args:
            contact_id: Unique identifier of the contact (e.g. ``cont_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/contacts/{contact_id}"),
            path_params=[param[str]("contact_id", contact_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactsRequest1 | ContactsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[XContact],
            error_mapper=update_contact_error_mapper,
            request_options=request_options,
        )
