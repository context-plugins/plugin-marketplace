from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_person_v1_error import GetPersonV1ErrorBody, get_person_v1_error_mapper
from ..errors.search_persons_v1_error import SearchPersonsV1ErrorBody, search_persons_v1_error_mapper
from ..models.person_detail import PersonDetail
from ..models.person_list import PersonList
from ..server.server import Server


class Persons:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PersonsWithRawResponse(client, server, auth)

    def get_person_v1(self, person_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> PersonDetail:
        """Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

        Args:
            person_slug: URL slug from a person search result
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Person + recent appearances

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Person not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_person_v1(person_slug, request_options=request_options))

    def search_persons_v1(
        self, *, q: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PersonList:
        """Searches the persons index by name. Persons are speakers identified across podcast transcripts — every
        speaker who's been attributed to at least one segment.

        Args:
            q: Name substring (case-insensitive)
            limit: Max results (default 20, max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching persons

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.search_persons_v1(q=q, limit=limit, request_options=request_options))

    @property
    def with_raw_response(self) -> PersonsWithRawResponse:
        return self._with_raw_response


class AsyncPersons:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPersonsWithRawResponse(client, server, auth)

    async def get_person_v1(
        self, person_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PersonDetail:
        """Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

        Args:
            person_slug: URL slug from a person search result
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Person + recent appearances

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Person not found Monthly quota exhausted (response includes ``usage:
                { current, limit }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_person_v1(person_slug, request_options=request_options))

    async def search_persons_v1(
        self,
        *,
        q: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PersonList:
        """Searches the persons index by name. Persons are speakers identified across podcast transcripts — every
        speaker who's been attributed to at least one segment.

        Args:
            q: Name substring (case-insensitive)
            limit: Max results (default 20, max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching persons

        Raises:
            ApiError: Missing or invalid API key No active subscription (paid endpoint requires a subscription) Endpoint
                not available on the caller's plan Monthly quota exhausted (response includes ``usage: { current, limit
                }``) ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(
            await self._with_raw_response.search_persons_v1(q=q, limit=limit, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPersonsWithRawResponse:
        return self._with_raw_response


class PersonsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_person_v1(
        self, person_slug: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PersonDetail, GetPersonV1ErrorBody]:
        """Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

        Args:
            person_slug: URL slug from a person search result
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/persons/{person_slug}"),
            path_params=[param[str]("person_slug", person_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PersonDetail],
            error_mapper=get_person_v1_error_mapper,
            request_options=request_options,
        )

    def search_persons_v1(
        self, *, q: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PersonList, SearchPersonsV1ErrorBody]:
        """Searches the persons index by name. Persons are speakers identified across podcast transcripts — every
        speaker who's been attributed to at least one segment.

        Args:
            q: Name substring (case-insensitive)
            limit: Max results (default 20, max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/persons"),
            query_params=[param[str | None]("q", q), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PersonList],
            error_mapper=search_persons_v1_error_mapper,
            request_options=request_options,
        )


class AsyncPersonsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_person_v1(
        self, person_slug: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PersonDetail, GetPersonV1ErrorBody]:
        """Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.

        Args:
            person_slug: URL slug from a person search result
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/persons/{person_slug}"),
            path_params=[param[str]("person_slug", person_slug)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PersonDetail],
            error_mapper=get_person_v1_error_mapper,
            request_options=request_options,
        )

    async def search_persons_v1(
        self,
        *,
        q: str | None = None,
        limit: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PersonList, SearchPersonsV1ErrorBody]:
        """Searches the persons index by name. Persons are speakers identified across podcast transcripts — every
        speaker who's been attributed to at least one segment.

        Args:
            q: Name substring (case-insensitive)
            limit: Max results (default 20, max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/persons"),
            query_params=[param[str | None]("q", q), param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PersonList],
            error_mapper=search_persons_v1_error_mapper,
            request_options=request_options,
        )
