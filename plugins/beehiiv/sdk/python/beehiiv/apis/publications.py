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
from ..errors.index18_error import Index18ErrorBody, index18_error_mapper
from ..errors.show13_error import Show13ErrorBody, show13_error_mapper
from ..models.enums.publications_get_request_expand_item import PublicationsGetRequestExpandItemOrStr
from ..models.enums.publications_list_request_order_by import (
    PublicationsListRequestOrderBy,
    PublicationsListRequestOrderByOrStr,
)
from ..models.enums.publications_request_expand_item import PublicationsRequestExpandItemOrStr
from ..models.enums.request_direction import RequestDirection, RequestDirectionOrStr
from ..models.publications_get_response import PublicationsGetResponse
from ..models.publications_list_response import PublicationsListResponse
from ..server.server import Server


class Publications:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PublicationsWithRawResponse(client, server)

    def index18(
        self,
        authorization: str,
        *,
        expand: list[PublicationsRequestExpandItemOrStr] | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: PublicationsListRequestOrderByOrStr | None = PublicationsListRequestOrderBy.CREATED,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicationsListResponse:
        """Retrieve all publications associated with your API key.

        Args:
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the publication was first created.<br> ``name`` - The name of the publication.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index18(
                authorization,
                expand=expand,
                limit=limit,
                page=page,
                direction=direction,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    def show13(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PublicationsGetRequestExpandItemOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicationsGetResponse:
        """Retrieve a single publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show13(
                publication_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PublicationsWithRawResponse:
        return self._with_raw_response


class AsyncPublications:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPublicationsWithRawResponse(client, server)

    async def index18(
        self,
        authorization: str,
        *,
        expand: list[PublicationsRequestExpandItemOrStr] | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: PublicationsListRequestOrderByOrStr | None = PublicationsListRequestOrderBy.CREATED,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicationsListResponse:
        """Retrieve all publications associated with your API key.

        Args:
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the publication was first created.<br> ``name`` - The name of the publication.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index18(
                authorization,
                expand=expand,
                limit=limit,
                page=page,
                direction=direction,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    async def show13(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PublicationsGetRequestExpandItemOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicationsGetResponse:
        """Retrieve a single publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show13(
                publication_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPublicationsWithRawResponse:
        return self._with_raw_response


class PublicationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index18(
        self,
        authorization: str,
        *,
        expand: list[PublicationsRequestExpandItemOrStr] | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: PublicationsListRequestOrderByOrStr | None = PublicationsListRequestOrderBy.CREATED,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicationsListResponse, Index18ErrorBody]:
        """Retrieve all publications associated with your API key.

        Args:
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the publication was first created.<br> ``name`` - The name of the publication.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications"),
            query_params=[
                param[list[PublicationsRequestExpandItemOrStr] | None]("expand", expand),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[PublicationsListRequestOrderByOrStr | None]("order_by", order_by),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PublicationsListResponse],
            error_mapper=index18_error_mapper,
            request_options=request_options,
        )

    def show13(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PublicationsGetRequestExpandItemOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicationsGetResponse, Show13ErrorBody]:
        """Retrieve a single publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[list[PublicationsGetRequestExpandItemOrStr] | None]("expand", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PublicationsGetResponse],
            error_mapper=show13_error_mapper,
            request_options=request_options,
        )


class AsyncPublicationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index18(
        self,
        authorization: str,
        *,
        expand: list[PublicationsRequestExpandItemOrStr] | None = None,
        limit: int | None = None,
        page: int | None = None,
        direction: RequestDirectionOrStr | None = RequestDirection.ASC,
        order_by: PublicationsListRequestOrderByOrStr | None = PublicationsListRequestOrderBy.CREATED,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicationsListResponse, Index18ErrorBody]:
        """Retrieve all publications associated with your API key.

        Args:
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            page: Pagination returns the results in pages. Each page contains the number of results specified by the
                ``limit`` (default: 10).<br>If not specified, results 1-10 from page 1 will be returned.
            direction: The direction that the results are sorted in. Defaults to asc<br> ``asc`` - Ascending, sorts from
                smallest to largest.<br> ``desc`` - Descending, sorts from largest to smallest.
            order_by: The field that the results are sorted by. Defaults to created<br> ``created`` - The time in which
                the publication was first created.<br> ``name`` - The name of the publication.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications"),
            query_params=[
                param[list[PublicationsRequestExpandItemOrStr] | None]("expand", expand),
                param[int | None]("limit", limit),
                param[int | None]("page", page),
                param[RequestDirectionOrStr | None]("direction", direction),
                param[PublicationsListRequestOrderByOrStr | None]("order_by", order_by),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PublicationsListResponse],
            error_mapper=index18_error_mapper,
            request_options=request_options,
        )

    async def show13(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: list[PublicationsGetRequestExpandItemOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicationsGetResponse, Show13ErrorBody]:
        """Retrieve a single publication

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optionally expand the results by adding additional information like subscription counts and
                engagement stats.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[param[list[PublicationsGetRequestExpandItemOrStr] | None]("expand", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PublicationsGetResponse],
            error_mapper=show13_error_mapper,
            request_options=request_options,
        )
