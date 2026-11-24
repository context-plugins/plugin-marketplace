from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from typing import Any
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AuthSchemes, Oauth2Scope
from .base_client import DEFAULT_TIMEOUT, BaseGoogleCloudTasksClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AnySchemes,
    ApiKeyQueryScheme,
    ApiResult,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodeTokenSource,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    OAuth2RefreshableScheme,
    RawClient,
    RefreshableTokenSource,
    RequestOptionsOrDict,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    SecuredRawResponse,
    client_secret_basic,
    json_body,
    json_decoder,
    no_auth,
    param,
    unwrap,
)
from .errors.cloudtasks_projects_locations_get_cmek_config_error import (
    CloudtasksProjectsLocationsGetCmekConfigErrorBody,
    cloudtasks_projects_locations_get_cmek_config_error_mapper,
)
from .errors.cloudtasks_projects_locations_get_error import (
    CloudtasksProjectsLocationsGetErrorBody,
    cloudtasks_projects_locations_get_error_mapper,
)
from .errors.cloudtasks_projects_locations_list_error import (
    CloudtasksProjectsLocationsListErrorBody,
    cloudtasks_projects_locations_list_error_mapper,
)
from .errors.cloudtasks_projects_locations_operations_get_error import (
    CloudtasksProjectsLocationsOperationsGetErrorBody,
    cloudtasks_projects_locations_operations_get_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_create_error import (
    CloudtasksProjectsLocationsQueuesCreateErrorBody,
    cloudtasks_projects_locations_queues_create_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_delete_error import (
    CloudtasksProjectsLocationsQueuesDeleteErrorBody,
    cloudtasks_projects_locations_queues_delete_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_get_error import (
    CloudtasksProjectsLocationsQueuesGetErrorBody,
    cloudtasks_projects_locations_queues_get_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_get_iam_policy_error import (
    CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody,
    cloudtasks_projects_locations_queues_get_iam_policy_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_list_error import (
    CloudtasksProjectsLocationsQueuesListErrorBody,
    cloudtasks_projects_locations_queues_list_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_patch_error import (
    CloudtasksProjectsLocationsQueuesPatchErrorBody,
    cloudtasks_projects_locations_queues_patch_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_pause_error import (
    CloudtasksProjectsLocationsQueuesPauseErrorBody,
    cloudtasks_projects_locations_queues_pause_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_purge_error import (
    CloudtasksProjectsLocationsQueuesPurgeErrorBody,
    cloudtasks_projects_locations_queues_purge_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_resume_error import (
    CloudtasksProjectsLocationsQueuesResumeErrorBody,
    cloudtasks_projects_locations_queues_resume_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_set_iam_policy_error import (
    CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody,
    cloudtasks_projects_locations_queues_set_iam_policy_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_batch_create_error import (
    CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody,
    cloudtasks_projects_locations_queues_tasks_batch_create_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_batch_delete_error import (
    CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody,
    cloudtasks_projects_locations_queues_tasks_batch_delete_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_buffer_error import (
    CloudtasksProjectsLocationsQueuesTasksBufferErrorBody,
    cloudtasks_projects_locations_queues_tasks_buffer_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_create_error import (
    CloudtasksProjectsLocationsQueuesTasksCreateErrorBody,
    cloudtasks_projects_locations_queues_tasks_create_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_delete_error import (
    CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody,
    cloudtasks_projects_locations_queues_tasks_delete_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_get_error import (
    CloudtasksProjectsLocationsQueuesTasksGetErrorBody,
    cloudtasks_projects_locations_queues_tasks_get_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_list_error import (
    CloudtasksProjectsLocationsQueuesTasksListErrorBody,
    cloudtasks_projects_locations_queues_tasks_list_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_tasks_run_error import (
    CloudtasksProjectsLocationsQueuesTasksRunErrorBody,
    cloudtasks_projects_locations_queues_tasks_run_error_mapper,
)
from .errors.cloudtasks_projects_locations_queues_test_iam_permissions_error import (
    CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody,
    cloudtasks_projects_locations_queues_test_iam_permissions_error_mapper,
)
from .errors.cloudtasks_projects_locations_update_cmek_config_error import (
    CloudtasksProjectsLocationsUpdateCmekConfigErrorBody,
    cloudtasks_projects_locations_update_cmek_config_error_mapper,
)
from .models.batch_create_tasks_request import BatchCreateTasksRequest, BatchCreateTasksRequestDict
from .models.batch_delete_tasks_request import BatchDeleteTasksRequest, BatchDeleteTasksRequestDict
from .models.buffer_task_request import BufferTaskRequest, BufferTaskRequestDict
from .models.buffer_task_response import BufferTaskResponse
from .models.cmek_config import CmekConfig, CmekConfigDict
from .models.create_task_request import CreateTaskRequest, CreateTaskRequestDict
from .models.enums.response_view2 import ResponseView2OrStr
from .models.get_iam_policy_request import GetIamPolicyRequest, GetIamPolicyRequestDict
from .models.list_locations_response import ListLocationsResponse
from .models.list_queues_response import ListQueuesResponse
from .models.list_tasks_response import ListTasksResponse
from .models.location import Location
from .models.operation import Operation
from .models.policy import Policy
from .models.queue import Queue, QueueDict
from .models.run_task_request import RunTaskRequest, RunTaskRequestDict
from .models.set_iam_policy_request import SetIamPolicyRequest, SetIamPolicyRequestDict
from .models.task import Task
from .models.test_iam_permissions_request import TestIamPermissionsRequest, TestIamPermissionsRequestDict
from .models.test_iam_permissions_response import TestIamPermissionsResponse
from .server.server import Server
from .server.server_config import ServerConfigOrDict


class GoogleCloudTasksClient(BaseGoogleCloudTasksClient[RawClient]):
    def __init__(
        self,
        *,
        server_config: ServerConfigOrDict | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key: str | None = None,
        oauth2: AuthorizationCodeCredentialsOrDict[Oauth2Scope] | None = None,
        oauth2_token_source: RefreshableTokenSource[AuthorizationCodeCredentials[Oauth2Scope]] | None = None,
    ) -> None:
        super().__init__(
            server_config=server_config, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "GoogleCloudTasksClient/v2 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v2"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(
            api_key=ApiKeyQueryScheme("key", api_key) if api_key is not None else no_auth,
            oauth2=(
                OAuth2RefreshableScheme(
                    credentials=AuthorizationCodeCredentials[Oauth2Scope].coerce(oauth2),
                    source=(
                        oauth2_token_source
                        if oauth2_token_source is not None
                        else AuthorizationCodeTokenSource[Oauth2Scope](
                            client=self._raw_client,
                            authorization_url=self._server.auth_server("/auth"),
                            token_url=self._server.access_token_server("/token"),
                            refresh_url=self._server.access_token_server("/token"),
                            placement=client_secret_basic,
                        )
                    ),
                )
                if oauth2 is not None
                else no_auth
            ),
        )

    @cached_property
    def with_raw_response(self) -> ApiWithRawResponse:
        return ApiWithRawResponse(self._raw_client, self._server, self._auth)

    def cloudtasks_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Location:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_get(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_get_cmek_config(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CmekConfig:
        """Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks location. By
        default there is no ``kms_key`` configured.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_get_cmek_config(
                projects_id, locations_id, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListLocationsResponse:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_list(
                projects_id,
                extra_location_types=extra_location_types,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def cloudtasks_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_operations_get(
                projects_id, locations_id, operations_id, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Queue | QueueDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Queue:
        """Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task
        is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this
        method may have unintended side effects if you are using an App Engine ``queue.yaml`` or ``queue.xml`` file to
        manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_create(
                projects_id, locations_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_delete(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue,
        you may be prevented from creating a new queue with the same name as the deleted queue for a tombstone window of
        up to 3 days. During this window, the CreateQueue operation may appear to recreate the queue, but this can be
        misleading. If you attempt to create a queue with the same name as one that is in the tombstone window, run
        GetQueue to confirm that the queue creation was successful. If GetQueue returns 200 response code, your queue
        was successfully created with the name of the previously deleted queue. Otherwise, your queue did not
        successfully recreate. WARNING: Using this method may have unintended side effects if you are using an App
        Engine ``queue.yaml`` or ``queue.xml`` file to manage your queues. Read Overview of Queue Management and
        queue.yaml before using this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_delete(
                projects_id, locations_id, queues_id, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_get(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Queue:
        """Gets a queue.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_get(
                projects_id, locations_id, queues_id, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: GetIamPolicyRequest | GetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have
        a policy set. Authorization requires the following Google IAM permission on the specified resource parent: *
        ``cloudtasks.queues.getIamPolicy``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_get_iam_policy(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListQueuesResponse:
        """Lists queues. Queues are returned in lexicographical order.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: ``filter`` can be used to specify a subset of queues. Any Queue field can be used as a filter and
                several operators as supported. For example: ``<=, <, >=, >, !=, =, :``. The filter syntax is the same
                as described in `Stackdriver's Advanced Logs Filters
                <https://cloud.google.com/logging/docs/view/advanced_filters>`__. Sample filter "state: PAUSED". Note
                that using filters might cause fewer queues than the requested page_size to be returned.
            page_size: Requested page size. The maximum page size is 9800. If unspecified, the page size will be the
                maximum. Fewer queues than requested might be returned, even if more queues exist; use the
                next_page_token in the response to determine if more queues exist.
            page_token: A token identifying the page of results to return. To request the first page results, page_token
                must be empty. To request the next page of results, page_token must be the value of next_page_token
                returned from the previous call to ListQueues method. It is an error to switch the value of the filter
                while iterating through pages.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_list(
                projects_id,
                locations_id,
                filter_=filter_,
                page_size=page_size,
                page_token=page_token,
                request_options=request_options,
            ),
        )

    def cloudtasks_projects_locations_queues_patch(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Queue | QueueDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Queue:
        """Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist.
        Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the
        task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have
        unintended side effects if you are using an App Engine ``queue.yaml`` or ``queue.xml`` file to manage your
        queues. Read Overview of Queue Management and queue.yaml before using this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            update_mask: A mask used to specify which fields of the queue are being updated. If empty, then all fields
                will be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_patch(
                projects_id, locations_id, queues_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_pause(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Queue:
        """Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed
        via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_pause(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_purge(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Queue:
        """Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently
        deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge
        takes effect. A purge is irreversible.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_purge(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_resume(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Queue:
        """Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is
        stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many
        high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the
        500/50/5 pattern described in Managing Cloud Tasks Scaling Risks.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_resume(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Policy:
        """Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not
        check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.
        Authorization requires the following Google IAM permission on the specified resource parent: *
        ``cloudtasks.queues.setIamPolicy``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_set_iam_policy(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_batch_create(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: BatchCreateTasksRequest | BatchCreateTasksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A maximum of 100
        tasks can be created in a single batch.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_batch_create(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_batch_delete(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: BatchDeleteTasksRequest | BatchDeleteTasksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Operation:
        """Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it can still
        succeed for others. The metadata field of google.longrunning.Operation contains details of failed deletions. A
        maximum of 1000 tasks can be deleted in a batch.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_batch_delete(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_buffer(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        task_id: str,
        body: BufferTaskRequest | BufferTaskRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BufferTaskResponse:
        """Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP
        target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID:
        projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an
        automatically generated ID, use the following format:
        projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            task_id: Optional. Task ID for the task being created. If not provided, Cloud Tasks generates an ID for the
                task.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_buffer(
                projects_id, locations_id, queues_id, task_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_create(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: CreateTaskRequest | CreateTaskRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Task:
        """Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask
        command. * The maximum task size is 100KB.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_create(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_delete(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        tasks_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has
        executed successfully or permanently failed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            tasks_id: Resource name segment (tasksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_delete(
                projects_id, locations_id, queues_id, tasks_id, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_get(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        tasks_id: str,
        *,
        response_view: ResponseView2OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Task:
        """Gets a task. After a task is successfully executed or has exhausted its retry attempts, the task is deleted.
        A ``GetTask`` request for a deleted task returns a ``NOT_FOUND`` error.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            tasks_id: Resource name segment (tasksId).
            response_view: The response_view specifies which subset of the Task will be returned. By default
                response_view is BASIC; not all information is retrieved by default because some data, such as payloads,
                might be desirable to return only when needed because of its large size or because of the sensitivity of
                data that it contains. Authorization for FULL requires ``cloudtasks.tasks.fullView`` `Google IAM
                <https://cloud.google.com/iam/>`__ permission on the Task resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_get(
                projects_id,
                locations_id,
                queues_id,
                tasks_id,
                response_view=response_view,
                request_options=request_options,
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_list(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        response_view: ResponseView2OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListTasksResponse:
        """Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations;
        response_view controls the subset of information which is returned. The tasks may be returned in any order. The
        ordering may change at any time.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            page_size: Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist; use
                next_page_token in the response to determine if more tasks exist. The maximum page size is 1000. If
                unspecified, the page size will be the maximum.
            page_token: A token identifying the page of results to return. To request the first page results, page_token
                must be empty. To request the next page of results, page_token must be the value of next_page_token
                returned from the previous call to ListTasks method. The page token is valid for only 2 hours.
            response_view: The response_view specifies which subset of the Task will be returned. By default
                response_view is BASIC; not all information is retrieved by default because some data, such as payloads,
                might be desirable to return only when needed because of its large size or because of the sensitivity of
                data that it contains. Authorization for FULL requires ``cloudtasks.tasks.fullView`` `Google IAM
                <https://cloud.google.com/iam/>`__ permission on the Task resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_list(
                projects_id,
                locations_id,
                queues_id,
                page_size=page_size,
                page_token=page_token,
                response_view=response_view,
                request_options=request_options,
            ),
        )

    def cloudtasks_projects_locations_queues_tasks_run(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        tasks_id: str,
        body: RunTaskRequest | RunTaskRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Task:
        """Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is
        already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual
        debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually
        force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then
        the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called
        plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task
        that has already succeeded or permanently failed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            tasks_id: Resource name segment (tasksId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_tasks_run(
                projects_id, locations_id, queues_id, tasks_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_queues_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TestIamPermissionsResponse:
        """Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty
        set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building
        permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open"
        without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_queues_test_iam_permissions(
                projects_id, locations_id, queues_id, body, request_options=request_options
            ),
        )

    def cloudtasks_projects_locations_update_cmek_config(
        self,
        projects_id: str,
        locations_id: str,
        body: CmekConfig | CmekConfigDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CmekConfig:
        """Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with the Cloud Tasks
        location (Creates if the key does not already exist). All new tasks created in the location will be encrypted
        at-rest with the KMS-key provided in the config.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            update_mask: List of fields to be updated in this request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self.with_raw_response.cloudtasks_projects_locations_update_cmek_config(
                projects_id, locations_id, body, update_mask=update_mask, request_options=request_options
            ),
        )

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


class ApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cloudtasks_projects_locations_get(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Location, CloudtasksProjectsLocationsGetErrorBody]:
        """Gets information about a location.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Location],
            error_mapper=cloudtasks_projects_locations_get_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_get_cmek_config(
        self, projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CmekConfig, CloudtasksProjectsLocationsGetCmekConfigErrorBody]:
        """Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks location. By
        default there is no ``kms_key`` configured.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/cmekConfig"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[CmekConfig],
            error_mapper=cloudtasks_projects_locations_get_cmek_config_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_list(
        self,
        projects_id: str,
        *,
        extra_location_types: list[str] | None = None,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListLocationsResponse, CloudtasksProjectsLocationsListErrorBody]:
        """Lists information about the supported locations for this service. This method lists locations based on the
        resource scope provided in the ListLocationsRequest.name field: * **Global locations**: If ``name`` is empty,
        the method lists the public locations available to all projects. * **Project-specific locations**: If ``name``
        follows the format ``projects/{project}``, the method lists locations visible to that specific project. This
        includes public, private, or other project-specific locations enabled for the project. For gRPC and client
        library implementations, the resource name is passed as the ``name`` field. For direct service calls, the
        resource name is incorporated into the request path based on the specific service implementation and version.

        Args:
            projects_id: Resource name segment (projectsId).
            extra_location_types: Optional. Do not use this field unless explicitly documented otherwise. This is
                primarily for internal usage.
            filter_: A filter to narrow down results to a preferred subset. The filtering language accepts strings like
                ``"displayName=tokyo"``, and is documented in more detail in `AIP-160 <https://google.aip.dev/160>`__.
            page_size: The maximum number of results to return. If not set, the service selects a default.
            page_token: A page token received from the ``next_page_token`` field in the response. Send that page token
                to receive the subsequent page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{projectsId}/locations"),
            path_params=[param[str]("projectsId", projects_id)],
            query_params=[
                param[list[str] | None]("extraLocationTypes", extra_location_types),
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListLocationsResponse],
            error_mapper=cloudtasks_projects_locations_list_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_operations_get(
        self,
        projects_id: str,
        locations_id: str,
        operations_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudtasksProjectsLocationsOperationsGetErrorBody]:
        """Gets the latest state of a long-running operation. Clients can use this method to poll the operation result
        at intervals as recommended by the API service.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            operations_id: Resource name segment (operationsId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("operationsId", operations_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudtasks_projects_locations_operations_get_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_create(
        self,
        projects_id: str,
        locations_id: str,
        body: Queue | QueueDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Queue, CloudtasksProjectsLocationsQueuesCreateErrorBody]:
        """Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task
        is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this
        method may have unintended side effects if you are using an App Engine ``queue.yaml`` or ``queue.xml`` file to
        manage your queues. Read Overview of Queue Management and queue.yaml before using this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/queues"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Queue | QueueDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Queue],
            error_mapper=cloudtasks_projects_locations_queues_create_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_delete(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CloudtasksProjectsLocationsQueuesDeleteErrorBody]:
        """Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue,
        you may be prevented from creating a new queue with the same name as the deleted queue for a tombstone window of
        up to 3 days. During this window, the CreateQueue operation may appear to recreate the queue, but this can be
        misleading. If you attempt to create a queue with the same name as one that is in the tombstone window, run
        GetQueue to confirm that the queue creation was successful. If GetQueue returns 200 response code, your queue
        was successfully created with the name of the previously deleted queue. Otherwise, your queue did not
        successfully recreate. WARNING: Using this method may have unintended side effects if you are using an App
        Engine ``queue.yaml`` or ``queue.xml`` file to manage your queues. Read Overview of Queue Management and
        queue.yaml before using this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=cloudtasks_projects_locations_queues_delete_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_get(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Queue, CloudtasksProjectsLocationsQueuesGetErrorBody]:
        """Gets a queue.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Queue],
            error_mapper=cloudtasks_projects_locations_queues_get_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_get_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: GetIamPolicyRequest | GetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody]:
        """Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have
        a policy set. Authorization requires the following Google IAM permission on the specified resource parent: *
        ``cloudtasks.queues.getIamPolicy``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:getIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetIamPolicyRequest | GetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=cloudtasks_projects_locations_queues_get_iam_policy_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_list(
        self,
        projects_id: str,
        locations_id: str,
        *,
        filter_: str | None = None,
        page_size: int | None = None,
        page_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListQueuesResponse, CloudtasksProjectsLocationsQueuesListErrorBody]:
        """Lists queues. Queues are returned in lexicographical order.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            filter_: ``filter`` can be used to specify a subset of queues. Any Queue field can be used as a filter and
                several operators as supported. For example: ``<=, <, >=, >, !=, =, :``. The filter syntax is the same
                as described in `Stackdriver's Advanced Logs Filters
                <https://cloud.google.com/logging/docs/view/advanced_filters>`__. Sample filter "state: PAUSED". Note
                that using filters might cause fewer queues than the requested page_size to be returned.
            page_size: Requested page size. The maximum page size is 9800. If unspecified, the page size will be the
                maximum. Fewer queues than requested might be returned, even if more queues exist; use the
                next_page_token in the response to determine if more queues exist.
            page_token: A token identifying the page of results to return. To request the first page results, page_token
                must be empty. To request the next page of results, page_token must be the value of next_page_token
                returned from the previous call to ListQueues method. It is an error to switch the value of the filter
                while iterating through pages.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/queues"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[
                param[str | None]("filter", filter_),
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListQueuesResponse],
            error_mapper=cloudtasks_projects_locations_queues_list_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_patch(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Queue | QueueDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Queue, CloudtasksProjectsLocationsQueuesPatchErrorBody]:
        """Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist.
        Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the
        task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have
        unintended side effects if you are using an App Engine ``queue.yaml`` or ``queue.xml`` file to manage your
        queues. Read Overview of Queue Management and queue.yaml before using this method.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            update_mask: A mask used to specify which fields of the queue are being updated. If empty, then all fields
                will be updated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}"),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Queue | QueueDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Queue],
            error_mapper=cloudtasks_projects_locations_queues_patch_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_pause(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Queue, CloudtasksProjectsLocationsQueuesPauseErrorBody]:
        """Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed
        via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:pause"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Queue],
            error_mapper=cloudtasks_projects_locations_queues_pause_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_purge(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Queue, CloudtasksProjectsLocationsQueuesPurgeErrorBody]:
        """Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently
        deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge
        takes effect. A purge is irreversible.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:purge"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Queue],
            error_mapper=cloudtasks_projects_locations_queues_purge_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_resume(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: Any,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Queue, CloudtasksProjectsLocationsQueuesResumeErrorBody]:
        """Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is
        stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many
        high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the
        500/50/5 pattern described in Managing Cloud Tasks Scaling Risks.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:resume"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Queue],
            error_mapper=cloudtasks_projects_locations_queues_resume_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_set_iam_policy(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: SetIamPolicyRequest | SetIamPolicyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Policy, CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody]:
        """Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not
        check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console.
        Authorization requires the following Google IAM permission on the specified resource parent: *
        ``cloudtasks.queues.setIamPolicy``

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:setIamPolicy"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SetIamPolicyRequest | SetIamPolicyRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Policy],
            error_mapper=cloudtasks_projects_locations_queues_set_iam_policy_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_batch_create(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: BatchCreateTasksRequest | BatchCreateTasksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody]:
        """Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A maximum of 100
        tasks can be created in a single batch.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchCreate"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchCreateTasksRequest | BatchCreateTasksRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudtasks_projects_locations_queues_tasks_batch_create_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_batch_delete(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: BatchDeleteTasksRequest | BatchDeleteTasksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Operation, CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody]:
        """Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it can still
        succeed for others. The metadata field of google.longrunning.Operation contains details of failed deletions. A
        maximum of 1000 tasks can be deleted in a batch.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchDelete"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchDeleteTasksRequest | BatchDeleteTasksRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Operation],
            error_mapper=cloudtasks_projects_locations_queues_tasks_batch_delete_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_buffer(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        task_id: str,
        body: BufferTaskRequest | BufferTaskRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BufferTaskResponse, CloudtasksProjectsLocationsQueuesTasksBufferErrorBody]:
        """Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP
        target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID:
        projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an
        automatically generated ID, use the following format:
        projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            task_id: Optional. Task ID for the task being created. If not provided, Cloud Tasks generates an ID for the
                task.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{taskId}:buffer"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
                param[str]("taskId", task_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BufferTaskRequest | BufferTaskRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[BufferTaskResponse],
            error_mapper=cloudtasks_projects_locations_queues_tasks_buffer_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_create(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: CreateTaskRequest | CreateTaskRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, CloudtasksProjectsLocationsQueuesTasksCreateErrorBody]:
        """Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask
        command. * The maximum task size is 100KB.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateTaskRequest | CreateTaskRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Task],
            error_mapper=cloudtasks_projects_locations_queues_tasks_create_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_delete(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        tasks_id: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody]:
        """Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has
        executed successfully or permanently failed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            tasks_id: Resource name segment (tasksId).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
                param[str]("tasksId", tasks_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Any],
            error_mapper=cloudtasks_projects_locations_queues_tasks_delete_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_get(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        tasks_id: str,
        *,
        response_view: ResponseView2OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, CloudtasksProjectsLocationsQueuesTasksGetErrorBody]:
        """Gets a task. After a task is successfully executed or has exhausted its retry attempts, the task is deleted.
        A ``GetTask`` request for a deleted task returns a ``NOT_FOUND`` error.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            tasks_id: Resource name segment (tasksId).
            response_view: The response_view specifies which subset of the Task will be returned. By default
                response_view is BASIC; not all information is retrieved by default because some data, such as payloads,
                might be desirable to return only when needed because of its large size or because of the sensitivity of
                data that it contains. Authorization for FULL requires ``cloudtasks.tasks.fullView`` `Google IAM
                <https://cloud.google.com/iam/>`__ permission on the Task resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
                param[str]("tasksId", tasks_id),
            ],
            query_params=[param[ResponseView2OrStr | None]("responseView", response_view)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Task],
            error_mapper=cloudtasks_projects_locations_queues_tasks_get_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_list(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        *,
        page_size: int | None = None,
        page_token: str | None = None,
        response_view: ResponseView2OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListTasksResponse, CloudtasksProjectsLocationsQueuesTasksListErrorBody]:
        """Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations;
        response_view controls the subset of information which is returned. The tasks may be returned in any order. The
        ordering may change at any time.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            page_size: Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist; use
                next_page_token in the response to determine if more tasks exist. The maximum page size is 1000. If
                unspecified, the page size will be the maximum.
            page_token: A token identifying the page of results to return. To request the first page results, page_token
                must be empty. To request the next page of results, page_token must be the value of next_page_token
                returned from the previous call to ListTasks method. The page token is valid for only 2 hours.
            response_view: The response_view specifies which subset of the Task will be returned. By default
                response_view is BASIC; not all information is retrieved by default because some data, such as payloads,
                might be desirable to return only when needed because of its large size or because of the sensitivity of
                data that it contains. Authorization for FULL requires ``cloudtasks.tasks.fullView`` `Google IAM
                <https://cloud.google.com/iam/>`__ permission on the Task resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            query_params=[
                param[int | None]("pageSize", page_size),
                param[str | None]("pageToken", page_token),
                param[ResponseView2OrStr | None]("responseView", response_view),
            ],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[ListTasksResponse],
            error_mapper=cloudtasks_projects_locations_queues_tasks_list_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_tasks_run(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        tasks_id: str,
        body: RunTaskRequest | RunTaskRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Task, CloudtasksProjectsLocationsQueuesTasksRunErrorBody]:
        """Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is
        already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual
        debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually
        force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then
        the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called
        plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task
        that has already succeeded or permanently failed.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            tasks_id: Resource name segment (tasksId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}:run"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
                param[str]("tasksId", tasks_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunTaskRequest | RunTaskRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[Task],
            error_mapper=cloudtasks_projects_locations_queues_tasks_run_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_queues_test_iam_permissions(
        self,
        projects_id: str,
        locations_id: str,
        queues_id: str,
        body: TestIamPermissionsRequest | TestIamPermissionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TestIamPermissionsResponse, CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody]:
        """Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty
        set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building
        permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open"
        without warning.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            queues_id: Resource name segment (queuesId).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:testIamPermissions"
            ),
            path_params=[
                param[str]("projectsId", projects_id),
                param[str]("locationsId", locations_id),
                param[str]("queuesId", queues_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TestIamPermissionsRequest | TestIamPermissionsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[TestIamPermissionsResponse],
            error_mapper=cloudtasks_projects_locations_queues_test_iam_permissions_error_mapper,
            request_options=request_options,
        )

    def cloudtasks_projects_locations_update_cmek_config(
        self,
        projects_id: str,
        locations_id: str,
        body: CmekConfig | CmekConfigDict,
        *,
        update_mask: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CmekConfig, CloudtasksProjectsLocationsUpdateCmekConfigErrorBody]:
        """Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with the Cloud Tasks
        location (Creates if the key does not already exist). All new tasks created in the location will be encrypted
        at-rest with the KMS-key provided in the config.

        Args:
            projects_id: Resource name segment (projectsId).
            locations_id: Resource name segment (locationsId).
            body: The request body.
            update_mask: List of fields to be updated in this request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/projects/{projectsId}/locations/{locationsId}/cmekConfig"),
            path_params=[param[str]("projectsId", projects_id), param[str]("locationsId", locations_id)],
            query_params=[param[str | None]("updateMask", update_mask)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CmekConfig | CmekConfigDict](body),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[CmekConfig],
            error_mapper=cloudtasks_projects_locations_update_cmek_config_error_mapper,
            request_options=request_options,
        )


Client = GoogleCloudTasksClient
