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
from ..errors.index9_error import Index9ErrorBody, index9_error_mapper
from ..errors.show6_error import Show6ErrorBody, show6_error_mapper
from ..models.condition_set_show_response import ConditionSetShowResponse
from ..models.condition_sets_list_response import ConditionSetsListResponse
from ..models.enums.condition_set_purpose import ConditionSetPurposeOrStr
from ..models.enums.condition_set_show_expand_items import ConditionSetShowExpandItemsOrStr
from ..server.server import Server


class ConditionSets:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ConditionSetsWithRawResponse(client, server)

    def index9(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        purpose: ConditionSetPurposeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConditionSetsListResponse:
        """Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for
        targeting content to specific subscribers. Use the ``purpose`` parameter to filter by a specific use case.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            purpose: Filter condition sets by purpose. When not specified, all active condition sets are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.index9(
                publication_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                purpose=purpose,
                request_options=request_options,
            ),
        )

    def show6(
        self,
        publication_id: str,
        condition_set_id: str,
        authorization: str,
        *,
        expand: list[ConditionSetShowExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConditionSetShowResponse:
        """Retrieve a single active dynamic content condition set for a publication. Use ``expand[]=stats`` to calculate
        and return the active subscriber count synchronously.

        Args:
            publication_id: The prefixed ID of the publication object
            condition_set_id: The UUID of the condition set object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Calculates and returns
                the active subscriber count for this condition set synchronously.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.show6(
                publication_id, condition_set_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ConditionSetsWithRawResponse:
        return self._with_raw_response


class AsyncConditionSets:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncConditionSetsWithRawResponse(client, server)

    async def index9(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        purpose: ConditionSetPurposeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConditionSetsListResponse:
        """Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for
        targeting content to specific subscribers. Use the ``purpose`` parameter to filter by a specific use case.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            purpose: Filter condition sets by purpose. When not specified, all active condition sets are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Unauthorized. The API key or OAuth access token is missing, invalid, or expired.
                Resource Not Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.index9(
                publication_id,
                authorization,
                limit=limit,
                cursor=cursor,
                page=page,
                purpose=purpose,
                request_options=request_options,
            ),
        )

    async def show6(
        self,
        publication_id: str,
        condition_set_id: str,
        authorization: str,
        *,
        expand: list[ConditionSetShowExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConditionSetShowResponse:
        """Retrieve a single active dynamic content condition set for a publication. Use ``expand[]=stats`` to calculate
        and return the active subscriber count synchronously.

        Args:
            publication_id: The prefixed ID of the publication object
            condition_set_id: The UUID of the condition set object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Calculates and returns
                the active subscriber count for this condition set synchronously.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Unauthorized. The API key or OAuth access token is missing, invalid, or expired. Resource Not
                Found Rate Limit Exceeded Internal Server Error ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.show6(
                publication_id, condition_set_id, authorization, expand=expand, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncConditionSetsWithRawResponse:
        return self._with_raw_response


class ConditionSetsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def index9(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        purpose: ConditionSetPurposeOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConditionSetsListResponse, Index9ErrorBody]:
        """Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for
        targeting content to specific subscribers. Use the ``purpose`` parameter to filter by a specific use case.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            purpose: Filter condition sets by purpose. When not specified, all active condition sets are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/condition_sets"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[ConditionSetPurposeOrStr | None]("purpose", purpose),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ConditionSetsListResponse],
            error_mapper=index9_error_mapper,
            request_options=request_options,
        )

    def show6(
        self,
        publication_id: str,
        condition_set_id: str,
        authorization: str,
        *,
        expand: list[ConditionSetShowExpandItemsOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConditionSetShowResponse, Show6ErrorBody]:
        """Retrieve a single active dynamic content condition set for a publication. Use ``expand[]=stats`` to calculate
        and return the active subscriber count synchronously.

        Args:
            publication_id: The prefixed ID of the publication object
            condition_set_id: The UUID of the condition set object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Calculates and returns
                the active subscriber count for this condition set synchronously.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/condition_sets/{conditionSetId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("conditionSetId", condition_set_id)],
            query_params=[param[list[ConditionSetShowExpandItemsOrStr] | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ConditionSetShowResponse],
            error_mapper=show6_error_mapper,
            request_options=request_options,
        )


class AsyncConditionSetsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def index9(
        self,
        publication_id: str,
        authorization: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        page: int | None = None,
        purpose: ConditionSetPurposeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConditionSetsListResponse, Index9ErrorBody]:
        """Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for
        targeting content to specific subscribers. Use the ``purpose`` parameter to filter by a specific use case.

        Args:
            publication_id: The prefixed ID of the publication object
            authorization: Bearer authentication
            limit: A limit on the number of objects to be returned. The limit can range between 1 and 100, and the
                default is 10.
            cursor: **Cursor-based pagination (recommended)**: Use this opaque cursor token to fetch the next page of
                results. When provided, pagination will use cursor-based method which is more efficient and consistent
                than offset-based pagination.
            page: **Offset-based pagination (deprecated)**: Page number for offset-based pagination. Please migrate to
                cursor-based pagination using the ``cursor`` parameter. If not specified, results 1-10 from page 1 will
                be returned.
            purpose: Filter condition sets by purpose. When not specified, all active condition sets are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/condition_sets"),
            path_params=[param[str]("publicationId", publication_id)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[int | None]("page", page),
                param[ConditionSetPurposeOrStr | None]("purpose", purpose),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ConditionSetsListResponse],
            error_mapper=index9_error_mapper,
            request_options=request_options,
        )

    async def show6(
        self,
        publication_id: str,
        condition_set_id: str,
        authorization: str,
        *,
        expand: list[ConditionSetShowExpandItemsOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConditionSetShowResponse, Show6ErrorBody]:
        """Retrieve a single active dynamic content condition set for a publication. Use ``expand[]=stats`` to calculate
        and return the active subscriber count synchronously.

        Args:
            publication_id: The prefixed ID of the publication object
            condition_set_id: The UUID of the condition set object
            authorization: Bearer authentication
            expand: Optionally expand the response to include additional data.<br> ``stats`` - Calculates and returns
                the active subscriber count for this condition set synchronously.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/publications/{publicationId}/condition_sets/{conditionSetId}"),
            path_params=[param[str]("publicationId", publication_id), param[str]("conditionSetId", condition_set_id)],
            query_params=[param[list[ConditionSetShowExpandItemsOrStr] | None]("expand[]", expand)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ConditionSetShowResponse],
            error_mapper=show6_error_mapper,
            request_options=request_options,
        )
