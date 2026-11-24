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
from ..errors.index8_error import Index8ErrorBody, index8_error_mapper
from ..errors.show5_error import Show5ErrorBody, show5_error_mapper
from ..models.complimentary_access_response import ComplimentaryAccessResponse
from ..models.index_complimentary_access_response import IndexComplimentaryAccessResponse
from ..server.server import Server


class ComplimentaryAccessApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ComplimentaryAccessApiWithRawResponse(client, server)

    def index8(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IndexComplimentaryAccessResponse:
        """Retrieve all complimentary access objects belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.<br>``stats`` - Returns granted subscription counts.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index8(
                publication_id,
                authorization,
                expand=expand,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    def show5(
        self,
        publication_id: str,
        complimentary_access_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ComplimentaryAccessResponse:
        """Retrieve a single complimentary access object belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            complimentary_access_id: The prefixed ID of the complimentary access object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show5(
                publication_id, complimentary_access_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ComplimentaryAccessApiWithRawResponse:
        return self._with_raw_response


class AsyncComplimentaryAccessApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncComplimentaryAccessApiWithRawResponse(client, server)

    async def index8(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IndexComplimentaryAccessResponse:
        """Retrieve all complimentary access objects belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.<br>``stats`` - Returns granted subscription counts.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index8(
                publication_id,
                authorization,
                expand=expand,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    async def show5(
        self,
        publication_id: str,
        complimentary_access_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ComplimentaryAccessResponse:
        """Retrieve a single complimentary access object belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            complimentary_access_id: The prefixed ID of the complimentary access object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show5(
                publication_id, complimentary_access_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncComplimentaryAccessApiWithRawResponse:
        return self._with_raw_response


class ComplimentaryAccessApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index8(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IndexComplimentaryAccessResponse, Index8ErrorBody]:
        """Retrieve all complimentary access objects belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.<br>``stats`` - Returns granted subscription counts.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/complimentary_access"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[str | None]("expand[]", expand),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[IndexComplimentaryAccessResponse],
            error_mapper=index8_error_mapper,
            request_options=request_options,
        )

    def show5(
        self,
        publication_id: str,
        complimentary_access_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ComplimentaryAccessResponse, Show5ErrorBody]:
        """Retrieve a single complimentary access object belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            complimentary_access_id: The prefixed ID of the complimentary access object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/complimentary_access/{complimentaryAccessId}"
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("complimentaryAccessId", complimentary_access_id),
            ],
            query_params=[param[str | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ComplimentaryAccessResponse],
            error_mapper=show5_error_mapper,
            request_options=request_options,
        )


class AsyncComplimentaryAccessApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index8(
        self,
        publication_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IndexComplimentaryAccessResponse, Index8ErrorBody]:
        """Retrieve all complimentary access objects belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.<br>``stats`` - Returns granted subscription counts.
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: Use this opaque cursor token to fetch the next page of results. Obtain the value from
                ``next_cursor`` in a previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/complimentary_access"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[str | None]("expand[]", expand),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[IndexComplimentaryAccessResponse],
            error_mapper=index8_error_mapper,
            request_options=request_options,
        )

    async def show5(
        self,
        publication_id: str,
        complimentary_access_id: str,
        authorization: str,
        *,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ComplimentaryAccessResponse, Show5ErrorBody]:
        """Retrieve a single complimentary access object belonging to a specific publication.

        Args:
            publication_id: The prefixed ID of the publication object
            complimentary_access_id: The prefixed ID of the complimentary access object
            authorization: Bearer authentication
            expand: Optional list of expandable objects.<br>``tier`` - Returns the full tier object associated with this
                complimentary access.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/publications/{publicationId}/complimentary_access/{complimentaryAccessId}"
            ),
            path_params=[
                param[str]("publicationId", publication_id),
                param[str]("complimentaryAccessId", complimentary_access_id),
            ],
            query_params=[param[str | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ComplimentaryAccessResponse],
            error_mapper=show5_error_mapper,
            request_options=request_options,
        )
