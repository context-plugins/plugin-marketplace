from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create7_error import Create7ErrorBody, create7_error_mapper
from ..errors.delete2_error import Delete2ErrorBody, delete2_error_mapper
from ..errors.index14_error import Index14ErrorBody, index14_error_mapper
from ..errors.show10_error import Show10ErrorBody, show10_error_mapper
from ..errors.update2_error import Update2ErrorBody, update2_error_mapper
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.newsletter_list_index_response import NewsletterListIndexResponse
from ..models.newsletter_list_response import NewsletterListResponse
from ..models.publications_newsletter_lists_request import (
    PublicationsNewsletterListsRequest,
    PublicationsNewsletterListsRequestDict,
)
from ..models.publications_newsletter_lists_request1 import (
    PublicationsNewsletterListsRequest1,
    PublicationsNewsletterListsRequest1Dict,
)
from ..server.server import Server


class NewsletterLists:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = NewsletterListsWithRawResponse(client, server)

    def create7(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListResponse:
        """Create a new newsletter list for a publication. The list will be created with an active status. The slug will
        be auto-generated from the name if not provided.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.create7(publication_id, authorization, body=body, request_options=request_options)
        )

    def delete2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete2(
                publication_id, newsletter_list_id, authorization, request_options=request_options
            ),
        )

    def index14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListIndexResponse:
        """List all newsletter lists for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index14(
                publication_id,
                authorization,
                limit=limit,
                page=page,
                direction=direction,
                request_options=request_options,
            ),
        )

    def show10(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListResponse:
        """Retrieve a single newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show10(
                publication_id, newsletter_list_id, authorization, request_options=request_options
            ),
        )

    def update2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsletterListResponse:
        """Update a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.update2(
                publication_id, newsletter_list_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> NewsletterListsWithRawResponse:
        return self._with_raw_response


class AsyncNewsletterLists:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncNewsletterListsWithRawResponse(client, server)

    async def create7(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListResponse:
        """Create a new newsletter list for a publication. The list will be created with an active status. The slug will
        be auto-generated from the name if not provided.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create7(
                publication_id, authorization, body=body, request_options=request_options
            ),
        )

    async def delete2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete2(
                publication_id, newsletter_list_id, authorization, request_options=request_options
            ),
        )

    async def index14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListIndexResponse:
        """List all newsletter lists for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index14(
                publication_id,
                authorization,
                limit=limit,
                page=page,
                direction=direction,
                request_options=request_options,
            ),
        )

    async def show10(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListResponse:
        """Retrieve a single newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show10(
                publication_id, newsletter_list_id, authorization, request_options=request_options
            ),
        )

    async def update2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsletterListResponse:
        """Update a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Unprocessable Entity Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update2(
                publication_id, newsletter_list_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNewsletterListsWithRawResponse:
        return self._with_raw_response


class NewsletterListsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create7(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListResponse, Create7ErrorBody]:
        """Create a new newsletter list for a publication. The list will be created with an active status. The slug will
        be auto-generated from the name if not provided.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None](body),
            decoder=json_decoder[NewsletterListResponse],
            error_mapper=create7_error_mapper,
            request_options=request_options,
        )

    def delete2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, Delete2ErrorBody]:
        """Delete a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete2_error_mapper,
            request_options=request_options,
        )

    def index14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListIndexResponse, Index14ErrorBody]:
        """List all newsletter lists for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[NewsletterListIndexResponse],
            error_mapper=index14_error_mapper,
            request_options=request_options,
        )

    def show10(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListResponse, Show10ErrorBody]:
        """Retrieve a single newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[NewsletterListResponse],
            error_mapper=show10_error_mapper,
            request_options=request_options,
        )

    def update2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListResponse, Update2ErrorBody]:
        """Update a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None](body),
            decoder=json_decoder[NewsletterListResponse],
            error_mapper=update2_error_mapper,
            request_options=request_options,
        )


class AsyncNewsletterListsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create7(
        self,
        publication_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListResponse, Create7ErrorBody]:
        """Create a new newsletter list for a publication. The list will be created with an active status. The slug will
        be auto-generated from the name if not provided.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists"),
            path_params=[param[str]("publicationId", publication_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsNewsletterListsRequest | PublicationsNewsletterListsRequestDict | None](body),
            decoder=async_json_decoder[NewsletterListResponse],
            error_mapper=create7_error_mapper,
            request_options=request_options,
        )

    async def delete2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, Delete2ErrorBody]:
        """Delete a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete2_error_mapper,
            request_options=request_options,
        )

    async def index14(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListIndexResponse, Index14ErrorBody]:
        """List all newsletter lists for a publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[NewsletterListIndexResponse],
            error_mapper=index14_error_mapper,
            request_options=request_options,
        )

    async def show10(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListResponse, Show10ErrorBody]:
        """Retrieve a single newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[NewsletterListResponse],
            error_mapper=show10_error_mapper,
            request_options=request_options,
        )

    async def update2(
        self,
        publication_id: str,
        newsletter_list_id: str,
        authorization: str,
        *,
        body: PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsletterListResponse, Update2ErrorBody]:
        """Update a newsletter list belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            newsletter_list_id: The prefixed ID of the newsletter list object
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            path_params=[
                param[str]("publicationId", publication_id), param[str]("newsletterListId", newsletter_list_id)
            ],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicationsNewsletterListsRequest1 | PublicationsNewsletterListsRequest1Dict | None](body),
            decoder=async_json_decoder[NewsletterListResponse],
            error_mapper=update2_error_mapper,
            request_options=request_options,
        )
