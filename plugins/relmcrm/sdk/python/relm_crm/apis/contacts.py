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
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.contact import Contact
from ..models.contact_input import ContactInput, ContactInputDict
from ..models.contact_list import ContactList
from ..models.deleted import Deleted
from ..server.server import Server


class Contacts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContactsWithRawResponse(client, server, auth)

    def create_contact(
        self,
        body: ContactInput | ContactInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Contact:
        """Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom field. Email
        is unique per workspace.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_contact(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def delete_contact(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_contact(id_, request_options=request_options))

    def get_contact(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_contact(id_, request_options=request_options))

    def list_contacts(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        email: str | None = None,
        company_id: str | None = None,
        type_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ContactList:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Substring over name/email/phone/linkedin.
            email: Value sent with the request.
            company_id: Value sent with the request.
            type_: A registered contact.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_contacts(
                limit=limit,
                cursor=cursor,
                include_deleted=include_deleted,
                q=q,
                email=email,
                company_id=company_id,
                type_=type_,
                request_options=request_options,
            ),
        )

    def restore_contact(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Contact:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.restore_contact(id_, request_options=request_options))

    def update_contact(
        self,
        id_: str,
        body: ContactInput | ContactInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Contact:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_contact(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ContactsWithRawResponse:
        return self._with_raw_response


class AsyncContacts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContactsWithRawResponse(client, server, auth)

    async def create_contact(
        self,
        body: ContactInput | ContactInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Contact:
        """Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom field. Email
        is unique per workspace.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_contact(
                body, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def delete_contact(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_contact(id_, request_options=request_options))

    async def get_contact(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Contact:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_contact(id_, request_options=request_options))

    async def list_contacts(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        email: str | None = None,
        company_id: str | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ContactList:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Substring over name/email/phone/linkedin.
            email: Value sent with the request.
            company_id: Value sent with the request.
            type_: A registered contact.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Contact list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_contacts(
                limit=limit,
                cursor=cursor,
                include_deleted=include_deleted,
                q=q,
                email=email,
                company_id=company_id,
                type_=type_,
                request_options=request_options,
            ),
        )

    async def restore_contact(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Contact:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restored

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.restore_contact(id_, request_options=request_options))

    async def update_contact(
        self,
        id_: str,
        body: ContactInput | ContactInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Contact:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_contact(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncContactsWithRawResponse:
        return self._with_raw_response


class ContactsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_contact(
        self,
        body: ContactInput | ContactInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact, RawError]:
        """Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom field. Email
        is unique per workspace.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ContactInput | ContactInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_contact(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_contact(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_contacts(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        email: str | None = None,
        company_id: str | None = None,
        type_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactList, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Substring over name/email/phone/linkedin.
            email: Value sent with the request.
            company_id: Value sent with the request.
            type_: A registered contact.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("include_deleted", include_deleted),
                param[str | None]("q", q),
                param[str | None]("email", email),
                param[str | None]("company_id", company_id),
                param[str | None]("type", type_),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[ContactList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def restore_contact(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_contact(
        self,
        id_: str,
        body: ContactInput | ContactInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactInput | ContactInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncContactsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_contact(
        self,
        body: ContactInput | ContactInputDict,
        *,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact, RawError]:
        """Needs at least one of: a name, an identifier (email/phone/linkedin_url), a company, or a custom field. Email
        is unique per workspace.

        Args:
            body: The request body.
            idempotency_key: Safely retry a create: same key + same body replays the original result.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts"),
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            body=json_body[ContactInput | ContactInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_contact(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_contact(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_contacts(
        self,
        *,
        limit: int | None = 25,
        cursor: str | None = None,
        include_deleted: bool | None = None,
        q: str | None = None,
        email: str | None = None,
        company_id: str | None = None,
        type_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ContactList, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Page size (default 25, max 100).
            cursor: Opaque keyset cursor from a prior next_cursor.
            include_deleted: Include soft-deleted rows.
            q: Substring over name/email/phone/linkedin.
            email: Value sent with the request.
            company_id: Value sent with the request.
            type_: A registered contact.type value (validated).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/contacts"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[bool | None]("include_deleted", include_deleted),
                param[str | None]("q", q),
                param[str | None]("email", email),
                param[str | None]("company_id", company_id),
                param[str | None]("type", type_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[ContactList],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def restore_contact(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Contact, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/contacts/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_contact(
        self,
        id_: str,
        body: ContactInput | ContactInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Contact, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/contacts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ContactInput | ContactInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Contact],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
