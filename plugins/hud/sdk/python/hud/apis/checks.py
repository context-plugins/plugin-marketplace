from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_team_qc_pipeline_v2_checks_pipelines_post_error import (
    CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody,
    create_team_qc_pipeline_v2_checks_pipelines_post_error_mapper,
)
from ..errors.list_platform_check_runs_v2_checks_runs_get_error import (
    ListPlatformCheckRunsV2ChecksRunsGetErrorBody,
    list_platform_check_runs_v2_checks_runs_get_error_mapper,
)
from ..errors.list_platform_checks_v2_checks_get_error import (
    ListPlatformChecksV2ChecksGetErrorBody,
    list_platform_checks_v2_checks_get_error_mapper,
)
from ..errors.list_team_qc_pipelines_v2_checks_pipelines_get_error import (
    ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody,
    list_team_qc_pipelines_v2_checks_pipelines_get_error_mapper,
)
from ..errors.run_platform_check_v2_checks_check_key_runs_post_error import (
    RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody,
    run_platform_check_v2_checks_check_key_runs_post_error_mapper,
)
from ..models.check_definition_response import CheckDefinitionResponse
from ..models.check_run_request import CheckRunRequest, CheckRunRequestDict
from ..models.check_run_response import CheckRunResponse
from ..models.enums.check_subject_type import CheckSubjectTypeOrStr
from ..models.qc_pipeline_create_request import QcPipelineCreateRequest, QcPipelineCreateRequestDict
from ..models.qc_pipeline_registration_response import QcPipelineRegistrationResponse
from ..server.server import Server


class Checks:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ChecksWithRawResponse(client, server)

    def create_team_qc_pipeline_v2_checks_pipelines_post(
        self,
        body: QcPipelineCreateRequest | QcPipelineCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QcPipelineRegistrationResponse:
        """Register a team environment scenario as a private DataVendor QC pipeline.

        Args:
            body: The request body.
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
            self._with_raw_response.create_team_qc_pipeline_v2_checks_pipelines_post(
                body, request_options=request_options
            ),
        )

    def list_platform_check_runs_v2_checks_runs_get(
        self,
        subject_type: CheckSubjectTypeOrStr,
        subject_id: UUID,
        *,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CheckRunResponse]:
        """List recent check attempts for one authorized resource.

        Args:
            subject_type: Value sent with the request.
            subject_id: Value sent with the request.
            limit: Value sent with the request.
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
            self._with_raw_response.list_platform_check_runs_v2_checks_runs_get(
                subject_type, subject_id, limit=limit, request_options=request_options
            ),
        )

    def list_platform_checks_v2_checks_get(
        self, *, subject_type: CheckSubjectTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> list[CheckDefinitionResponse]:
        """List available checks and their supported resource types.

        Args:
            subject_type: Value sent with the request.
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
            self._with_raw_response.list_platform_checks_v2_checks_get(
                subject_type=subject_type, request_options=request_options
            ),
        )

    def list_team_qc_pipelines_v2_checks_pipelines_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[QcPipelineRegistrationResponse]:
        """List QC pipelines registered by the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_team_qc_pipelines_v2_checks_pipelines_get(request_options=request_options)
        )

    def run_platform_check_v2_checks_check_key_runs_post(
        self,
        check_key: str,
        body: CheckRunRequest | CheckRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CheckRunResponse:
        """Run one check against an authorized resource snapshot.

        Args:
            check_key: Value sent with the request.
            body: The request body.
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
            self._with_raw_response.run_platform_check_v2_checks_check_key_runs_post(
                check_key, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ChecksWithRawResponse:
        return self._with_raw_response


class AsyncChecks:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncChecksWithRawResponse(client, server)

    async def create_team_qc_pipeline_v2_checks_pipelines_post(
        self,
        body: QcPipelineCreateRequest | QcPipelineCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QcPipelineRegistrationResponse:
        """Register a team environment scenario as a private DataVendor QC pipeline.

        Args:
            body: The request body.
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
            await self._with_raw_response.create_team_qc_pipeline_v2_checks_pipelines_post(
                body, request_options=request_options
            ),
        )

    async def list_platform_check_runs_v2_checks_runs_get(
        self,
        subject_type: CheckSubjectTypeOrStr,
        subject_id: UUID,
        *,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CheckRunResponse]:
        """List recent check attempts for one authorized resource.

        Args:
            subject_type: Value sent with the request.
            subject_id: Value sent with the request.
            limit: Value sent with the request.
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
            await self._with_raw_response.list_platform_check_runs_v2_checks_runs_get(
                subject_type, subject_id, limit=limit, request_options=request_options
            ),
        )

    async def list_platform_checks_v2_checks_get(
        self,
        *,
        subject_type: CheckSubjectTypeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CheckDefinitionResponse]:
        """List available checks and their supported resource types.

        Args:
            subject_type: Value sent with the request.
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
            await self._with_raw_response.list_platform_checks_v2_checks_get(
                subject_type=subject_type, request_options=request_options
            ),
        )

    async def list_team_qc_pipelines_v2_checks_pipelines_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[QcPipelineRegistrationResponse]:
        """List QC pipelines registered by the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Rate limit exceeded; wait at least Retry-After
                seconds The server is at capacity; retry after Retry-After seconds ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_team_qc_pipelines_v2_checks_pipelines_get(
                request_options=request_options
            ),
        )

    async def run_platform_check_v2_checks_check_key_runs_post(
        self,
        check_key: str,
        body: CheckRunRequest | CheckRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CheckRunResponse:
        """Run one check against an authorized resource snapshot.

        Args:
            check_key: Value sent with the request.
            body: The request body.
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
            await self._with_raw_response.run_platform_check_v2_checks_check_key_runs_post(
                check_key, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChecksWithRawResponse:
        return self._with_raw_response


class ChecksWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_team_qc_pipeline_v2_checks_pipelines_post(
        self,
        body: QcPipelineCreateRequest | QcPipelineCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QcPipelineRegistrationResponse, CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody]:
        """Register a team environment scenario as a private DataVendor QC pipeline.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/checks/pipelines"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QcPipelineCreateRequest | QcPipelineCreateRequestDict](body),
            decoder=json_decoder[QcPipelineRegistrationResponse],
            error_mapper=create_team_qc_pipeline_v2_checks_pipelines_post_error_mapper,
            request_options=request_options,
        )

    def list_platform_check_runs_v2_checks_runs_get(
        self,
        subject_type: CheckSubjectTypeOrStr,
        subject_id: UUID,
        *,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CheckRunResponse], ListPlatformCheckRunsV2ChecksRunsGetErrorBody]:
        """List recent check attempts for one authorized resource.

        Args:
            subject_type: Value sent with the request.
            subject_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/checks/runs"),
            query_params=[
                param[CheckSubjectTypeOrStr]("subject_type", subject_type),
                param[UUID]("subject_id", subject_id),
                param[int | None]("limit", limit),
            ],
            decoder=json_decoder[list[CheckRunResponse]],
            error_mapper=list_platform_check_runs_v2_checks_runs_get_error_mapper,
            request_options=request_options,
        )

    def list_platform_checks_v2_checks_get(
        self, *, subject_type: CheckSubjectTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CheckDefinitionResponse], ListPlatformChecksV2ChecksGetErrorBody]:
        """List available checks and their supported resource types.

        Args:
            subject_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/checks"),
            query_params=[param[CheckSubjectTypeOrStr | None]("subject_type", subject_type)],
            decoder=json_decoder[list[CheckDefinitionResponse]],
            error_mapper=list_platform_checks_v2_checks_get_error_mapper,
            request_options=request_options,
        )

    def list_team_qc_pipelines_v2_checks_pipelines_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[QcPipelineRegistrationResponse], ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody]:
        """List QC pipelines registered by the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/checks/pipelines"),
            decoder=json_decoder[list[QcPipelineRegistrationResponse]],
            error_mapper=list_team_qc_pipelines_v2_checks_pipelines_get_error_mapper,
            request_options=request_options,
        )

    def run_platform_check_v2_checks_check_key_runs_post(
        self,
        check_key: str,
        body: CheckRunRequest | CheckRunRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckRunResponse, RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody]:
        """Run one check against an authorized resource snapshot.

        Args:
            check_key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/checks/{check_key}/runs"),
            path_params=[param[str]("check_key", check_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CheckRunRequest | CheckRunRequestDict](body),
            decoder=json_decoder[CheckRunResponse],
            error_mapper=run_platform_check_v2_checks_check_key_runs_post_error_mapper,
            request_options=request_options,
        )


class AsyncChecksWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_team_qc_pipeline_v2_checks_pipelines_post(
        self,
        body: QcPipelineCreateRequest | QcPipelineCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QcPipelineRegistrationResponse, CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody]:
        """Register a team environment scenario as a private DataVendor QC pipeline.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/checks/pipelines"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QcPipelineCreateRequest | QcPipelineCreateRequestDict](body),
            decoder=async_json_decoder[QcPipelineRegistrationResponse],
            error_mapper=create_team_qc_pipeline_v2_checks_pipelines_post_error_mapper,
            request_options=request_options,
        )

    async def list_platform_check_runs_v2_checks_runs_get(
        self,
        subject_type: CheckSubjectTypeOrStr,
        subject_id: UUID,
        *,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CheckRunResponse], ListPlatformCheckRunsV2ChecksRunsGetErrorBody]:
        """List recent check attempts for one authorized resource.

        Args:
            subject_type: Value sent with the request.
            subject_id: Value sent with the request.
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/checks/runs"),
            query_params=[
                param[CheckSubjectTypeOrStr]("subject_type", subject_type),
                param[UUID]("subject_id", subject_id),
                param[int | None]("limit", limit),
            ],
            decoder=async_json_decoder[list[CheckRunResponse]],
            error_mapper=list_platform_check_runs_v2_checks_runs_get_error_mapper,
            request_options=request_options,
        )

    async def list_platform_checks_v2_checks_get(
        self,
        *,
        subject_type: CheckSubjectTypeOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CheckDefinitionResponse], ListPlatformChecksV2ChecksGetErrorBody]:
        """List available checks and their supported resource types.

        Args:
            subject_type: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/checks"),
            query_params=[param[CheckSubjectTypeOrStr | None]("subject_type", subject_type)],
            decoder=async_json_decoder[list[CheckDefinitionResponse]],
            error_mapper=list_platform_checks_v2_checks_get_error_mapper,
            request_options=request_options,
        )

    async def list_team_qc_pipelines_v2_checks_pipelines_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[QcPipelineRegistrationResponse], ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody]:
        """List QC pipelines registered by the caller's team.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/checks/pipelines"),
            decoder=async_json_decoder[list[QcPipelineRegistrationResponse]],
            error_mapper=list_team_qc_pipelines_v2_checks_pipelines_get_error_mapper,
            request_options=request_options,
        )

    async def run_platform_check_v2_checks_check_key_runs_post(
        self,
        check_key: str,
        body: CheckRunRequest | CheckRunRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CheckRunResponse, RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody]:
        """Run one check against an authorized resource snapshot.

        Args:
            check_key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/checks/{check_key}/runs"),
            path_params=[param[str]("check_key", check_key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CheckRunRequest | CheckRunRequestDict](body),
            decoder=async_json_decoder[CheckRunResponse],
            error_mapper=run_platform_check_v2_checks_check_key_runs_post_error_mapper,
            request_options=request_options,
        )
