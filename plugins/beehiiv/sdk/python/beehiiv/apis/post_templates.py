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
from ..errors.index16_error import Index16ErrorBody, index16_error_mapper
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.post_templates_get_response import PostTemplatesGetResponse
from ..server.server import Server


class PostTemplates:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PostTemplatesWithRawResponse(client, server)

    def index16(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        order: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PostTemplatesGetResponse:
        """Retrieve a list of post templates available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order: The direction of the request. Defaults to ``asc``.
            order_by: The field to order by. Defaults to ``created``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.index16(
                publication_id,
                authorization,
                limit=limit,
                page=page,
                order=order,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PostTemplatesWithRawResponse:
        return self._with_raw_response


class AsyncPostTemplates:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPostTemplatesWithRawResponse(client, server)

    async def index16(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        order: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PostTemplatesGetResponse:
        """Retrieve a list of post templates available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order: The direction of the request. Defaults to ``asc``.
            order_by: The field to order by. Defaults to ``created``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Forbidden Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.index16(
                publication_id,
                authorization,
                limit=limit,
                page=page,
                order=order,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPostTemplatesWithRawResponse:
        return self._with_raw_response


class PostTemplatesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index16(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        order: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PostTemplatesGetResponse, Index16ErrorBody]:
        """Retrieve a list of post templates available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order: The direction of the request. Defaults to ``asc``.
            order_by: The field to order by. Defaults to ``created``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/post_templates"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("order", order),
                param[str | None]("order_by", order_by),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PostTemplatesGetResponse],
            error_mapper=index16_error_mapper,
            request_options=request_options,
        )


class AsyncPostTemplatesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index16(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        page: int | None = None,
        order: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PostTemplatesGetResponse, Index16ErrorBody]:
        """Retrieve a list of post templates available for the publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            order: The direction of the request. Defaults to ``asc``.
            order_by: The field to order by. Defaults to ``created``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/post_templates"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("order", order),
                param[str | None]("order_by", order_by),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PostTemplatesGetResponse],
            error_mapper=index16_error_mapper,
            request_options=request_options,
        )
