from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.create_entry_error import CreateEntryErrorBody, create_entry_error_mapper
from ..errors.delete_entry_error import DeleteEntryErrorBody, delete_entry_error_mapper
from ..errors.get_all_entries_error import GetAllEntriesErrorBody, get_all_entries_error_mapper
from ..errors.get_single_entry_error import GetSingleEntryErrorBody, get_single_entry_error_mapper
from ..errors.publish_entry_error import PublishEntryErrorBody, publish_entry_error_mapper
from ..errors.unpublish_entry_error import UnpublishEntryErrorBody, unpublish_entry_error_mapper
from ..errors.update_entry_error import UpdateEntryErrorBody, update_entry_error_mapper
from ..models.create_entry_request import CreateEntryRequest, CreateEntryRequestDict
from ..models.entry import Entry
from ..models.entry2 import Entry2
from ..models.entry_list import EntryList
from ..models.publish_request import PublishRequest, PublishRequestDict
from ..models.update_entry_request import UpdateEntryRequest, UpdateEntryRequestDict
from ..server.server import Server


class Entries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EntriesWithRawResponse(client, server, auth)

    def create_entry(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateEntryRequest | CreateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Entry2:
        """Creates a new entry for the specified content type. The entry data must conform to the content type schema.
        Newly created entries are in draft state and must be published separately.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created entry.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.create_entry(
                content_type_uid, api_key, body, locale=locale, authtoken=authtoken, request_options=request_options
            ),
        )

    def delete_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        *,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This
        action cannot be undone.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entry deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.delete_entry(
                content_type_uid, entry_uid, api_key, authtoken=authtoken, request_options=request_options
            ),
        )

    def get_all_entries(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        skip: int | None = 0,
        limit: int | None = 100,
        query: str | None = None,
        include_count: bool | None = None,
        include_content_type: bool | None = None,
        include_reference: bool | None = None,
        only: str | None = None,
        except_: str | None = None,
        asc: str | None = None,
        desc: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EntryList:
        """Fetches a list of all published entries for a particular content type. Supports filtering by query,
        localization, reference inclusion, pagination, sorting, and field selection.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            query: A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field
                matching and comparison.
            include_count: Set to true to include the total count of matching entries.
            include_content_type: Set to true to include the content type schema in the response.
            include_reference: Set to true to include referenced entries inline in the response.
            only: Comma-separated list of fields to include in the response.
            except_: Comma-separated list of fields to exclude from the response.
            asc: Field name to sort results in ascending order.
            desc: Field name to sort results in descending order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of published entries for the specified content type.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_all_entries(
                content_type_uid,
                api_key,
                access_token,
                locale=locale,
                skip=skip,
                limit=limit,
                query=query,
                include_count=include_count,
                include_content_type=include_content_type,
                include_reference=include_reference,
                only=only,
                except_=except_,
                asc=asc,
                desc=desc,
                request_options=request_options,
            ),
        )

    def get_single_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        include_reference: bool | None = None,
        version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Entry:
        """Retrieves a specific published entry identified by its UID within a given content type. Supports
        localization, reference inclusion, and field selection parameters.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            include_reference: Set to true to include referenced entries inline in the response.
            version: Retrieve a specific published version of the entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested entry object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_single_entry(
                content_type_uid,
                entry_uid,
                api_key,
                access_token,
                locale=locale,
                include_reference=include_reference,
                version=version,
                request_options=request_options,
            ),
        )

    def publish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Publishes an entry to one or more environments and locales. Publishing makes the entry available via the
        Content Delivery API for the specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entry published successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.publish_entry(
                content_type_uid, entry_uid, api_key, body, authtoken=authtoken, request_options=request_options
            ),
        )

    def unpublish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the
        specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entry unpublished successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.unpublish_entry(
                content_type_uid, entry_uid, api_key, body, authtoken=authtoken, request_options=request_options
            ),
        )

    def update_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: UpdateEntryRequest | UpdateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Entry2:
        """Updates the field values of an existing entry. Only the fields included in the request body are updated;
        other fields retain their current values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated entry.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_entry(
                content_type_uid,
                entry_uid,
                api_key,
                body,
                locale=locale,
                authtoken=authtoken,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EntriesWithRawResponse:
        return self._with_raw_response


class AsyncEntries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEntriesWithRawResponse(client, server, auth)

    async def create_entry(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateEntryRequest | CreateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Entry2:
        """Creates a new entry for the specified content type. The entry data must conform to the content type schema.
        Newly created entries are in draft state and must be published separately.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created entry.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_entry(
                content_type_uid, api_key, body, locale=locale, authtoken=authtoken, request_options=request_options
            ),
        )

    async def delete_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        *,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This
        action cannot be undone.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entry deleted successfully.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_entry(
                content_type_uid, entry_uid, api_key, authtoken=authtoken, request_options=request_options
            ),
        )

    async def get_all_entries(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        skip: int | None = 0,
        limit: int | None = 100,
        query: str | None = None,
        include_count: bool | None = None,
        include_content_type: bool | None = None,
        include_reference: bool | None = None,
        only: str | None = None,
        except_: str | None = None,
        asc: str | None = None,
        desc: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EntryList:
        """Fetches a list of all published entries for a particular content type. Supports filtering by query,
        localization, reference inclusion, pagination, sorting, and field selection.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            query: A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field
                matching and comparison.
            include_count: Set to true to include the total count of matching entries.
            include_content_type: Set to true to include the content type schema in the response.
            include_reference: Set to true to include referenced entries inline in the response.
            only: Comma-separated list of fields to include in the response.
            except_: Comma-separated list of fields to exclude from the response.
            asc: Field name to sort results in ascending order.
            desc: Field name to sort results in descending order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of published entries for the specified content type.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_all_entries(
                content_type_uid,
                api_key,
                access_token,
                locale=locale,
                skip=skip,
                limit=limit,
                query=query,
                include_count=include_count,
                include_content_type=include_content_type,
                include_reference=include_reference,
                only=only,
                except_=except_,
                asc=asc,
                desc=desc,
                request_options=request_options,
            ),
        )

    async def get_single_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        include_reference: bool | None = None,
        version: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Entry:
        """Retrieves a specific published entry identified by its UID within a given content type. Supports
        localization, reference inclusion, and field selection parameters.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            include_reference: Set to true to include referenced entries inline in the response.
            version: Retrieve a specific published version of the entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested entry object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_single_entry(
                content_type_uid,
                entry_uid,
                api_key,
                access_token,
                locale=locale,
                include_reference=include_reference,
                version=version,
                request_options=request_options,
            ),
        )

    async def publish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Publishes an entry to one or more environments and locales. Publishing makes the entry available via the
        Content Delivery API for the specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entry published successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.publish_entry(
                content_type_uid, entry_uid, api_key, body, authtoken=authtoken, request_options=request_options
            ),
        )

    async def unpublish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the
        specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Entry unpublished successfully.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.unpublish_entry(
                content_type_uid, entry_uid, api_key, body, authtoken=authtoken, request_options=request_options
            ),
        )

    async def update_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: UpdateEntryRequest | UpdateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Entry2:
        """Updates the field values of an existing entry. Only the fields included in the request body are updated;
        other fields retain their current values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated entry.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | ErrorContentstackAssetsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_entry(
                content_type_uid,
                entry_uid,
                api_key,
                body,
                locale=locale,
                authtoken=authtoken,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEntriesWithRawResponse:
        return self._with_raw_response


class EntriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_entry(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateEntryRequest | CreateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Entry2, CreateEntryErrorBody]:
        """Creates a new entry for the specified content type. The entry data must conform to the content type schema.
        Newly created entries are in draft state and must be published separately.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}/entries"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            query_params=[param[str | None]("locale", locale)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateEntryRequest | CreateEntryRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[Entry2],
            error_mapper=create_entry_error_mapper,
            request_options=request_options,
        )

    def delete_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        *,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteEntryErrorBody]:
        """Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This
        action cannot be undone.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=empty_response,
            error_mapper=delete_entry_error_mapper,
            request_options=request_options,
        )

    def get_all_entries(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        skip: int | None = 0,
        limit: int | None = 100,
        query: str | None = None,
        include_count: bool | None = None,
        include_content_type: bool | None = None,
        include_reference: bool | None = None,
        only: str | None = None,
        except_: str | None = None,
        asc: str | None = None,
        desc: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EntryList, GetAllEntriesErrorBody]:
        """Fetches a list of all published entries for a particular content type. Supports filtering by query,
        localization, reference inclusion, pagination, sorting, and field selection.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            query: A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field
                matching and comparison.
            include_count: Set to true to include the total count of matching entries.
            include_content_type: Set to true to include the content type schema in the response.
            include_reference: Set to true to include referenced entries inline in the response.
            only: Comma-separated list of fields to include in the response.
            except_: Comma-separated list of fields to exclude from the response.
            asc: Field name to sort results in ascending order.
            desc: Field name to sort results in descending order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}/entries"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            query_params=[
                param[str | None]("locale", locale),
                param[int | None]("skip", skip),
                param[int | None]("limit", limit),
                param[str | None]("query", query),
                param[bool | None]("include_count", include_count),
                param[bool | None]("include_content_type", include_content_type),
                param[bool | None]("include_reference", include_reference),
                param[str | None]("only", only),
                param[str | None]("except", except_),
                param[str | None]("asc", asc),
                param[str | None]("desc", desc),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[EntryList],
            error_mapper=get_all_entries_error_mapper,
            request_options=request_options,
        )

    def get_single_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        include_reference: bool | None = None,
        version: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Entry, GetSingleEntryErrorBody]:
        """Retrieves a specific published entry identified by its UID within a given content type. Supports
        localization, reference inclusion, and field selection parameters.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            include_reference: Set to true to include referenced entries inline in the response.
            version: Retrieve a specific published version of the entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            query_params=[
                param[str | None]("locale", locale),
                param[bool | None]("include_reference", include_reference),
                param[int | None]("version", version),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[Entry],
            error_mapper=get_single_entry_error_mapper,
            request_options=request_options,
        )

    def publish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PublishEntryErrorBody]:
        """Publishes an entry to one or more environments and locales. Publishing makes the entry available via the
        Content Delivery API for the specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/publish"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PublishRequest | PublishRequestDict](body),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=empty_response,
            error_mapper=publish_entry_error_mapper,
            request_options=request_options,
        )

    def unpublish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UnpublishEntryErrorBody]:
        """Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the
        specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/unpublish"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PublishRequest | PublishRequestDict](body),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=empty_response,
            error_mapper=unpublish_entry_error_mapper,
            request_options=request_options,
        )

    def update_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: UpdateEntryRequest | UpdateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Entry2, UpdateEntryErrorBody]:
        """Updates the field values of an existing entry. Only the fields included in the request body are updated;
        other fields retain their current values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            query_params=[param[str | None]("locale", locale)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateEntryRequest | UpdateEntryRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=json_decoder[Entry2],
            error_mapper=update_entry_error_mapper,
            request_options=request_options,
        )


class AsyncEntriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_entry(
        self,
        content_type_uid: str,
        api_key: str,
        body: CreateEntryRequest | CreateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Entry2, CreateEntryErrorBody]:
        """Creates a new entry for the specified content type. The entry data must conform to the content type schema.
        Newly created entries are in draft state and must be published separately.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}/entries"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            query_params=[param[str | None]("locale", locale)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateEntryRequest | CreateEntryRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[Entry2],
            error_mapper=create_entry_error_mapper,
            request_options=request_options,
        )

    async def delete_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        *,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteEntryErrorBody]:
        """Permanently deletes an entry from the stack. Published entries must be unpublished before deletion. This
        action cannot be undone.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_empty_response,
            error_mapper=delete_entry_error_mapper,
            request_options=request_options,
        )

    async def get_all_entries(
        self,
        content_type_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        skip: int | None = 0,
        limit: int | None = 100,
        query: str | None = None,
        include_count: bool | None = None,
        include_content_type: bool | None = None,
        include_reference: bool | None = None,
        only: str | None = None,
        except_: str | None = None,
        asc: str | None = None,
        desc: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EntryList, GetAllEntriesErrorBody]:
        """Fetches a list of all published entries for a particular content type. Supports filtering by query,
        localization, reference inclusion, pagination, sorting, and field selection.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            skip: Number of entries to skip for pagination.
            limit: Maximum number of entries to return. Maximum allowed is 250.
            query: A JSON-encoded query object to filter entries. Supports MongoDB-style query operators for field
                matching and comparison.
            include_count: Set to true to include the total count of matching entries.
            include_content_type: Set to true to include the content type schema in the response.
            include_reference: Set to true to include referenced entries inline in the response.
            only: Comma-separated list of fields to include in the response.
            except_: Comma-separated list of fields to exclude from the response.
            asc: Field name to sort results in ascending order.
            desc: Field name to sort results in descending order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api("/content_types/{content_type_uid}/entries"),
            path_params=[param[str]("content_type_uid", content_type_uid)],
            query_params=[
                param[str | None]("locale", locale),
                param[int | None]("skip", skip),
                param[int | None]("limit", limit),
                param[str | None]("query", query),
                param[bool | None]("include_count", include_count),
                param[bool | None]("include_content_type", include_content_type),
                param[bool | None]("include_reference", include_reference),
                param[str | None]("only", only),
                param[str | None]("except", except_),
                param[str | None]("asc", asc),
                param[str | None]("desc", desc),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[EntryList],
            error_mapper=get_all_entries_error_mapper,
            request_options=request_options,
        )

    async def get_single_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        access_token: str,
        *,
        locale: str | None = None,
        include_reference: bool | None = None,
        version: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Entry, GetSingleEntryErrorBody]:
        """Retrieves a specific published entry identified by its UID within a given content type. Supports
        localization, reference inclusion, and field selection parameters.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key for the Contentstack stack.
            access_token: The delivery token for the stack environment.
            locale: The locale code to retrieve localized content. Defaults to the default locale of the stack if not
                specified.
            include_reference: Set to true to include referenced entries inline in the response.
            version: Retrieve a specific published version of the entry.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            query_params=[
                param[str | None]("locale", locale),
                param[bool | None]("include_reference", include_reference),
                param[int | None]("version", version),
            ],
            headers=[param[str]("api_key", api_key), param[str]("access_token", access_token)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[Entry],
            error_mapper=get_single_entry_error_mapper,
            request_options=request_options,
        )

    async def publish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PublishEntryErrorBody]:
        """Publishes an entry to one or more environments and locales. Publishing makes the entry available via the
        Content Delivery API for the specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/publish"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PublishRequest | PublishRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_empty_response,
            error_mapper=publish_entry_error_mapper,
            request_options=request_options,
        )

    async def unpublish_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: PublishRequest | PublishRequestDict,
        *,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UnpublishEntryErrorBody]:
        """Removes an entry from one or more environments, making it unavailable via the Content Delivery API for the
        specified environments.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}/unpublish"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[PublishRequest | PublishRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_empty_response,
            error_mapper=unpublish_entry_error_mapper,
            request_options=request_options,
        )

    async def update_entry(
        self,
        content_type_uid: str,
        entry_uid: str,
        api_key: str,
        body: UpdateEntryRequest | UpdateEntryRequestDict,
        *,
        locale: str | None = None,
        authtoken: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Entry2, UpdateEntryErrorBody]:
        """Updates the field values of an existing entry. Only the fields included in the request body are updated;
        other fields retain their current values.

        Args:
            content_type_uid: The unique identifier (UID) of the content type.
            entry_uid: The unique identifier (UID) of the entry.
            api_key: The API key identifying the Contentstack stack.
            body: The request body.
            locale: The locale code for localized content operations.
            authtoken: User session token for authentication. Required if not using management token.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_assets_api(
                "/content_types/{content_type_uid}/entries/{entry_uid}"
            ),
            path_params=[param[str]("content_type_uid", content_type_uid), param[str]("entry_uid", entry_uid)],
            query_params=[param[str | None]("locale", locale)],
            headers=[
                param[str]("api_key", api_key),
                param[str | None]("authtoken", authtoken),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateEntryRequest | UpdateEntryRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key, self._auth.delivery_token),
            decoder=async_json_decoder[Entry2],
            error_mapper=update_entry_error_mapper,
            request_options=request_options,
        )
