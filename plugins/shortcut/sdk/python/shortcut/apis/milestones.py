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
from ..errors.create_milestone_error import CreateMilestoneErrorBody, create_milestone_error_mapper
from ..errors.delete_milestone_error import DeleteMilestoneErrorBody, delete_milestone_error_mapper
from ..errors.get_milestone_error import GetMilestoneErrorBody, get_milestone_error_mapper
from ..errors.list_milestone_epics_error import ListMilestoneEpicsErrorBody, list_milestone_epics_error_mapper
from ..errors.list_milestones_error import ListMilestonesErrorBody, list_milestones_error_mapper
from ..errors.update_milestone_error import UpdateMilestoneErrorBody, update_milestone_error_mapper
from ..models.create_milestone import CreateMilestone, CreateMilestoneDict
from ..models.epic_slim import EpicSlim
from ..models.milestone import Milestone
from ..models.update_milestone import UpdateMilestone, UpdateMilestoneDict
from ..server.server import Server


class Milestones:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MilestonesWithRawResponse(client, server, auth)

    def create_milestone(
        self, body: CreateMilestone | CreateMilestoneDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Milestone:
        """(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(self._with_raw_response.create_milestone(body, request_options=request_options))

    def delete_milestone(
        self, milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_milestone(milestone_public_id, request_options=request_options))

    def get_milestone(
        self, milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Milestone:
        """(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_milestone(milestone_public_id, request_options=request_options))

    def list_milestone_epics(
        self, milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_milestone_epics(milestone_public_id, request_options=request_options)
        )

    def list_milestones(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Milestone]:
        """(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_milestones(request_options=request_options))

    def update_milestone(
        self,
        milestone_public_id: int,
        body: UpdateMilestone | UpdateMilestoneDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Milestone:
        """(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

        Args:
            milestone_public_id: The ID of the Milestone.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_milestone(milestone_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> MilestonesWithRawResponse:
        return self._with_raw_response


class AsyncMilestones:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMilestonesWithRawResponse(client, server, auth)

    async def create_milestone(
        self, body: CreateMilestone | CreateMilestoneDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Milestone:
        """(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``UnusableEntitlementError |
                RawError``."""
        return unwrap(await self._with_raw_response.create_milestone(body, request_options=request_options))

    async def delete_milestone(
        self, milestone_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_milestone(milestone_public_id, request_options=request_options)
        )

    async def get_milestone(
        self, milestone_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Milestone:
        """(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_milestone(milestone_public_id, request_options=request_options))

    async def list_milestone_epics(
        self, milestone_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_milestone_epics(milestone_public_id, request_options=request_options)
        )

    async def list_milestones(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Milestone]:
        """(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_milestones(request_options=request_options))

    async def update_milestone(
        self,
        milestone_public_id: int,
        body: UpdateMilestone | UpdateMilestoneDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Milestone:
        """(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

        Args:
            milestone_public_id: The ID of the Milestone.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_milestone(milestone_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncMilestonesWithRawResponse:
        return self._with_raw_response


class MilestonesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_milestone(
        self, body: CreateMilestone | CreateMilestoneDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Milestone, CreateMilestoneErrorBody]:
        """(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/milestones"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMilestone | CreateMilestoneDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Milestone],
            error_mapper=create_milestone_error_mapper,
            request_options=request_options,
        )

    def delete_milestone(
        self, milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMilestoneErrorBody]:
        """(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_milestone_error_mapper,
            request_options=request_options,
        )

    def get_milestone(
        self, milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Milestone, GetMilestoneErrorBody]:
        """(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Milestone],
            error_mapper=get_milestone_error_mapper,
            request_options=request_options,
        )

    def list_milestone_epics(
        self, milestone_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListMilestoneEpicsErrorBody]:
        """(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}/epics"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[EpicSlim]],
            error_mapper=list_milestone_epics_error_mapper,
            request_options=request_options,
        )

    def list_milestones(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Milestone], ListMilestonesErrorBody]:
        """(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/milestones"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Milestone]],
            error_mapper=list_milestones_error_mapper,
            request_options=request_options,
        )

    def update_milestone(
        self,
        milestone_public_id: int,
        body: UpdateMilestone | UpdateMilestoneDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Milestone, UpdateMilestoneErrorBody]:
        """(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

        Args:
            milestone_public_id: The ID of the Milestone.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateMilestone | UpdateMilestoneDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Milestone],
            error_mapper=update_milestone_error_mapper,
            request_options=request_options,
        )


class AsyncMilestonesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_milestone(
        self, body: CreateMilestone | CreateMilestoneDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Milestone, CreateMilestoneErrorBody]:
        """(Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/milestones"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateMilestone | CreateMilestoneDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Milestone],
            error_mapper=create_milestone_error_mapper,
            request_options=request_options,
        )

    async def delete_milestone(
        self, milestone_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteMilestoneErrorBody]:
        """(Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_milestone_error_mapper,
            request_options=request_options,
        )

    async def get_milestone(
        self, milestone_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Milestone, GetMilestoneErrorBody]:
        """(Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Milestone],
            error_mapper=get_milestone_error_mapper,
            request_options=request_options,
        )

    async def list_milestone_epics(
        self, milestone_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListMilestoneEpicsErrorBody]:
        """(Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.

        Args:
            milestone_public_id: The ID of the Milestone.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}/epics"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[EpicSlim]],
            error_mapper=list_milestone_epics_error_mapper,
            request_options=request_options,
        )

    async def list_milestones(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Milestone], ListMilestonesErrorBody]:
        """(Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/milestones"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Milestone]],
            error_mapper=list_milestones_error_mapper,
            request_options=request_options,
        )

    async def update_milestone(
        self,
        milestone_public_id: int,
        body: UpdateMilestone | UpdateMilestoneDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Milestone, UpdateMilestoneErrorBody]:
        """(Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.

        Args:
            milestone_public_id: The ID of the Milestone.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/milestones/{milestone-public-id}"),
            path_params=[param[int]("milestone-public-id", milestone_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateMilestone | UpdateMilestoneDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Milestone],
            error_mapper=update_milestone_error_mapper,
            request_options=request_options,
        )
