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
from ..errors.create_objective_error import CreateObjectiveErrorBody, create_objective_error_mapper
from ..errors.create_objective_health_error import CreateObjectiveHealthErrorBody, create_objective_health_error_mapper
from ..errors.delete_objective_error import DeleteObjectiveErrorBody, delete_objective_error_mapper
from ..errors.get_objective_error import GetObjectiveErrorBody, get_objective_error_mapper
from ..errors.get_objective_health_error import GetObjectiveHealthErrorBody, get_objective_health_error_mapper
from ..errors.list_objective_epics_error import ListObjectiveEpicsErrorBody, list_objective_epics_error_mapper
from ..errors.list_objective_healths_error import ListObjectiveHealthsErrorBody, list_objective_healths_error_mapper
from ..errors.list_objectives_error import ListObjectivesErrorBody, list_objectives_error_mapper
from ..errors.update_objective_error import UpdateObjectiveErrorBody, update_objective_error_mapper
from ..models.create_objective import CreateObjective, CreateObjectiveDict
from ..models.create_objective_health import CreateObjectiveHealth, CreateObjectiveHealthDict
from ..models.epic_slim import EpicSlim
from ..models.health import Health
from ..models.objective import Objective
from ..models.update_objective import UpdateObjective, UpdateObjectiveDict
from ..server.server import Server


class Objectives:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ObjectivesWithRawResponse(client, server, auth)

    def create_objective(
        self, body: CreateObjective | CreateObjectiveDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Objective:
        """Create Objective allows you to create a new Objective in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(self._with_raw_response.create_objective(body, request_options=request_options))

    def create_objective_health(
        self,
        objective_public_id: int,
        body: CreateObjectiveHealth | CreateObjectiveHealthDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Health:
        """Create a new health status for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.create_objective_health(objective_public_id, body, request_options=request_options)
        )

    def delete_objective(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Delete Objective can be used to delete any Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_objective(objective_public_id, request_options=request_options))

    def get_objective(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Objective:
        """Get Objective returns information about a chosen Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_objective(objective_public_id, request_options=request_options))

    def get_objective_health(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Health:
        """Get the current health for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_objective_health(objective_public_id, request_options=request_options)
        )

    def list_objective_epics(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """List all of the Epics within the Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_objective_epics(objective_public_id, request_options=request_options)
        )

    def list_objective_healths(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Health]:
        """List the history of health statuses for the specified Objective, most recent first.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_objective_healths(objective_public_id, request_options=request_options)
        )

    def list_objectives(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Objective]:
        """List Objectives returns a list of all Objectives and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_objectives(request_options=request_options))

    def update_objective(
        self,
        objective_public_id: int,
        body: UpdateObjective | UpdateObjectiveDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Objective:
        """Update Objective can be used to update Objective properties.

        Args:
            objective_public_id: The ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_objective(objective_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ObjectivesWithRawResponse:
        return self._with_raw_response


class AsyncObjectives:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncObjectivesWithRawResponse(client, server, auth)

    async def create_objective(
        self, body: CreateObjective | CreateObjectiveDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Objective:
        """Create Objective allows you to create a new Objective in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(await self._with_raw_response.create_objective(body, request_options=request_options))

    async def create_objective_health(
        self,
        objective_public_id: int,
        body: CreateObjectiveHealth | CreateObjectiveHealthDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Health:
        """Create a new health status for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.create_objective_health(
                objective_public_id, body, request_options=request_options
            ),
        )

    async def delete_objective(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Objective can be used to delete any Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_objective(objective_public_id, request_options=request_options)
        )

    async def get_objective(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Objective:
        """Get Objective returns information about a chosen Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_objective(objective_public_id, request_options=request_options))

    async def get_objective_health(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Health:
        """Get the current health for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_objective_health(objective_public_id, request_options=request_options)
        )

    async def list_objective_epics(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """List all of the Epics within the Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_objective_epics(objective_public_id, request_options=request_options)
        )

    async def list_objective_healths(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Health]:
        """List the history of health statuses for the specified Objective, most recent first.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_objective_healths(objective_public_id, request_options=request_options)
        )

    async def list_objectives(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Objective]:
        """List Objectives returns a list of all Objectives and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_objectives(request_options=request_options))

    async def update_objective(
        self,
        objective_public_id: int,
        body: UpdateObjective | UpdateObjectiveDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Objective:
        """Update Objective can be used to update Objective properties.

        Args:
            objective_public_id: The ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_objective(objective_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncObjectivesWithRawResponse:
        return self._with_raw_response


class ObjectivesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_objective(
        self, body: CreateObjective | CreateObjectiveDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Objective, CreateObjectiveErrorBody]:
        """Create Objective allows you to create a new Objective in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/objectives"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateObjective | CreateObjectiveDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Objective],
            error_mapper=create_objective_error_mapper,
            request_options=request_options,
        )

    def create_objective_health(
        self,
        objective_public_id: int,
        body: CreateObjectiveHealth | CreateObjectiveHealthDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Health, CreateObjectiveHealthErrorBody]:
        """Create a new health status for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/health"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateObjectiveHealth | CreateObjectiveHealthDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Health],
            error_mapper=create_objective_health_error_mapper,
            request_options=request_options,
        )

    def delete_objective(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteObjectiveErrorBody]:
        """Delete Objective can be used to delete any Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_objective_error_mapper,
            request_options=request_options,
        )

    def get_objective(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Objective, GetObjectiveErrorBody]:
        """Get Objective returns information about a chosen Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Objective],
            error_mapper=get_objective_error_mapper,
            request_options=request_options,
        )

    def get_objective_health(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetObjectiveHealthErrorBody]:
        """Get the current health for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/health"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Health],
            error_mapper=get_objective_health_error_mapper,
            request_options=request_options,
        )

    def list_objective_epics(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListObjectiveEpicsErrorBody]:
        """List all of the Epics within the Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/epics"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[EpicSlim]],
            error_mapper=list_objective_epics_error_mapper,
            request_options=request_options,
        )

    def list_objective_healths(
        self, objective_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Health], ListObjectiveHealthsErrorBody]:
        """List the history of health statuses for the specified Objective, most recent first.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/health-history"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Health]],
            error_mapper=list_objective_healths_error_mapper,
            request_options=request_options,
        )

    def list_objectives(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Objective], ListObjectivesErrorBody]:
        """List Objectives returns a list of all Objectives and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Objective]],
            error_mapper=list_objectives_error_mapper,
            request_options=request_options,
        )

    def update_objective(
        self,
        objective_public_id: int,
        body: UpdateObjective | UpdateObjectiveDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Objective, UpdateObjectiveErrorBody]:
        """Update Objective can be used to update Objective properties.

        Args:
            objective_public_id: The ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateObjective | UpdateObjectiveDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Objective],
            error_mapper=update_objective_error_mapper,
            request_options=request_options,
        )


class AsyncObjectivesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_objective(
        self, body: CreateObjective | CreateObjectiveDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Objective, CreateObjectiveErrorBody]:
        """Create Objective allows you to create a new Objective in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/objectives"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateObjective | CreateObjectiveDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Objective],
            error_mapper=create_objective_error_mapper,
            request_options=request_options,
        )

    async def create_objective_health(
        self,
        objective_public_id: int,
        body: CreateObjectiveHealth | CreateObjectiveHealthDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Health, CreateObjectiveHealthErrorBody]:
        """Create a new health status for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/health"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateObjectiveHealth | CreateObjectiveHealthDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Health],
            error_mapper=create_objective_health_error_mapper,
            request_options=request_options,
        )

    async def delete_objective(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteObjectiveErrorBody]:
        """Delete Objective can be used to delete any Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_objective_error_mapper,
            request_options=request_options,
        )

    async def get_objective(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Objective, GetObjectiveErrorBody]:
        """Get Objective returns information about a chosen Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Objective],
            error_mapper=get_objective_error_mapper,
            request_options=request_options,
        )

    async def get_objective_health(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetObjectiveHealthErrorBody]:
        """Get the current health for the specified Objective.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/health"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Health],
            error_mapper=get_objective_health_error_mapper,
            request_options=request_options,
        )

    async def list_objective_epics(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListObjectiveEpicsErrorBody]:
        """List all of the Epics within the Objective.

        Args:
            objective_public_id: The ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/epics"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[EpicSlim]],
            error_mapper=list_objective_epics_error_mapper,
            request_options=request_options,
        )

    async def list_objective_healths(
        self, objective_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Health], ListObjectiveHealthsErrorBody]:
        """List the history of health statuses for the specified Objective, most recent first.

        Args:
            objective_public_id: The unique ID of the Objective.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}/health-history"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Health]],
            error_mapper=list_objective_healths_error_mapper,
            request_options=request_options,
        )

    async def list_objectives(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Objective], ListObjectivesErrorBody]:
        """List Objectives returns a list of all Objectives and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/objectives"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Objective]],
            error_mapper=list_objectives_error_mapper,
            request_options=request_options,
        )

    async def update_objective(
        self,
        objective_public_id: int,
        body: UpdateObjective | UpdateObjectiveDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Objective, UpdateObjectiveErrorBody]:
        """Update Objective can be used to update Objective properties.

        Args:
            objective_public_id: The ID of the Objective.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/objectives/{objective-public-id}"),
            path_params=[param[int]("objective-public-id", objective_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateObjective | UpdateObjectiveDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Objective],
            error_mapper=update_objective_error_mapper,
            request_options=request_options,
        )
