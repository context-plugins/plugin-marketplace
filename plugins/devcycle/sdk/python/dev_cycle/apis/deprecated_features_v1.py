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
from ..errors.features_controller_create_multiple_v1_error import (
    FeaturesControllerCreateMultipleV1ErrorBody,
    features_controller_create_multiple_v1_error_mapper,
)
from ..errors.features_controller_create_v1_error import (
    FeaturesControllerCreateV1ErrorBody,
    features_controller_create_v1_error_mapper,
)
from ..errors.features_controller_find_all_linked_issues_v1_error import (
    FeaturesControllerFindAllLinkedIssuesV1ErrorBody,
    features_controller_find_all_linked_issues_v1_error_mapper,
)
from ..errors.features_controller_find_all_v1_error import (
    FeaturesControllerFindAllV1ErrorBody,
    features_controller_find_all_v1_error_mapper,
)
from ..errors.features_controller_find_one_v1_error import (
    FeaturesControllerFindOneV1ErrorBody,
    features_controller_find_one_v1_error_mapper,
)
from ..errors.features_controller_find_static_configuration_v1_error import (
    FeaturesControllerFindStaticConfigurationV1ErrorBody,
    features_controller_find_static_configuration_v1_error_mapper,
)
from ..errors.features_controller_link_issue_v1_error import (
    FeaturesControllerLinkIssueV1ErrorBody,
    features_controller_link_issue_v1_error_mapper,
)
from ..errors.features_controller_remove_linked_issue_v1_error import (
    FeaturesControllerRemoveLinkedIssueV1ErrorBody,
    features_controller_remove_linked_issue_v1_error_mapper,
)
from ..errors.features_controller_remove_v1_error import (
    FeaturesControllerRemoveV1ErrorBody,
    features_controller_remove_v1_error_mapper,
)
from ..errors.features_controller_update_static_configuration_v1_error import (
    FeaturesControllerUpdateStaticConfigurationV1ErrorBody,
    features_controller_update_static_configuration_v1_error_mapper,
)
from ..errors.features_controller_update_status_v1_error import (
    FeaturesControllerUpdateStatusV1ErrorBody,
    features_controller_update_status_v1_error_mapper,
)
from ..errors.features_controller_update_v1_error import (
    FeaturesControllerUpdateV1ErrorBody,
    features_controller_update_v1_error_mapper,
)
from ..models.create_feature_dto import CreateFeatureDto, CreateFeatureDtoDict
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.enums.status5 import Status5OrStr
from ..models.enums.type9 import Type9OrStr
from ..models.feature_dev_cycle_management_deprecated_features_v1_api import (
    FeatureDevCycleManagementDeprecatedFeaturesV1Api,
)
from ..models.jira_issue_link import JiraIssueLink
from ..models.link_jira_issue_dto import LinkJiraIssueDto, LinkJiraIssueDtoDict
from ..models.static_configuration import StaticConfiguration
from ..models.update_feature_dto import UpdateFeatureDto, UpdateFeatureDtoDict
from ..models.update_feature_status_dto import UpdateFeatureStatusDto, UpdateFeatureStatusDtoDict
from ..models.update_static_configuration_dto import UpdateStaticConfigurationDto, UpdateStaticConfigurationDtoDict
from ..server.server import Server


class DeprecatedFeaturesV1:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DeprecatedFeaturesV1WithRawResponse(client, server)

    def features_controller_create_multiple_v1(
        self, project: str, body: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]:
        """Create multiple new Features

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_create_multiple_v1(
                project, body, request_options=request_options
            ),
        )

    def features_controller_create_v1(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_create_v1(project, body, request_options=request_options)
        )

    def features_controller_find_all_linked_issues_v1(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[JiraIssueLink]:
        """Send a ``GET`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[JiraIssueLink]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_all_linked_issues_v1(
                feature, project, request_options=request_options
            ),
        )

    def features_controller_find_all_v1(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_all_v1(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                type_=type_,
                status=status,
                request_options=request_options,
            ),
        )

    def features_controller_find_one_v1(
        self, feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Get a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_one_v1(
                feature, key, project, request_options=request_options
            ),
        )

    def features_controller_find_static_configuration_v1(
        self, feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> StaticConfiguration:
        """Get a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_find_static_configuration_v1(
                feature, key, project, request_options=request_options
            ),
        )

    def features_controller_link_issue_v1(
        self,
        feature: str,
        project: str,
        body: LinkJiraIssueDto | LinkJiraIssueDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> JiraIssueLink:
        """Send a ``POST`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``JiraIssueLink`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_link_issue_v1(
                feature, project, body, request_options=request_options
            ),
        )

    def features_controller_remove_linked_issue_v1(
        self,
        feature: str,
        issue_id: str,
        key: str,
        project: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            feature: Value sent with the request.
            issue_id: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_remove_linked_issue_v1(
                feature, issue_id, key, project, request_options=request_options
            ),
        )

    def features_controller_remove_v1(
        self,
        feature: str,
        key: str,
        project: str,
        *,
        delete_variables: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            delete_variables: Controls whether the feature's associated variables should also be deleted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_remove_v1(
                feature, key, project, delete_variables=delete_variables, request_options=request_options
            ),
        )

    def features_controller_update_static_configuration_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StaticConfiguration:
        """Update a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_static_configuration_v1(
                feature, key, project, body, request_options=request_options
            ),
        )

    def features_controller_update_status_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Update a Feature's status by key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_status_v1(
                feature, key, project, body, request_options=request_options
            ),
        )

    def features_controller_update_v1(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.features_controller_update_v1(
                feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DeprecatedFeaturesV1WithRawResponse:
        return self._with_raw_response


class AsyncDeprecatedFeaturesV1:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDeprecatedFeaturesV1WithRawResponse(client, server)

    async def features_controller_create_multiple_v1(
        self, project: str, body: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]:
        """Create multiple new Features

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_create_multiple_v1(
                project, body, request_options=request_options
            ),
        )

    async def features_controller_create_v1(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_create_v1(project, body, request_options=request_options)
        )

    async def features_controller_find_all_linked_issues_v1(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[JiraIssueLink]:
        """Send a ``GET`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[JiraIssueLink]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_all_linked_issues_v1(
                feature, project, request_options=request_options
            ),
        )

    async def features_controller_find_all_v1(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_all_v1(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                type_=type_,
                status=status,
                request_options=request_options,
            ),
        )

    async def features_controller_find_one_v1(
        self, feature: str, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Get a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_one_v1(
                feature, key, project, request_options=request_options
            ),
        )

    async def features_controller_find_static_configuration_v1(
        self, feature: str, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StaticConfiguration:
        """Get a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_find_static_configuration_v1(
                feature, key, project, request_options=request_options
            ),
        )

    async def features_controller_link_issue_v1(
        self,
        feature: str,
        project: str,
        body: LinkJiraIssueDto | LinkJiraIssueDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> JiraIssueLink:
        """Send a ``POST`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``JiraIssueLink`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_link_issue_v1(
                feature, project, body, request_options=request_options
            ),
        )

    async def features_controller_remove_linked_issue_v1(
        self,
        feature: str,
        issue_id: str,
        key: str,
        project: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            feature: Value sent with the request.
            issue_id: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_remove_linked_issue_v1(
                feature, issue_id, key, project, request_options=request_options
            ),
        )

    async def features_controller_remove_v1(
        self,
        feature: str,
        key: str,
        project: str,
        *,
        delete_variables: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            delete_variables: Controls whether the feature's associated variables should also be deleted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_remove_v1(
                feature, key, project, delete_variables=delete_variables, request_options=request_options
            ),
        )

    async def features_controller_update_static_configuration_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StaticConfiguration:
        """Update a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``StaticConfiguration`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``PreconditionFailedErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_static_configuration_v1(
                feature, key, project, body, request_options=request_options
            ),
        )

    async def features_controller_update_status_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Update a Feature's status by key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_status_v1(
                feature, key, project, body, request_options=request_options
            ),
        )

    async def features_controller_update_v1(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureDevCycleManagementDeprecatedFeaturesV1Api:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureDevCycleManagementDeprecatedFeaturesV1Api`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``BadRequestErrorResponse |
                NotFoundErrorResponse | ConflictErrorResponse | PreconditionFailedErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.features_controller_update_v1(
                feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDeprecatedFeaturesV1WithRawResponse:
        return self._with_raw_response


class DeprecatedFeaturesV1WithRawResponse(BaseRawResponse[RawClient, Server]):
    def features_controller_create_multiple_v1(
        self, project: str, body: list[str], *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerCreateMultipleV1ErrorBody]:
        """Create multiple new Features

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features/multiple"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[str]](body),
            decoder=json_decoder[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]],
            error_mapper=features_controller_create_multiple_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_create_v1(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateV1ErrorBody]:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFeatureDto | CreateFeatureDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_create_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_all_linked_issues_v1(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[JiraIssueLink], FeaturesControllerFindAllLinkedIssuesV1ErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/integrations/jira/issues"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[list[JiraIssueLink]],
            error_mapper=features_controller_find_all_linked_issues_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_all_v1(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllV1ErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[Type9OrStr | None]("type", type_),
                param[Status5OrStr | None]("status", status),
            ],
            decoder=json_decoder[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]],
            error_mapper=features_controller_find_all_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_one_v1(
        self, feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneV1ErrorBody]:
        """Get a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_find_one_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_find_static_configuration_v1(
        self, feature: str, key: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationV1ErrorBody]:
        """Get a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            decoder=json_decoder[StaticConfiguration],
            error_mapper=features_controller_find_static_configuration_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_link_issue_v1(
        self,
        feature: str,
        project: str,
        body: LinkJiraIssueDto | LinkJiraIssueDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[JiraIssueLink, FeaturesControllerLinkIssueV1ErrorBody]:
        """Send a ``POST`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/integrations/jira/issues"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LinkJiraIssueDto | LinkJiraIssueDtoDict](body),
            decoder=json_decoder[JiraIssueLink],
            error_mapper=features_controller_link_issue_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_remove_linked_issue_v1(
        self,
        feature: str,
        issue_id: str,
        key: str,
        project: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeaturesControllerRemoveLinkedIssueV1ErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            feature: Value sent with the request.
            issue_id: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{project}/features/{feature}/integrations/jira/issues/{issue_id}"
            ),
            path_params=[
                param[str]("feature", feature),
                param[str]("issue_id", issue_id),
                param[str]("key", key),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=features_controller_remove_linked_issue_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_remove_v1(
        self,
        feature: str,
        key: str,
        project: str,
        *,
        delete_variables: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeaturesControllerRemoveV1ErrorBody]:
        """Delete a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            delete_variables: Controls whether the feature's associated variables should also be deleted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            query_params=[param[bool | None]("deleteVariables", delete_variables)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=features_controller_remove_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_static_configuration_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationV1ErrorBody]:
        """Update a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict](body),
            decoder=json_decoder[StaticConfiguration],
            error_mapper=features_controller_update_static_configuration_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_status_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusV1ErrorBody]:
        """Update a Feature's status by key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/status"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_status_v1_error_mapper,
            request_options=request_options,
        )

    def features_controller_update_v1(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateV1ErrorBody]:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureDto | UpdateFeatureDtoDict](body),
            decoder=json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_v1_error_mapper,
            request_options=request_options,
        )


class AsyncDeprecatedFeaturesV1WithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def features_controller_create_multiple_v1(
        self, project: str, body: list[str], *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerCreateMultipleV1ErrorBody]:
        """Create multiple new Features

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features/multiple"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[str]](body),
            decoder=async_json_decoder[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]],
            error_mapper=features_controller_create_multiple_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_create_v1(
        self,
        project: str,
        body: CreateFeatureDto | CreateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerCreateV1ErrorBody]:
        """Create a new Feature

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFeatureDto | CreateFeatureDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_create_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_all_linked_issues_v1(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[JiraIssueLink], FeaturesControllerFindAllLinkedIssuesV1ErrorBody]:
        """Send a ``GET`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/integrations/jira/issues"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[list[JiraIssueLink]],
            error_mapper=features_controller_find_all_linked_issues_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_all_v1(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        type_: Type9OrStr | None = None,
        status: Status5OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api], FeaturesControllerFindAllV1ErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            type_: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
                param[Type9OrStr | None]("type", type_),
                param[Status5OrStr | None]("status", status),
            ],
            decoder=async_json_decoder[list[FeatureDevCycleManagementDeprecatedFeaturesV1Api]],
            error_mapper=features_controller_find_all_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_one_v1(
        self, feature: str, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerFindOneV1ErrorBody]:
        """Get a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_find_one_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_find_static_configuration_v1(
        self, feature: str, key: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StaticConfiguration, FeaturesControllerFindStaticConfigurationV1ErrorBody]:
        """Get a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            decoder=async_json_decoder[StaticConfiguration],
            error_mapper=features_controller_find_static_configuration_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_link_issue_v1(
        self,
        feature: str,
        project: str,
        body: LinkJiraIssueDto | LinkJiraIssueDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[JiraIssueLink, FeaturesControllerLinkIssueV1ErrorBody]:
        """Send a ``POST`` request.

        Args:
            feature: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/integrations/jira/issues"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LinkJiraIssueDto | LinkJiraIssueDtoDict](body),
            decoder=async_json_decoder[JiraIssueLink],
            error_mapper=features_controller_link_issue_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_remove_linked_issue_v1(
        self,
        feature: str,
        issue_id: str,
        key: str,
        project: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeaturesControllerRemoveLinkedIssueV1ErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            feature: Value sent with the request.
            issue_id: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v1/projects/{project}/features/{feature}/integrations/jira/issues/{issue_id}"
            ),
            path_params=[
                param[str]("feature", feature),
                param[str]("issue_id", issue_id),
                param[str]("key", key),
                param[str]("project", project),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=features_controller_remove_linked_issue_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_remove_v1(
        self,
        feature: str,
        key: str,
        project: str,
        *,
        delete_variables: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeaturesControllerRemoveV1ErrorBody]:
        """Delete a Feature by ID or key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            delete_variables: Controls whether the feature's associated variables should also be deleted
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            query_params=[param[bool | None]("deleteVariables", delete_variables)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=features_controller_remove_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_static_configuration_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StaticConfiguration, FeaturesControllerUpdateStaticConfigurationV1ErrorBody]:
        """Update a completed Feature's static configuration

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/static-configuration"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateStaticConfigurationDto | UpdateStaticConfigurationDtoDict](body),
            decoder=async_json_decoder[StaticConfiguration],
            error_mapper=features_controller_update_static_configuration_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_status_v1(
        self,
        feature: str,
        key: str,
        project: str,
        body: UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateStatusV1ErrorBody]:
        """Update a Feature's status by key

        Args:
            feature: Value sent with the request.
            key: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}/status"),
            path_params=[param[str]("feature", feature), param[str]("key", key), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureStatusDto | UpdateFeatureStatusDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_status_v1_error_mapper,
            request_options=request_options,
        )

    async def features_controller_update_v1(
        self,
        feature: str,
        project: str,
        body: UpdateFeatureDto | UpdateFeatureDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureDevCycleManagementDeprecatedFeaturesV1Api, FeaturesControllerUpdateV1ErrorBody]:
        """Update a Feature by ID or key

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/features/{feature}"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateFeatureDto | UpdateFeatureDtoDict](body),
            decoder=async_json_decoder[FeatureDevCycleManagementDeprecatedFeaturesV1Api],
            error_mapper=features_controller_update_v1_error_mapper,
            request_options=request_options,
        )
