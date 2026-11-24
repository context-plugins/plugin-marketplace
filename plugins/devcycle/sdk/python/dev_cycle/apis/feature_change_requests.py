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
from ..errors.feature_change_requests_controller_apply_feature_change_request_error import (
    FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody,
    feature_change_requests_controller_apply_feature_change_request_error_mapper,
)
from ..errors.feature_change_requests_controller_cancel_feature_change_request_error import (
    FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody,
    feature_change_requests_controller_cancel_feature_change_request_error_mapper,
)
from ..errors.feature_change_requests_controller_create_change_request_error import (
    FeatureChangeRequestsControllerCreateChangeRequestErrorBody,
    feature_change_requests_controller_create_change_request_error_mapper,
)
from ..errors.feature_change_requests_controller_get_feature_change_request_error import (
    FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody,
    feature_change_requests_controller_get_feature_change_request_error_mapper,
)
from ..errors.feature_change_requests_controller_get_latest_feature_change_request_error import (
    FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody,
    feature_change_requests_controller_get_latest_feature_change_request_error_mapper,
)
from ..errors.feature_change_requests_controller_get_pending_feature_change_requests_error import (
    FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody,
    feature_change_requests_controller_get_pending_feature_change_requests_error_mapper,
)
from ..errors.feature_change_requests_controller_review_feature_change_request_error import (
    FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody,
    feature_change_requests_controller_review_feature_change_request_error_mapper,
)
from ..errors.feature_change_requests_controller_submit_change_request_for_review_error import (
    FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody,
    feature_change_requests_controller_submit_change_request_for_review_error_mapper,
)
from ..models.apply_feature_change_request_dto import ApplyFeatureChangeRequestDto, ApplyFeatureChangeRequestDtoDict
from ..models.create_feature_change_request_dto import CreateFeatureChangeRequestDto, CreateFeatureChangeRequestDtoDict
from ..models.feature_change_request import FeatureChangeRequest
from ..models.review_feature_change_request_dto import ReviewFeatureChangeRequestDto, ReviewFeatureChangeRequestDtoDict
from ..models.submit_feature_change_request_dto import SubmitFeatureChangeRequestDto, SubmitFeatureChangeRequestDtoDict
from ..server.server import Server


class FeatureChangeRequests:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FeatureChangeRequestsWithRawResponse(client, server)

    def feature_change_requests_controller_apply_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_apply_feature_change_request(
                id_, feature, project, body, request_options=request_options
            ),
        )

    def feature_change_requests_controller_cancel_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Cancel a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_cancel_feature_change_request(
                id_, feature, project, request_options=request_options
            ),
        )

    def feature_change_requests_controller_create_change_request(
        self,
        feature: str,
        project: str,
        body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureChangeRequest:
        """Create a new Feature Change Request

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_create_change_request(
                feature, project, body, request_options=request_options
            ),
        )

    def feature_change_requests_controller_get_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FeatureChangeRequest:
        """Get a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_get_feature_change_request(
                id_, feature, project, request_options=request_options
            ),
        )

    def feature_change_requests_controller_get_latest_feature_change_request(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FeatureChangeRequest:
        """Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_get_latest_feature_change_request(
                feature, project, request_options=request_options
            ),
        )

    def feature_change_requests_controller_get_pending_feature_change_requests(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[FeatureChangeRequest]:
        """Get all pending Feature Change Requests for a Feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureChangeRequest]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_get_pending_feature_change_requests(
                feature, project, request_options=request_options
            ),
        )

    def feature_change_requests_controller_review_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict,
        *,
        apply: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            apply: Controls whether the review should also apply the change request to the feature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_review_feature_change_request(
                id_, feature, project, body, apply=apply, request_options=request_options
            ),
        )

    def feature_change_requests_controller_submit_change_request_for_review(
        self,
        id_: str,
        feature: str,
        project: str,
        body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FeatureChangeRequest:
        """Submit a Feature Change Request for Review

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.feature_change_requests_controller_submit_change_request_for_review(
                id_, feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FeatureChangeRequestsWithRawResponse:
        return self._with_raw_response


class AsyncFeatureChangeRequests:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFeatureChangeRequestsWithRawResponse(client, server)

    async def feature_change_requests_controller_apply_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_apply_feature_change_request(
                id_, feature, project, body, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_cancel_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Cancel a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_cancel_feature_change_request(
                id_, feature, project, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_create_change_request(
        self,
        feature: str,
        project: str,
        body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureChangeRequest:
        """Create a new Feature Change Request

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_create_change_request(
                feature, project, body, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_get_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FeatureChangeRequest:
        """Get a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_get_feature_change_request(
                id_, feature, project, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_get_latest_feature_change_request(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FeatureChangeRequest:
        """Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_get_latest_feature_change_request(
                feature, project, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_get_pending_feature_change_requests(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[FeatureChangeRequest]:
        """Get all pending Feature Change Requests for a Feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[FeatureChangeRequest]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_get_pending_feature_change_requests(
                feature, project, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_review_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict,
        *,
        apply: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            apply: Controls whether the review should also apply the change request to the feature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_review_feature_change_request(
                id_, feature, project, body, apply=apply, request_options=request_options
            ),
        )

    async def feature_change_requests_controller_submit_change_request_for_review(
        self,
        id_: str,
        feature: str,
        project: str,
        body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FeatureChangeRequest:
        """Submit a Feature Change Request for Review

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``FeatureChangeRequest`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``NotFoundErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.feature_change_requests_controller_submit_change_request_for_review(
                id_, feature, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFeatureChangeRequestsWithRawResponse:
        return self._with_raw_response


class FeatureChangeRequestsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def feature_change_requests_controller_apply_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody]:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/apply"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=feature_change_requests_controller_apply_feature_change_request_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_cancel_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody]:
        """Cancel a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/cancel"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=feature_change_requests_controller_cancel_feature_change_request_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_create_change_request(
        self,
        feature: str,
        project: str,
        body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerCreateChangeRequestErrorBody]:
        """Create a new Feature Change Request

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict](body),
            decoder=json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_create_change_request_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_get_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody]:
        """Get a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_get_feature_change_request_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_get_latest_feature_change_request(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody]:
        """Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/latest"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_get_latest_feature_change_request_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_get_pending_feature_change_requests(
        self, feature: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[FeatureChangeRequest], FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody]:
        """Get all pending Feature Change Requests for a Feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=json_decoder[list[FeatureChangeRequest]],
            error_mapper=feature_change_requests_controller_get_pending_feature_change_requests_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_review_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict,
        *,
        apply: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody]:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            apply: Controls whether the review should also apply the change request to the feature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/review"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[bool | None]("apply", apply)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=feature_change_requests_controller_review_feature_change_request_error_mapper,
            request_options=request_options,
        )

    def feature_change_requests_controller_submit_change_request_for_review(
        self,
        id_: str,
        feature: str,
        project: str,
        body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody]:
        """Submit a Feature Change Request for Review

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/submit"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict](body),
            decoder=json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_submit_change_request_for_review_error_mapper,
            request_options=request_options,
        )


class AsyncFeatureChangeRequestsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def feature_change_requests_controller_apply_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeatureChangeRequestsControllerApplyFeatureChangeRequestErrorBody]:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/apply"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplyFeatureChangeRequestDto | ApplyFeatureChangeRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=feature_change_requests_controller_apply_feature_change_request_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_cancel_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, FeatureChangeRequestsControllerCancelFeatureChangeRequestErrorBody]:
        """Cancel a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/cancel"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=feature_change_requests_controller_cancel_feature_change_request_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_create_change_request(
        self,
        feature: str,
        project: str,
        body: CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerCreateChangeRequestErrorBody]:
        """Create a new Feature Change Request

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateFeatureChangeRequestDto | CreateFeatureChangeRequestDtoDict](body),
            decoder=async_json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_create_change_request_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_get_feature_change_request(
        self, id_: str, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetFeatureChangeRequestErrorBody]:
        """Get a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_get_feature_change_request_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_get_latest_feature_change_request(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerGetLatestFeatureChangeRequestErrorBody]:
        """Get the latest Feature Change Request for a Feature that is NOT in the 'draft' state

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/latest"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_get_latest_feature_change_request_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_get_pending_feature_change_requests(
        self, feature: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[FeatureChangeRequest], FeatureChangeRequestsControllerGetPendingFeatureChangeRequestsErrorBody]:
        """Get all pending Feature Change Requests for a Feature

        Args:
            feature: A Feature key or ID
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests"),
            path_params=[param[str]("feature", feature), param[str]("project", project)],
            decoder=async_json_decoder[list[FeatureChangeRequest]],
            error_mapper=feature_change_requests_controller_get_pending_feature_change_requests_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_review_feature_change_request(
        self,
        id_: str,
        feature: str,
        project: str,
        body: ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict,
        *,
        apply: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, FeatureChangeRequestsControllerReviewFeatureChangeRequestErrorBody]:
        """Update a Feature Change Request by ID

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            apply: Controls whether the review should also apply the change request to the feature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/review"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            query_params=[param[bool | None]("apply", apply)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReviewFeatureChangeRequestDto | ReviewFeatureChangeRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=feature_change_requests_controller_review_feature_change_request_error_mapper,
            request_options=request_options,
        )

    async def feature_change_requests_controller_submit_change_request_for_review(
        self,
        id_: str,
        feature: str,
        project: str,
        body: SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FeatureChangeRequest, FeatureChangeRequestsControllerSubmitChangeRequestForReviewErrorBody]:
        """Submit a Feature Change Request for Review

        Args:
            id_: Value sent with the request.
            feature: A Feature key or ID
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{project}/features/{feature}/change-requests/{id}/submit"),
            path_params=[param[str]("id", id_), param[str]("feature", feature), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SubmitFeatureChangeRequestDto | SubmitFeatureChangeRequestDtoDict](body),
            decoder=async_json_decoder[FeatureChangeRequest],
            error_mapper=feature_change_requests_controller_submit_change_request_for_review_error_mapper,
            request_options=request_options,
        )
