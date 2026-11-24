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
from ..errors.list_classifiers_error import ListClassifiersErrorBody, list_classifiers_error_mapper
from ..errors.list_extractors_error import ListExtractorsErrorBody, list_extractors_error_mapper
from ..errors.list_projects_error import ListProjectsErrorBody, list_projects_error_mapper
from ..models.projects_classifiers_response import ProjectsClassifiersResponse
from ..models.projects_extractors_response import ProjectsExtractorsResponse
from ..models.projects_response import ProjectsResponse
from ..server.server import Server


class Discovery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DiscoveryWithRawResponse(client, server, auth)

    def list_classifiers(
        self, project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None
    ) -> ProjectsClassifiersResponse:
        """Retrieves all available classifier models configured within a specific Document Understanding project.
        Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning
        models trained on specific document types; generative classifiers use large language models.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of classifiers for the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_classifiers(
                project_id, api_version=api_version, request_options=request_options
            ),
        )

    def list_extractors(
        self, project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None
    ) -> ProjectsExtractorsResponse:
        """Retrieves all available extractor models configured within a specific Document Understanding project. Each
        extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in
        extraction requests to invoke the correct model.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of extractors for the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_extractors(
                project_id, api_version=api_version, request_options=request_options
            ),
        )

    def list_projects(
        self, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None
    ) -> ProjectsResponse:
        """Retrieves all available Document Understanding projects accessible to the authenticated user. Each project
        contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use
        project IDs to scope classification and extraction requests to a specific project's models.

        Args:
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of available Document Understanding projects

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(self._with_raw_response.list_projects(api_version=api_version, request_options=request_options))

    @property
    def with_raw_response(self) -> DiscoveryWithRawResponse:
        return self._with_raw_response


class AsyncDiscovery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDiscoveryWithRawResponse(client, server, auth)

    async def list_classifiers(
        self,
        project_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectsClassifiersResponse:
        """Retrieves all available classifier models configured within a specific Document Understanding project.
        Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning
        models trained on specific document types; generative classifiers use large language models.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of classifiers for the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classifiers(
                project_id, api_version=api_version, request_options=request_options
            ),
        )

    async def list_extractors(
        self,
        project_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProjectsExtractorsResponse:
        """Retrieves all available extractor models configured within a specific Document Understanding project. Each
        extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in
        extraction requests to invoke the correct model.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of extractors for the project

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_extractors(
                project_id, api_version=api_version, request_options=request_options
            ),
        )

    async def list_projects(
        self, *, api_version: str | None = "1", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProjectsResponse:
        """Retrieves all available Document Understanding projects accessible to the authenticated user. Each project
        contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use
        project IDs to scope classification and extraction requests to a specific project's models.

        Args:
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of available Document Understanding projects

        Raises:
            ApiError: The request lacks valid authentication credentials The authenticated user does not have permission
                to perform this action ``error`` is ``ErrorResponseUiPathPlatformManagementAuditLogsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_projects(api_version=api_version, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDiscoveryWithRawResponse:
        return self._with_raw_response


class DiscoveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_classifiers(
        self, project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectsClassifiersResponse, ListClassifiersErrorBody]:
        """Retrieves all available classifier models configured within a specific Document Understanding project.
        Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning
        models trained on specific document types; generative classifiers use large language models.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/classifiers"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ProjectsClassifiersResponse],
            error_mapper=list_classifiers_error_mapper,
            request_options=request_options,
        )

    def list_extractors(
        self, project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectsExtractorsResponse, ListExtractorsErrorBody]:
        """Retrieves all available extractor models configured within a specific Document Understanding project. Each
        extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in
        extraction requests to invoke the correct model.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/extractors"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ProjectsExtractorsResponse],
            error_mapper=list_extractors_error_mapper,
            request_options=request_options,
        )

    def list_projects(
        self, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectsResponse, ListProjectsErrorBody]:
        """Retrieves all available Document Understanding projects accessible to the authenticated user. Each project
        contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use
        project IDs to scope classification and extraction requests to a specific project's models.

        Args:
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api("/projects"),
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ProjectsResponse],
            error_mapper=list_projects_error_mapper,
            request_options=request_options,
        )


class AsyncDiscoveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_classifiers(
        self,
        project_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectsClassifiersResponse, ListClassifiersErrorBody]:
        """Retrieves all available classifier models configured within a specific Document Understanding project.
        Classifiers identify the document type of a digitized document. Specialized classifiers use machine learning
        models trained on specific document types; generative classifiers use large language models.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/classifiers"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ProjectsClassifiersResponse],
            error_mapper=list_classifiers_error_mapper,
            request_options=request_options,
        )

    async def list_extractors(
        self,
        project_id: str,
        *,
        api_version: str | None = "1",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProjectsExtractorsResponse, ListExtractorsErrorBody]:
        """Retrieves all available extractor models configured within a specific Document Understanding project. Each
        extractor is associated with a document type and defines the fields it can extract. Use the extractor ID in
        extraction requests to invoke the correct model.

        Args:
            project_id: Unique identifier of the Document Understanding project
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api(
                "/projects/{projectId}/extractors"
            ),
            path_params=[param[str]("projectId", project_id)],
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ProjectsExtractorsResponse],
            error_mapper=list_extractors_error_mapper,
            request_options=request_options,
        )

    async def list_projects(
        self, *, api_version: str | None = "1", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProjectsResponse, ListProjectsErrorBody]:
        """Retrieves all available Document Understanding projects accessible to the authenticated user. Each project
        contains configuration for classifiers and extractors and provides URLs for downstream discovery operations. Use
        project IDs to scope classification and extraction requests to a specific project's models.

        Args:
            api_version: API version to use for this request
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_ui_path_document_understanding_classification_api("/projects"),
            query_params=[param[str | None]("api-version", api_version)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ProjectsResponse],
            error_mapper=list_projects_error_mapper,
            request_options=request_options,
        )
