from __future__ import annotations

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
from ..errors.get_api_v1_discovered_datasets_error import (
    GetApiV1DiscoveredDatasetsErrorBody,
    get_api_v1_discovered_datasets_error_mapper,
)
from ..models.public_api_discovered_datasets_response import PublicApiDiscoveredDatasetsResponse
from ..server.server import Server


class DiscoveredDatasets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DiscoveredDatasetsWithRawResponse(client, server, auth)

    def get_api_v1_discovered_datasets(
        self,
        *,
        datasource_id: str | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiDiscoveredDatasetsResponse:
        """This endpoint enables you to list datasets that Soda has discovered in your data sources. Discovered datasets
        are datasets that have been found during a discovery scan but may not yet be onboarded.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasourceId``: Optionally, use this parameter to collect only the discovered datasets associated with a
            specific data source.

        - ``search``: Optionally, use this parameter to perform a search on the dataset name.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Discovered Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Too many requests Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_discovered_datasets(
                datasource_id=datasource_id, page=page, search=search, size=size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DiscoveredDatasetsWithRawResponse:
        return self._with_raw_response


class AsyncDiscoveredDatasets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDiscoveredDatasetsWithRawResponse(client, server, auth)

    async def get_api_v1_discovered_datasets(
        self,
        *,
        datasource_id: str | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDiscoveredDatasetsResponse:
        """This endpoint enables you to list datasets that Soda has discovered in your data sources. Discovered datasets
        are datasets that have been found during a discovery scan but may not yet be onboarded.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasourceId``: Optionally, use this parameter to collect only the discovered datasets associated with a
            specific data source.

        - ``search``: Optionally, use this parameter to perform a search on the dataset name.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Discovered Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Too many requests Internal server error ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_discovered_datasets(
                datasource_id=datasource_id, page=page, search=search, size=size, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDiscoveredDatasetsWithRawResponse:
        return self._with_raw_response


class DiscoveredDatasetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_discovered_datasets(
        self,
        *,
        datasource_id: str | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDiscoveredDatasetsResponse, GetApiV1DiscoveredDatasetsErrorBody]:
        """This endpoint enables you to list datasets that Soda has discovered in your data sources. Discovered datasets
        are datasets that have been found during a discovery scan but may not yet be onboarded.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasourceId``: Optionally, use this parameter to collect only the discovered datasets associated with a
            specific data source.

        - ``search``: Optionally, use this parameter to perform a search on the dataset name.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Discovered Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/discoveredDatasets"),
            query_params=[
                param[str | None]("datasourceId", datasource_id),
                param[int | None]("page", page),
                param[str | None]("search", search),
                param[int | None]("size", size),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDiscoveredDatasetsResponse],
            error_mapper=get_api_v1_discovered_datasets_error_mapper,
            request_options=request_options,
        )


class AsyncDiscoveredDatasetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_discovered_datasets(
        self,
        *,
        datasource_id: str | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDiscoveredDatasetsResponse, GetApiV1DiscoveredDatasetsErrorBody]:
        """This endpoint enables you to list datasets that Soda has discovered in your data sources. Discovered datasets
        are datasets that have been found during a discovery scan but may not yet be onboarded.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasourceId``: Optionally, use this parameter to collect only the discovered datasets associated with a
            specific data source.

        - ``search``: Optionally, use this parameter to perform a search on the dataset name.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Discovered Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/discoveredDatasets"),
            query_params=[
                param[str | None]("datasourceId", datasource_id),
                param[int | None]("page", page),
                param[str | None]("search", search),
                param[int | None]("size", size),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDiscoveredDatasetsResponse],
            error_mapper=get_api_v1_discovered_datasets_error_mapper,
            request_options=request_options,
        )
