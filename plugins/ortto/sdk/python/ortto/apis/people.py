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
from ..errors.delete_people_error import DeletePeopleErrorBody, delete_people_error_mapper
from ..errors.get_people_by_ids_error import GetPeopleByIdsErrorBody, get_people_by_ids_error_mapper
from ..errors.get_people_error import GetPeopleErrorBody, get_people_error_mapper
from ..errors.merge_people_error import MergePeopleErrorBody, merge_people_error_mapper
from ..models.person_delete_request import PersonDeleteRequest, PersonDeleteRequestDict
from ..models.person_get_by_ids_request import PersonGetByIdsRequest, PersonGetByIdsRequestDict
from ..models.person_get_request import PersonGetRequest, PersonGetRequestDict
from ..models.person_get_response import PersonGetResponse
from ..models.person_merge_request import PersonMergeRequest, PersonMergeRequestDict
from ..models.person_merge_response import PersonMergeResponse
from ..server.server import Server


class People:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PeopleWithRawResponse(client, server, auth)

    def delete_people(
        self,
        body: PersonDeleteRequest | PersonDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            People deleted.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_people(body, request_options=request_options))

    def get_people(
        self, body: PersonGetRequest | PersonGetRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PersonGetResponse:
        """Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching people.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_people(body, request_options=request_options))

    def get_people_by_ids(
        self,
        body: PersonGetByIdsRequest | PersonGetByIdsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PersonGetResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching people.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_people_by_ids(body, request_options=request_options))

    def merge_people(
        self, body: PersonMergeRequest | PersonMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PersonMergeResponse:
        """Creates or updates up to 100 people in a single request. Matching of existing records is controlled with
        merge_by, merge_strategy, and find_strategy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            People created or updated.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.merge_people(body, request_options=request_options))

    @property
    def with_raw_response(self) -> PeopleWithRawResponse:
        return self._with_raw_response


class AsyncPeople:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPeopleWithRawResponse(client, server, auth)

    async def delete_people(
        self,
        body: PersonDeleteRequest | PersonDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            People deleted.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_people(body, request_options=request_options))

    async def get_people(
        self, body: PersonGetRequest | PersonGetRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PersonGetResponse:
        """Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching people.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_people(body, request_options=request_options))

    async def get_people_by_ids(
        self,
        body: PersonGetByIdsRequest | PersonGetByIdsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PersonGetResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching people.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_people_by_ids(body, request_options=request_options))

    async def merge_people(
        self,
        body: PersonMergeRequest | PersonMergeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PersonMergeResponse:
        """Creates or updates up to 100 people in a single request. Matching of existing records is controlled with
        merge_by, merge_strategy, and find_strategy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            People created or updated.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.merge_people(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPeopleWithRawResponse:
        return self._with_raw_response


class PeopleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_people(
        self,
        body: PersonDeleteRequest | PersonDeleteRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeletePeopleErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonDeleteRequest | PersonDeleteRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=delete_people_error_mapper,
            request_options=request_options,
        )

    def get_people(
        self, body: PersonGetRequest | PersonGetRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PersonGetResponse, GetPeopleErrorBody]:
        """Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/get"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonGetRequest | PersonGetRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PersonGetResponse],
            error_mapper=get_people_error_mapper,
            request_options=request_options,
        )

    def get_people_by_ids(
        self,
        body: PersonGetByIdsRequest | PersonGetByIdsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PersonGetResponse, GetPeopleByIdsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/get-by-ids"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonGetByIdsRequest | PersonGetByIdsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PersonGetResponse],
            error_mapper=get_people_by_ids_error_mapper,
            request_options=request_options,
        )

    def merge_people(
        self, body: PersonMergeRequest | PersonMergeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PersonMergeResponse, MergePeopleErrorBody]:
        """Creates or updates up to 100 people in a single request. Matching of existing records is controlled with
        merge_by, merge_strategy, and find_strategy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/merge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonMergeRequest | PersonMergeRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[PersonMergeResponse],
            error_mapper=merge_people_error_mapper,
            request_options=request_options,
        )


class AsyncPeopleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_people(
        self,
        body: PersonDeleteRequest | PersonDeleteRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeletePeopleErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/delete"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonDeleteRequest | PersonDeleteRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=delete_people_error_mapper,
            request_options=request_options,
        )

    async def get_people(
        self, body: PersonGetRequest | PersonGetRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PersonGetResponse, GetPeopleErrorBody]:
        """Retrieves people matching a filter, with the requested fields, sort order, limit, and offset for pagination.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/get"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonGetRequest | PersonGetRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PersonGetResponse],
            error_mapper=get_people_error_mapper,
            request_options=request_options,
        )

    async def get_people_by_ids(
        self,
        body: PersonGetByIdsRequest | PersonGetByIdsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PersonGetResponse, GetPeopleByIdsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/get-by-ids"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonGetByIdsRequest | PersonGetByIdsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PersonGetResponse],
            error_mapper=get_people_by_ids_error_mapper,
            request_options=request_options,
        )

    async def merge_people(
        self,
        body: PersonMergeRequest | PersonMergeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PersonMergeResponse, MergePeopleErrorBody]:
        """Creates or updates up to 100 people in a single request. Matching of existing records is controlled with
        merge_by, merge_strategy, and find_strategy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/person/merge"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PersonMergeRequest | PersonMergeRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[PersonMergeResponse],
            error_mapper=merge_people_error_mapper,
            request_options=request_options,
        )
