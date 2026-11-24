from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_job_error import GetJobErrorBody, get_job_error_mapper
from ..errors.list_jobs_error import ListJobsErrorBody, list_jobs_error_mapper
from ..errors.start_jobs_error import StartJobsErrorBody, start_jobs_error_mapper
from ..errors.stop_job_error import StopJobErrorBody, stop_job_error_mapper
from ..models.job import Job
from ..models.o_data_job_collection import ODataJobCollection
from ..models.start_jobs_request import StartJobsRequest, StartJobsRequestDict
from ..models.stop_job_request import StopJobRequest, StopJobRequestDict
from ..server.server import Server


class Jobs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = JobsWithRawResponse(client, server, auth)

    def get_job(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Job:
        """Retrieves a single job by its unique integer identifier. Returns full job details including state, start and
        end times, robot information, and associated process.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested job

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_job(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def list_jobs(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataJobCollection:
        """Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby,
        $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes
        by robots.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            select: Comma-separated list of property names to include in the response
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of jobs matching the query criteria

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_jobs(
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                select=select,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    def start_jobs(
        self,
        body: StartJobsRequest | StartJobsRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataJobCollection:
        """Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot
        allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target
        folder. Returns details of the created jobs.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Jobs were successfully created and started

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.start_jobs(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def stop_job(
        self,
        body: StopJobRequest | StopJobRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish)
        or Kill (forcefully terminates the job immediately). Requires the job ID.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stop signal sent successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.stop_job(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> JobsWithRawResponse:
        return self._with_raw_response


class AsyncJobs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncJobsWithRawResponse(client, server, auth)

    async def get_job(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Job:
        """Retrieves a single job by its unique integer identifier. Returns full job details including state, start and
        end times, robot information, and associated process.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The requested job

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_job(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def list_jobs(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataJobCollection:
        """Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby,
        $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes
        by robots.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            select: Comma-separated list of property names to include in the response
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of jobs matching the query criteria

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials The authenticated user does not have permission to perform this action ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_jobs(
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                select=select,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    async def start_jobs(
        self,
        body: StartJobsRequest | StartJobsRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataJobCollection:
        """Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot
        allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target
        folder. Returns details of the created jobs.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Jobs were successfully created and started

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.start_jobs(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def stop_job(
        self,
        body: StopJobRequest | StopJobRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish)
        or Kill (forcefully terminates the job immediately). Requires the job ID.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stop signal sent successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.stop_job(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncJobsWithRawResponse:
        return self._with_raw_response


class JobsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_job(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Job, GetJobErrorBody]:
        """Retrieves a single job by its unique integer identifier. Returns full job details including state, start and
        end times, robot information, and associated process.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Jobs({key})"),
            path_params=[param[int]("key", key)],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Job],
            error_mapper=get_job_error_mapper,
            request_options=request_options,
        )

    def list_jobs(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataJobCollection, ListJobsErrorBody]:
        """Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby,
        $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes
        by robots.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            select: Comma-separated list of property names to include in the response
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Jobs"),
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$select", select),
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataJobCollection],
            error_mapper=list_jobs_error_mapper,
            request_options=request_options,
        )

    def start_jobs(
        self,
        body: StartJobsRequest | StartJobsRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataJobCollection, StartJobsErrorBody]:
        """Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot
        allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target
        folder. Returns details of the created jobs.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[StartJobsRequest | StartJobsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataJobCollection],
            error_mapper=start_jobs_error_mapper,
            request_options=request_options,
        )

    def stop_job(
        self,
        body: StopJobRequest | StopJobRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopJobErrorBody]:
        """Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish)
        or Kill (forcefully terminates the job immediately). Requires the job ID.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Jobs/UiPath.Server.Configuration.OData.StopJob"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[StopJobRequest | StopJobRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=stop_job_error_mapper,
            request_options=request_options,
        )


class AsyncJobsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_job(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Job, GetJobErrorBody]:
        """Retrieves a single job by its unique integer identifier. Returns full job details including state, start and
        end times, robot information, and associated process.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Jobs({key})"),
            path_params=[param[int]("key", key)],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Job],
            error_mapper=get_job_error_mapper,
            request_options=request_options,
        )

    async def list_jobs(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        select: str | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataJobCollection, ListJobsErrorBody]:
        """Retrieves a list of jobs in the current folder. Supports OData query options including $filter, $orderby,
        $top, $skip, and $select to control the result set. Jobs represent individual executions of automation processes
        by robots.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            select: Comma-separated list of property names to include in the response
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Jobs"),
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$select", select),
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataJobCollection],
            error_mapper=list_jobs_error_mapper,
            request_options=request_options,
        )

    async def start_jobs(
        self,
        body: StartJobsRequest | StartJobsRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataJobCollection, StartJobsErrorBody]:
        """Starts one or more automation jobs for a specified process. Allows specifying the strategy for robot
        allocation (e.g., ModernJobsCount, All, RobotIds), input arguments for the process, job priority, and the target
        folder. Returns details of the created jobs.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[StartJobsRequest | StartJobsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataJobCollection],
            error_mapper=start_jobs_error_mapper,
            request_options=request_options,
        )

    async def stop_job(
        self,
        body: StopJobRequest | StopJobRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, StopJobErrorBody]:
        """Sends a stop signal to a running job. The strategy can be SoftStop (waits for the current activity to finish)
        or Kill (forcefully terminates the job immediately). Requires the job ID.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Jobs/UiPath.Server.Configuration.OData.StopJob"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[StopJobRequest | StopJobRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=stop_job_error_mapper,
            request_options=request_options,
        )
