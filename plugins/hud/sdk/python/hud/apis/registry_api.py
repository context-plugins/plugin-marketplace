from __future__ import annotations

from uuid import UUID

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
from ..errors.get_registry_source_url_v2_registry_registry_id_source_url_get_error import (
    GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody,
    get_registry_source_url_v2_registry_registry_id_source_url_get_error_mapper,
)
from ..errors.get_registry_v2_registry_registry_id_get_error import (
    GetRegistryV2RegistryRegistryIdGetErrorBody,
    get_registry_v2_registry_registry_id_get_error_mapper,
)
from ..errors.list_registries_v2_registry_get_error import (
    ListRegistriesV2RegistryGetErrorBody,
    list_registries_v2_registry_get_error_mapper,
)
from ..errors.list_registry_scenarios_v2_registry_registry_id_scenarios_get_error import (
    ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody,
    list_registry_scenarios_v2_registry_registry_id_scenarios_get_error_mapper,
)
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.paginated_response_registry_detail_response import PaginatedResponseRegistryDetailResponse
from ..models.registry_detail_response import RegistryDetailResponse
from ..models.registry_source_url_response import RegistrySourceUrlResponse
from ..models.scenario_response import ScenarioResponse
from ..server.server import Server


class RegistryApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RegistryApiWithRawResponse(client, server)

    def get_registry_source_url_v2_registry_registry_id_source_url_get(
        self, registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> RegistrySourceUrlResponse:
        """Get a presigned download URL for the registry's source archive.

        Readers outside the owning team download only the latest build of a public environment whose owner published its
        source.

        Args:
            registry_id: Value sent with the request.
            build_id: Download a specific build's source archive. Defaults to the registry's latest build when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_registry_source_url_v2_registry_registry_id_source_url_get(
                registry_id, build_id=build_id, request_options=request_options
            ),
        )

    def get_registry_v2_registry_registry_id_get(
        self, registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> RegistryDetailResponse:
        """Get a registry by id with its latest build details.

        Args:
            registry_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.get_registry_v2_registry_registry_id_get(
                registry_id, request_options=request_options
            ),
        )

    def list_registries_v2_registry_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        match_templates: bool | None = False,
        include_latest_scenarios: bool | None = False,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        project_id: UUID | None = None,
        sort_by: SortByOrStr | None = SortBy.STARRED,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginatedResponseRegistryDetailResponse:
        """List registries visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on name
            match_templates: When search is set, also match environment description and latest-build template name,
                description, and setup_description
            include_latest_scenarios: Embed latest-build templates on each list row
            public_only: Only public registries; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured registries, which are always public
            owner_only: Only registries owned by the caller's membership; ignored when public_only=True
            project_id: Only registries contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_registries_v2_registry_get(
                limit=limit,
                offset=offset,
                search=search,
                match_templates=match_templates,
                include_latest_scenarios=include_latest_scenarios,
                public_only=public_only,
                featured_only=featured_only,
                owner_only=owner_only,
                project_id=project_id,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    def list_registry_scenarios_v2_registry_registry_id_scenarios_get(
        self, registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[ScenarioResponse]:
        """List scenarios for a registry build (latest build by default).

        Args:
            registry_id: Value sent with the request.
            build_id: Filter scenarios to a specific build of this registry. Defaults to the registry's latest build
                when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.list_registry_scenarios_v2_registry_registry_id_scenarios_get(
                registry_id, build_id=build_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RegistryApiWithRawResponse:
        return self._with_raw_response


class AsyncRegistryApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRegistryApiWithRawResponse(client, server)

    async def get_registry_source_url_v2_registry_registry_id_source_url_get(
        self,
        registry_id: UUID,
        *,
        build_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RegistrySourceUrlResponse:
        """Get a presigned download URL for the registry's source archive.

        Readers outside the owning team download only the latest build of a public environment whose owner published its
        source.

        Args:
            registry_id: Value sent with the request.
            build_id: Download a specific build's source archive. Defaults to the registry's latest build when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_registry_source_url_v2_registry_registry_id_source_url_get(
                registry_id, build_id=build_id, request_options=request_options
            ),
        )

    async def get_registry_v2_registry_registry_id_get(
        self, registry_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RegistryDetailResponse:
        """Get a registry by id with its latest build details.

        Args:
            registry_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.get_registry_v2_registry_registry_id_get(
                registry_id, request_options=request_options
            ),
        )

    async def list_registries_v2_registry_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        match_templates: bool | None = False,
        include_latest_scenarios: bool | None = False,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        project_id: UUID | None = None,
        sort_by: SortByOrStr | None = SortBy.STARRED,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginatedResponseRegistryDetailResponse:
        """List registries visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on name
            match_templates: When search is set, also match environment description and latest-build template name,
                description, and setup_description
            include_latest_scenarios: Embed latest-build templates on each list row
            public_only: Only public registries; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured registries, which are always public
            owner_only: Only registries owned by the caller's membership; ignored when public_only=True
            project_id: Only registries contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_registries_v2_registry_get(
                limit=limit,
                offset=offset,
                search=search,
                match_templates=match_templates,
                include_latest_scenarios=include_latest_scenarios,
                public_only=public_only,
                featured_only=featured_only,
                owner_only=owner_only,
                project_id=project_id,
                sort_by=sort_by,
                request_options=request_options,
            ),
        )

    async def list_registry_scenarios_v2_registry_registry_id_scenarios_get(
        self,
        registry_id: UUID,
        *,
        build_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ScenarioResponse]:
        """List scenarios for a registry build (latest build by default).

        Args:
            registry_id: Value sent with the request.
            build_id: Filter scenarios to a specific build of this registry. Defaults to the registry's latest build
                when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.list_registry_scenarios_v2_registry_registry_id_scenarios_get(
                registry_id, build_id=build_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRegistryApiWithRawResponse:
        return self._with_raw_response


class RegistryApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_registry_source_url_v2_registry_registry_id_source_url_get(
        self, registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RegistrySourceUrlResponse, GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody]:
        """Get a presigned download URL for the registry's source archive.

        Readers outside the owning team download only the latest build of a public environment whose owner published its
        source.

        Args:
            registry_id: Value sent with the request.
            build_id: Download a specific build's source archive. Defaults to the registry's latest build when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry/{registry_id}/source-url"),
            path_params=[param[UUID]("registry_id", registry_id)],
            query_params=[param[UUID | None]("build_id", build_id)],
            decoder=json_decoder[RegistrySourceUrlResponse],
            error_mapper=get_registry_source_url_v2_registry_registry_id_source_url_get_error_mapper,
            request_options=request_options,
        )

    def get_registry_v2_registry_registry_id_get(
        self, registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RegistryDetailResponse, GetRegistryV2RegistryRegistryIdGetErrorBody]:
        """Get a registry by id with its latest build details.

        Args:
            registry_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry/{registry_id}"),
            path_params=[param[UUID]("registry_id", registry_id)],
            decoder=json_decoder[RegistryDetailResponse],
            error_mapper=get_registry_v2_registry_registry_id_get_error_mapper,
            request_options=request_options,
        )

    def list_registries_v2_registry_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        match_templates: bool | None = False,
        include_latest_scenarios: bool | None = False,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        project_id: UUID | None = None,
        sort_by: SortByOrStr | None = SortBy.STARRED,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseRegistryDetailResponse, ListRegistriesV2RegistryGetErrorBody]:
        """List registries visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on name
            match_templates: When search is set, also match environment description and latest-build template name,
                description, and setup_description
            include_latest_scenarios: Embed latest-build templates on each list row
            public_only: Only public registries; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured registries, which are always public
            owner_only: Only registries owned by the caller's membership; ignored when public_only=True
            project_id: Only registries contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
                param[bool | None]("match_templates", match_templates),
                param[bool | None]("include_latest_scenarios", include_latest_scenarios),
                param[bool | None]("public_only", public_only),
                param[bool | None]("featured_only", featured_only),
                param[bool | None]("owner_only", owner_only),
                param[UUID | None]("project_id", project_id),
                param[SortByOrStr | None]("sort_by", sort_by),
            ],
            decoder=json_decoder[PaginatedResponseRegistryDetailResponse],
            error_mapper=list_registries_v2_registry_get_error_mapper,
            request_options=request_options,
        )

    def list_registry_scenarios_v2_registry_registry_id_scenarios_get(
        self, registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ScenarioResponse], ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody]:
        """List scenarios for a registry build (latest build by default).

        Args:
            registry_id: Value sent with the request.
            build_id: Filter scenarios to a specific build of this registry. Defaults to the registry's latest build
                when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry/{registry_id}/scenarios"),
            path_params=[param[UUID]("registry_id", registry_id)],
            query_params=[param[UUID | None]("build_id", build_id)],
            decoder=json_decoder[list[ScenarioResponse]],
            error_mapper=list_registry_scenarios_v2_registry_registry_id_scenarios_get_error_mapper,
            request_options=request_options,
        )


class AsyncRegistryApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_registry_source_url_v2_registry_registry_id_source_url_get(
        self,
        registry_id: UUID,
        *,
        build_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RegistrySourceUrlResponse, GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody]:
        """Get a presigned download URL for the registry's source archive.

        Readers outside the owning team download only the latest build of a public environment whose owner published its
        source.

        Args:
            registry_id: Value sent with the request.
            build_id: Download a specific build's source archive. Defaults to the registry's latest build when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry/{registry_id}/source-url"),
            path_params=[param[UUID]("registry_id", registry_id)],
            query_params=[param[UUID | None]("build_id", build_id)],
            decoder=async_json_decoder[RegistrySourceUrlResponse],
            error_mapper=get_registry_source_url_v2_registry_registry_id_source_url_get_error_mapper,
            request_options=request_options,
        )

    async def get_registry_v2_registry_registry_id_get(
        self, registry_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RegistryDetailResponse, GetRegistryV2RegistryRegistryIdGetErrorBody]:
        """Get a registry by id with its latest build details.

        Args:
            registry_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry/{registry_id}"),
            path_params=[param[UUID]("registry_id", registry_id)],
            decoder=async_json_decoder[RegistryDetailResponse],
            error_mapper=get_registry_v2_registry_registry_id_get_error_mapper,
            request_options=request_options,
        )

    async def list_registries_v2_registry_get(
        self,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        search: str | None = None,
        match_templates: bool | None = False,
        include_latest_scenarios: bool | None = False,
        public_only: bool | None = False,
        featured_only: bool | None = False,
        owner_only: bool | None = False,
        project_id: UUID | None = None,
        sort_by: SortByOrStr | None = SortBy.STARRED,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginatedResponseRegistryDetailResponse, ListRegistriesV2RegistryGetErrorBody]:
        """List registries visible to the caller, with search, ownership, and sort filters.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            search: ILIKE-match on name
            match_templates: When search is set, also match environment description and latest-build template name,
                description, and setup_description
            include_latest_scenarios: Embed latest-build templates on each list row
            public_only: Only public registries; anonymous browsing requires this or featured_only
            featured_only: Only platform-featured registries, which are always public
            owner_only: Only registries owned by the caller's membership; ignored when public_only=True
            project_id: Only registries contained by this Project; omitted lists every Project
            sort_by: Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count
                DESC)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
                param[bool | None]("match_templates", match_templates),
                param[bool | None]("include_latest_scenarios", include_latest_scenarios),
                param[bool | None]("public_only", public_only),
                param[bool | None]("featured_only", featured_only),
                param[bool | None]("owner_only", owner_only),
                param[UUID | None]("project_id", project_id),
                param[SortByOrStr | None]("sort_by", sort_by),
            ],
            decoder=async_json_decoder[PaginatedResponseRegistryDetailResponse],
            error_mapper=list_registries_v2_registry_get_error_mapper,
            request_options=request_options,
        )

    async def list_registry_scenarios_v2_registry_registry_id_scenarios_get(
        self,
        registry_id: UUID,
        *,
        build_id: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ScenarioResponse], ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody]:
        """List scenarios for a registry build (latest build by default).

        Args:
            registry_id: Value sent with the request.
            build_id: Filter scenarios to a specific build of this registry. Defaults to the registry's latest build
                when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/registry/{registry_id}/scenarios"),
            path_params=[param[UUID]("registry_id", registry_id)],
            query_params=[param[UUID | None]("build_id", build_id)],
            decoder=async_json_decoder[list[ScenarioResponse]],
            error_mapper=list_registry_scenarios_v2_registry_registry_id_scenarios_get_error_mapper,
            request_options=request_options,
        )
