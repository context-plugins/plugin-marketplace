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
from ..errors.create_process_error import CreateProcessErrorBody, create_process_error_mapper
from ..errors.delete_process_error import DeleteProcessErrorBody, delete_process_error_mapper
from ..errors.get_process_error import GetProcessErrorBody, get_process_error_mapper
from ..errors.get_process_schedules_error import GetProcessSchedulesErrorBody, get_process_schedules_error_mapper
from ..errors.query_processes_error import QueryProcessesErrorBody, query_processes_error_mapper
from ..errors.update_process_error import UpdateProcessErrorBody, update_process_error_mapper
from ..errors.update_process_schedules_error import (
    UpdateProcessSchedulesErrorBody,
    update_process_schedules_error_mapper,
)
from ..models.process import Process
from ..models.process_input import ProcessInput, ProcessInputDict
from ..models.process_query_result import ProcessQueryResult
from ..models.process_schedules import ProcessSchedules, ProcessSchedulesDict
from ..models.query_request import QueryRequest, QueryRequestDict
from ..server.server import Server


class Processes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProcessesWithRawResponse(client, server, auth)

    def create_process(
        self, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Process:
        """Creates a new integration process in the Boomi platform. The process definition is provided in the request
        body as XML or JSON.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created process object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_process(body, request_options=request_options))

    def delete_process(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes an integration process from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_process(id_, request_options=request_options))

    def get_process(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Process:
        """Retrieves the details of a specific integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The process object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_process(id_, request_options=request_options))

    def get_process_schedules(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProcessSchedules:
        """Retrieves the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The process schedule configuration.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_process_schedules(id_, request_options=request_options))

    def query_processes(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProcessQueryResult:
        """Returns a list of integration processes matching the specified query filter criteria. Supports filtering by
        folder ID, process name, and other properties.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching process objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.query_processes(body, request_options=request_options))

    def update_process(
        self, id_: str, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Process:
        """Updates an existing integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated process object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_process(id_, body, request_options=request_options))

    def update_process_schedules(
        self,
        id_: str,
        body: ProcessSchedules | ProcessSchedulesDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProcessSchedules:
        """Updates the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated process schedule configuration.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_process_schedules(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProcessesWithRawResponse:
        return self._with_raw_response


class AsyncProcesses:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProcessesWithRawResponse(client, server, auth)

    async def create_process(
        self, body: ProcessInput | ProcessInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Process:
        """Creates a new integration process in the Boomi platform. The process definition is provided in the request
        body as XML or JSON.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created process object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_process(body, request_options=request_options))

    async def delete_process(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently deletes an integration process from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_process(id_, request_options=request_options))

    async def get_process(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Process:
        """Retrieves the details of a specific integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The process object.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_process(id_, request_options=request_options))

    async def get_process_schedules(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProcessSchedules:
        """Retrieves the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The process schedule configuration.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The requested resource was not found. ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_process_schedules(id_, request_options=request_options))

    async def query_processes(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProcessQueryResult:
        """Returns a list of integration processes matching the specified query filter criteria. Supports filtering by
        folder ID, process name, and other properties.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching process objects.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.query_processes(body, request_options=request_options))

    async def update_process(
        self,
        id_: str,
        body: ProcessInput | ProcessInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Process:
        """Updates an existing integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated process object.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_process(id_, body, request_options=request_options))

    async def update_process_schedules(
        self,
        id_: str,
        body: ProcessSchedules | ProcessSchedulesDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProcessSchedules:
        """Updates the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated process schedule configuration.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. The requested resource was not found. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_process_schedules(id_, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncProcessesWithRawResponse:
        return self._with_raw_response


class ProcessesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_process(
        self, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Process, CreateProcessErrorBody]:
        """Creates a new integration process in the Boomi platform. The process definition is provided in the request
        body as XML or JSON.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Process"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProcessInput | ProcessInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Process],
            error_mapper=create_process_error_mapper,
            request_options=request_options,
        )

    def delete_process(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProcessErrorBody]:
        """Permanently deletes an integration process from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/Process/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=delete_process_error_mapper,
            request_options=request_options,
        )

    def get_process(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Process, GetProcessErrorBody]:
        """Retrieves the details of a specific integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Process/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Process],
            error_mapper=get_process_error_mapper,
            request_options=request_options,
        )

    def get_process_schedules(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProcessSchedules, GetProcessSchedulesErrorBody]:
        """Retrieves the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ProcessSchedules/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[ProcessSchedules],
            error_mapper=get_process_schedules_error_mapper,
            request_options=request_options,
        )

    def query_processes(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProcessQueryResult, QueryProcessesErrorBody]:
        """Returns a list of integration processes matching the specified query filter criteria. Supports filtering by
        folder ID, process name, and other properties.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Process/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[ProcessQueryResult],
            error_mapper=query_processes_error_mapper,
            request_options=request_options,
        )

    def update_process(
        self, id_: str, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Process, UpdateProcessErrorBody]:
        """Updates an existing integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Process/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProcessInput | ProcessInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Process],
            error_mapper=update_process_error_mapper,
            request_options=request_options,
        )

    def update_process_schedules(
        self,
        id_: str,
        body: ProcessSchedules | ProcessSchedulesDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProcessSchedules, UpdateProcessSchedulesErrorBody]:
        """Updates the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ProcessSchedules/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProcessSchedules | ProcessSchedulesDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[ProcessSchedules],
            error_mapper=update_process_schedules_error_mapper,
            request_options=request_options,
        )


class AsyncProcessesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_process(
        self, body: ProcessInput | ProcessInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Process, CreateProcessErrorBody]:
        """Creates a new integration process in the Boomi platform. The process definition is provided in the request
        body as XML or JSON.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Process"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProcessInput | ProcessInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Process],
            error_mapper=create_process_error_mapper,
            request_options=request_options,
        )

    async def delete_process(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteProcessErrorBody]:
        """Permanently deletes an integration process from the Boomi platform.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/Process/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=delete_process_error_mapper,
            request_options=request_options,
        )

    async def get_process(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Process, GetProcessErrorBody]:
        """Retrieves the details of a specific integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Process/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Process],
            error_mapper=get_process_error_mapper,
            request_options=request_options,
        )

    async def get_process_schedules(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProcessSchedules, GetProcessSchedulesErrorBody]:
        """Retrieves the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/ProcessSchedules/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[ProcessSchedules],
            error_mapper=get_process_schedules_error_mapper,
            request_options=request_options,
        )

    async def query_processes(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProcessQueryResult, QueryProcessesErrorBody]:
        """Returns a list of integration processes matching the specified query filter criteria. Supports filtering by
        folder ID, process name, and other properties.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Process/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[ProcessQueryResult],
            error_mapper=query_processes_error_mapper,
            request_options=request_options,
        )

    async def update_process(
        self,
        id_: str,
        body: ProcessInput | ProcessInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Process, UpdateProcessErrorBody]:
        """Updates an existing integration process by its ID.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Process/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProcessInput | ProcessInputDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Process],
            error_mapper=update_process_error_mapper,
            request_options=request_options,
        )

    async def update_process_schedules(
        self,
        id_: str,
        body: ProcessSchedules | ProcessSchedulesDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProcessSchedules, UpdateProcessSchedulesErrorBody]:
        """Updates the scheduling configuration for a specific integration process.

        Args:
            id_: Unique identifier of the platform object.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ProcessSchedules/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProcessSchedules | ProcessSchedulesDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[ProcessSchedules],
            error_mapper=update_process_schedules_error_mapper,
            request_options=request_options,
        )
