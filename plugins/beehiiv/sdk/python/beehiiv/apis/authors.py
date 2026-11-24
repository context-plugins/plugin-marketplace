from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.index4_error import Index4ErrorBody, index4_error_mapper
from ..errors.show_error import ShowErrorBody, show_error_mapper
from ..models.authors_get_response import AuthorsGetResponse
from ..models.authors_list_response import AuthorsListResponse
from ..server.server import Server


class Authors:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuthorsWithRawResponse(client, server)

    def index4(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        name: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuthorsListResponse:
        """Retrieve a list of authors available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            name: Optionally filter authors by full name or first name (case-insensitive).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.index4(
                publication_id, authorization, limit=limit, page=page, name=name, request_options=request_options
            ),
        )

    def show(
        self,
        publication_id: str,
        author_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuthorsGetResponse:
        """Retrieve a single author from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            author_id: The author identifier. This accepts a prefixed author ID, full name, or first name.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.show(publication_id, author_id, authorization, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AuthorsWithRawResponse:
        return self._with_raw_response


class AsyncAuthors:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuthorsWithRawResponse(client, server)

    async def index4(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        name: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuthorsListResponse:
        """Retrieve a list of authors available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            name: Optionally filter authors by full name or first name (case-insensitive).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.index4(
                publication_id, authorization, limit=limit, page=page, name=name, request_options=request_options
            ),
        )

    async def show(
        self,
        publication_id: str,
        author_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuthorsGetResponse:
        """Retrieve a single author from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            author_id: The author identifier. This accepts a prefixed author ID, full name, or first name.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.show(
                publication_id, author_id, authorization, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuthorsWithRawResponse:
        return self._with_raw_response


class AuthorsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index4(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        name: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthorsListResponse, Index4ErrorBody]:
        """Retrieve a list of authors available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            name: Optionally filter authors by full name or first name (case-insensitive).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/authors"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit), param[int | None]("page", page), param[str | None]("name", name)
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AuthorsListResponse],
            error_mapper=index4_error_mapper,
            request_options=request_options,
        )

    def show(
        self,
        publication_id: str,
        author_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthorsGetResponse, ShowErrorBody]:
        """Retrieve a single author from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            author_id: The author identifier. This accepts a prefixed author ID, full name, or first name.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/authors/{authorId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("authorId", author_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[AuthorsGetResponse],
            error_mapper=show_error_mapper,
            request_options=request_options,
        )


class AsyncAuthorsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index4(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        name: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthorsListResponse, Index4ErrorBody]:
        """Retrieve a list of authors available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            name: Optionally filter authors by full name or first name (case-insensitive).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/authors"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit), param[int | None]("page", page), param[str | None]("name", name)
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AuthorsListResponse],
            error_mapper=index4_error_mapper,
            request_options=request_options,
        )

    async def show(
        self,
        publication_id: str,
        author_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthorsGetResponse, ShowErrorBody]:
        """Retrieve a single author from a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            author_id: The author identifier. This accepts a prefixed author ID, full name, or first name.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/authors/{authorId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("authorId", author_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[AuthorsGetResponse],
            error_mapper=show_error_mapper,
            request_options=request_options,
        )
