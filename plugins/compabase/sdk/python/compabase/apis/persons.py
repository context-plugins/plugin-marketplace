from __future__ import annotations

from uuid import UUID

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_persons_by_person_id_connections_error import (
    GetPersonsByPersonIdConnectionsErrorBody,
    get_persons_by_person_id_connections_error_mapper,
)
from ..errors.get_persons_search_error import GetPersonsSearchErrorBody, get_persons_search_error_mapper
from ..models.person_connections_response import PersonConnectionsResponse
from ..models.persons_search_response import PersonsSearchResponse
from ..server.server import Server


class Persons:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PersonsWithRawResponse(client, server, auth)

    def get_persons_by_person_id_connections(
        self, person_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> PersonConnectionsResponse:
        """Returns all companies linked to the given person together with the relationship type and role label for each
        link.

        Use ``GET /persons/search`` to resolve a name to a ``person_id`` first.

        Args:
            person_id: UUID of the person; obtained from ``GET /persons/search``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Person connections payload.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Resource not found. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_persons_by_person_id_connections(person_id, request_options=request_options)
        )

    def get_persons_search(
        self, q: str, *, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> PersonsSearchResponse:
        """Searches for natural persons by name (first name, last name, or both). Returns a deduplicated list of
        matching persons with their ``person_id`` key and the number of companies they are linked to.

        Use the returned ``person_id`` with ``GET /persons/{personId}/connections`` to fetch full connection details.

        Identification is restricted to name-based queries (first name, last name, or both). Protected data, including
        PESEL and exact birth dates, is never exposed. To assist with identification, every result includes a
        ``birth_year`` (integer).

        **Result capping:** internally the search scans up to 2 000 matching link rows before aggregation. For very
        common names the response may include a ``note`` field indicating the result set was truncated; use a more
        specific query to narrow results.

        Args:
            q: Name substring to search for (case-insensitive). Must be at least **2 characters**. Matched against the
                stored display name using ``ILIKE %q%``.
            limit: Maximum number of persons to return. Capped at **50**.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of matching persons.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_persons_search(q, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> PersonsWithRawResponse:
        return self._with_raw_response


class AsyncPersons:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPersonsWithRawResponse(client, server, auth)

    async def get_persons_by_person_id_connections(
        self, person_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PersonConnectionsResponse:
        """Returns all companies linked to the given person together with the relationship type and role label for each
        link.

        Use ``GET /persons/search`` to resolve a name to a ``person_id`` first.

        Args:
            person_id: UUID of the person; obtained from ``GET /persons/search``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Person connections payload.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Resource not found. Rate limit
                (120 requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to
                wait before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_persons_by_person_id_connections(
                person_id, request_options=request_options
            ),
        )

    async def get_persons_search(
        self, q: str, *, limit: int | None = 20, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PersonsSearchResponse:
        """Searches for natural persons by name (first name, last name, or both). Returns a deduplicated list of
        matching persons with their ``person_id`` key and the number of companies they are linked to.

        Use the returned ``person_id`` with ``GET /persons/{personId}/connections`` to fetch full connection details.

        Identification is restricted to name-based queries (first name, last name, or both). Protected data, including
        PESEL and exact birth dates, is never exposed. To assist with identification, every result includes a
        ``birth_year`` (integer).

        **Result capping:** internally the search scans up to 2 000 matching link rows before aggregation. For very
        common names the response may include a ``note`` field indicating the result set was truncated; use a more
        specific query to narrow results.

        Args:
            q: Name substring to search for (case-insensitive). Must be at least **2 characters**. Matched against the
                stored display name using ``ILIKE %q%``.
            limit: Maximum number of persons to return. Capped at **50**.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of matching persons.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. Rate limit (120 requests per
                minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait before
                retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_persons_search(q, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPersonsWithRawResponse:
        return self._with_raw_response


class PersonsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_persons_by_person_id_connections(
        self, person_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PersonConnectionsResponse, GetPersonsByPersonIdConnectionsErrorBody]:
        """Returns all companies linked to the given person together with the relationship type and role label for each
        link.

        Use ``GET /persons/search`` to resolve a name to a ``person_id`` first.

        Args:
            person_id: UUID of the person; obtained from ``GET /persons/search``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/persons/{personId}/connections"),
            path_params=[param[UUID]("personId", person_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[PersonConnectionsResponse],
            error_mapper=get_persons_by_person_id_connections_error_mapper,
            request_options=request_options,
        )

    def get_persons_search(
        self, q: str, *, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PersonsSearchResponse, GetPersonsSearchErrorBody]:
        """Searches for natural persons by name (first name, last name, or both). Returns a deduplicated list of
        matching persons with their ``person_id`` key and the number of companies they are linked to.

        Use the returned ``person_id`` with ``GET /persons/{personId}/connections`` to fetch full connection details.

        Identification is restricted to name-based queries (first name, last name, or both). Protected data, including
        PESEL and exact birth dates, is never exposed. To assist with identification, every result includes a
        ``birth_year`` (integer).

        **Result capping:** internally the search scans up to 2 000 matching link rows before aggregation. For very
        common names the response may include a ``note`` field indicating the result set was truncated; use a more
        specific query to narrow results.

        Args:
            q: Name substring to search for (case-insensitive). Must be at least **2 characters**. Matched against the
                stored display name using ``ILIKE %q%``.
            limit: Maximum number of persons to return. Capped at **50**.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/persons/search"),
            query_params=[param[str]("q", q), param[int | None]("limit", limit)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[PersonsSearchResponse],
            error_mapper=get_persons_search_error_mapper,
            request_options=request_options,
        )


class AsyncPersonsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_persons_by_person_id_connections(
        self, person_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PersonConnectionsResponse, GetPersonsByPersonIdConnectionsErrorBody]:
        """Returns all companies linked to the given person together with the relationship type and role label for each
        link.

        Use ``GET /persons/search`` to resolve a name to a ``person_id`` first.

        Args:
            person_id: UUID of the person; obtained from ``GET /persons/search``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/persons/{personId}/connections"),
            path_params=[param[UUID]("personId", person_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[PersonConnectionsResponse],
            error_mapper=get_persons_by_person_id_connections_error_mapper,
            request_options=request_options,
        )

    async def get_persons_search(
        self, q: str, *, limit: int | None = 20, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PersonsSearchResponse, GetPersonsSearchErrorBody]:
        """Searches for natural persons by name (first name, last name, or both). Returns a deduplicated list of
        matching persons with their ``person_id`` key and the number of companies they are linked to.

        Use the returned ``person_id`` with ``GET /persons/{personId}/connections`` to fetch full connection details.

        Identification is restricted to name-based queries (first name, last name, or both). Protected data, including
        PESEL and exact birth dates, is never exposed. To assist with identification, every result includes a
        ``birth_year`` (integer).

        **Result capping:** internally the search scans up to 2 000 matching link rows before aggregation. For very
        common names the response may include a ``note`` field indicating the result set was truncated; use a more
        specific query to narrow results.

        Args:
            q: Name substring to search for (case-insensitive). Must be at least **2 characters**. Matched against the
                stored display name using ``ILIKE %q%``.
            limit: Maximum number of persons to return. Capped at **50**.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/persons/search"),
            query_params=[param[str]("q", q), param[int | None]("limit", limit)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[PersonsSearchResponse],
            error_mapper=get_persons_search_error_mapper,
            request_options=request_options,
        )
