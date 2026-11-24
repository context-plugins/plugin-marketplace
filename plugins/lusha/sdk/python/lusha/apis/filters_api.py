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
from ..errors.get_company_filter_types_error import (
    GetCompanyFilterTypesErrorBody,
    get_company_filter_types_error_mapper,
)
from ..errors.get_company_filter_values_error import (
    GetCompanyFilterValuesErrorBody,
    get_company_filter_values_error_mapper,
)
from ..errors.get_contact_filter_types_error import (
    GetContactFilterTypesErrorBody,
    get_contact_filter_types_error_mapper,
)
from ..errors.get_contact_filter_values_error import (
    GetContactFilterValuesErrorBody,
    get_contact_filter_values_error_mapper,
)
from ..models.enums.filter_type import FilterTypeOrStr
from ..models.enums.filter_type1 import FilterType1OrStr
from ..models.filter_types_discovery_response import FilterTypesDiscoveryResponse
from ..models.filter_values_response import FilterValuesResponse
from ..server.server import Server


class FiltersApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FiltersApiWithRawResponse(client, server, auth)

    def get_company_filter_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> FilterTypesDiscoveryResponse:
        """Returns all available filter types for company prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_filter_types(request_options=request_options))

    def get_company_filter_values(
        self,
        filter_type: FilterType1OrStr,
        *,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FilterValuesResponse:
        """Returns valid values for a single company filter type.

        | Filter type | Query required? |
        |---|---|
        | ``sizes`` | No |
        | ``revenues`` | No |
        | ``sics`` | No |
        | ``naics`` | No |
        | ``intentTopics`` | No |
        | ``industriesLabels`` | No |
        | ``names`` | Yes (2-256 chars) |
        | ``technologies`` | Yes (2-256 chars) |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Too many requests - rate limit
                exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_company_filter_values(filter_type, query=query, request_options=request_options)
        )

    def get_contact_filter_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> FilterTypesDiscoveryResponse:
        """Returns all available filter types for contact prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_contact_filter_types(request_options=request_options))

    def get_contact_filter_values(
        self,
        filter_type: FilterTypeOrStr,
        *,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FilterValuesResponse:
        """Returns valid values for a single contact filter type.

        | Filter type | Query required? |
        |---|---|
        | ``departments`` | No |
        | ``seniority`` | No |
        | ``existingDataPoints`` | No |
        | ``countries`` | No |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Too many requests - rate limit
                exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_contact_filter_values(filter_type, query=query, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FiltersApiWithRawResponse:
        return self._with_raw_response


class AsyncFiltersApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFiltersApiWithRawResponse(client, server, auth)

    async def get_company_filter_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FilterTypesDiscoveryResponse:
        """Returns all available filter types for company prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_filter_types(request_options=request_options))

    async def get_company_filter_values(
        self,
        filter_type: FilterType1OrStr,
        *,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FilterValuesResponse:
        """Returns valid values for a single company filter type.

        | Filter type | Query required? |
        |---|---|
        | ``sizes`` | No |
        | ``revenues`` | No |
        | ``sics`` | No |
        | ``naics`` | No |
        | ``intentTopics`` | No |
        | ``industriesLabels`` | No |
        | ``names`` | Yes (2-256 chars) |
        | ``technologies`` | Yes (2-256 chars) |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Too many requests - rate limit
                exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_company_filter_values(
                filter_type, query=query, request_options=request_options
            ),
        )

    async def get_contact_filter_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FilterTypesDiscoveryResponse:
        """Returns all available filter types for contact prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_contact_filter_types(request_options=request_options))

    async def get_contact_filter_values(
        self,
        filter_type: FilterTypeOrStr,
        *,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FilterValuesResponse:
        """Returns valid values for a single contact filter type.

        | Filter type | Query required? |
        |---|---|
        | ``departments`` | No |
        | ``seniority`` | No |
        | ``existingDataPoints`` | No |
        | ``countries`` | No |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Forbidden - account
                inactive, V3 access not enabled, or plan does not include this feature Too many requests - rate limit
                exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_contact_filter_values(
                filter_type, query=query, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFiltersApiWithRawResponse:
        return self._with_raw_response


class FiltersApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_company_filter_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FilterTypesDiscoveryResponse, GetCompanyFilterTypesErrorBody]:
        """Returns all available filter types for company prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/prospecting/filters"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FilterTypesDiscoveryResponse],
            error_mapper=get_company_filter_types_error_mapper,
            request_options=request_options,
        )

    def get_company_filter_values(
        self,
        filter_type: FilterType1OrStr,
        *,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FilterValuesResponse, GetCompanyFilterValuesErrorBody]:
        """Returns valid values for a single company filter type.

        | Filter type | Query required? |
        |---|---|
        | ``sizes`` | No |
        | ``revenues`` | No |
        | ``sics`` | No |
        | ``naics`` | No |
        | ``intentTopics`` | No |
        | ``industriesLabels`` | No |
        | ``names`` | Yes (2-256 chars) |
        | ``technologies`` | Yes (2-256 chars) |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/prospecting/filters/{filterType}"),
            path_params=[param[FilterType1OrStr]("filterType", filter_type)],
            query_params=[param[str | None]("query", query)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FilterValuesResponse],
            error_mapper=get_company_filter_values_error_mapper,
            request_options=request_options,
        )

    def get_contact_filter_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FilterTypesDiscoveryResponse, GetContactFilterTypesErrorBody]:
        """Returns all available filter types for contact prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/contacts/prospecting/filters"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FilterTypesDiscoveryResponse],
            error_mapper=get_contact_filter_types_error_mapper,
            request_options=request_options,
        )

    def get_contact_filter_values(
        self,
        filter_type: FilterTypeOrStr,
        *,
        query: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FilterValuesResponse, GetContactFilterValuesErrorBody]:
        """Returns valid values for a single contact filter type.

        | Filter type | Query required? |
        |---|---|
        | ``departments`` | No |
        | ``seniority`` | No |
        | ``existingDataPoints`` | No |
        | ``countries`` | No |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/contacts/prospecting/filters/{filterType}"),
            path_params=[param[FilterTypeOrStr]("filterType", filter_type)],
            query_params=[param[str | None]("query", query)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FilterValuesResponse],
            error_mapper=get_contact_filter_values_error_mapper,
            request_options=request_options,
        )


class AsyncFiltersApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_company_filter_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FilterTypesDiscoveryResponse, GetCompanyFilterTypesErrorBody]:
        """Returns all available filter types for company prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/prospecting/filters"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FilterTypesDiscoveryResponse],
            error_mapper=get_company_filter_types_error_mapper,
            request_options=request_options,
        )

    async def get_company_filter_values(
        self,
        filter_type: FilterType1OrStr,
        *,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FilterValuesResponse, GetCompanyFilterValuesErrorBody]:
        """Returns valid values for a single company filter type.

        | Filter type | Query required? |
        |---|---|
        | ``sizes`` | No |
        | ``revenues`` | No |
        | ``sics`` | No |
        | ``naics`` | No |
        | ``intentTopics`` | No |
        | ``industriesLabels`` | No |
        | ``names`` | Yes (2-256 chars) |
        | ``technologies`` | Yes (2-256 chars) |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/companies/prospecting/filters/{filterType}"),
            path_params=[param[FilterType1OrStr]("filterType", filter_type)],
            query_params=[param[str | None]("query", query)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FilterValuesResponse],
            error_mapper=get_company_filter_values_error_mapper,
            request_options=request_options,
        )

    async def get_contact_filter_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FilterTypesDiscoveryResponse, GetContactFilterTypesErrorBody]:
        """Returns all available filter types for contact prospecting and whether each requires a search query.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/contacts/prospecting/filters"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FilterTypesDiscoveryResponse],
            error_mapper=get_contact_filter_types_error_mapper,
            request_options=request_options,
        )

    async def get_contact_filter_values(
        self,
        filter_type: FilterTypeOrStr,
        *,
        query: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FilterValuesResponse, GetContactFilterValuesErrorBody]:
        """Returns valid values for a single contact filter type.

        | Filter type | Query required? |
        |---|---|
        | ``departments`` | No |
        | ``seniority`` | No |
        | ``existingDataPoints`` | No |
        | ``countries`` | No |
        | ``locations`` | Yes (2-256 chars) |

        Args:
            filter_type: Value sent with the request.
            query: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/contacts/prospecting/filters/{filterType}"),
            path_params=[param[FilterTypeOrStr]("filterType", filter_type)],
            query_params=[param[str | None]("query", query)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FilterValuesResponse],
            error_mapper=get_contact_filter_values_error_mapper,
            request_options=request_options,
        )
