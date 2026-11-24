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
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_sync_sequence_run_error import GetSyncSequenceRunErrorBody, get_sync_sequence_run_error_mapper
from ..errors.trigger_sequence_run_error import TriggerSequenceRunErrorBody, trigger_sequence_run_error_mapper
from ..models.sync_sequence_status_output import SyncSequenceStatusOutput
from ..models.trigger_sequence_run_output import TriggerSequenceRunOutput
from ..server.server import Server


class SyncSequences:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SyncSequencesWithRawResponse(client, server, auth)

    def get_sync_sequence_run(
        self, sync_sequence_run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SyncSequenceStatusOutput:
        """Get the status of a sync sequence run.

        Args:
            sync_sequence_run_id: The id of the sync sequence run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.get_sync_sequence_run(sync_sequence_run_id, request_options=request_options)
        )

    def trigger_sequence_run(
        self, sync_sequence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TriggerSequenceRunOutput:
        """Trigger a new run for the given sync sequence.

        A sequence never runs concurrently with itself. If a run is already in progress, then where run queueing is
        enabled for the workspace, a single follow-up run is queued and starts after the current run completes (repeated
        triggers return the same queued run); otherwise the id of the run already in progress is returned.

        Args:
            sync_sequence_id: The id of the sync sequence to trigger a run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.trigger_sequence_run(sync_sequence_id, request_options=request_options))

    @property
    def with_raw_response(self) -> SyncSequencesWithRawResponse:
        return self._with_raw_response


class AsyncSyncSequences:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSyncSequencesWithRawResponse(client, server, auth)

    async def get_sync_sequence_run(
        self, sync_sequence_run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SyncSequenceStatusOutput:
        """Get the status of a sync sequence run.

        Args:
            sync_sequence_run_id: The id of the sync sequence run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.get_sync_sequence_run(sync_sequence_run_id, request_options=request_options)
        )

    async def trigger_sequence_run(
        self, sync_sequence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TriggerSequenceRunOutput:
        """Trigger a new run for the given sync sequence.

        A sequence never runs concurrently with itself. If a run is already in progress, then where run queueing is
        enabled for the workspace, a single follow-up run is queued and starts after the current run completes (repeated
        triggers return the same queued run); otherwise the id of the run already in progress is returned.

        Args:
            sync_sequence_id: The id of the sync sequence to trigger a run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_sequence_run(sync_sequence_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSyncSequencesWithRawResponse:
        return self._with_raw_response


class SyncSequencesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_sync_sequence_run(
        self, sync_sequence_run_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncSequenceStatusOutput, GetSyncSequenceRunErrorBody]:
        """Get the status of a sync sequence run.

        Args:
            sync_sequence_run_id: The id of the sync sequence run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sync-sequences/runs/{syncSequenceRunId}"),
            path_params=[param[str]("syncSequenceRunId", sync_sequence_run_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncSequenceStatusOutput],
            error_mapper=get_sync_sequence_run_error_mapper,
            request_options=request_options,
        )

    def trigger_sequence_run(
        self, sync_sequence_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TriggerSequenceRunOutput, TriggerSequenceRunErrorBody]:
        """Trigger a new run for the given sync sequence.

        A sequence never runs concurrently with itself. If a run is already in progress, then where run queueing is
        enabled for the workspace, a single follow-up run is queued and starts after the current run completes (repeated
        triggers return the same queued run); otherwise the id of the run already in progress is returned.

        Args:
            sync_sequence_id: The id of the sync sequence to trigger a run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sync-sequences/{syncSequenceId}/trigger"),
            path_params=[param[str]("syncSequenceId", sync_sequence_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TriggerSequenceRunOutput],
            error_mapper=trigger_sequence_run_error_mapper,
            request_options=request_options,
        )


class AsyncSyncSequencesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_sync_sequence_run(
        self, sync_sequence_run_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SyncSequenceStatusOutput, GetSyncSequenceRunErrorBody]:
        """Get the status of a sync sequence run.

        Args:
            sync_sequence_run_id: The id of the sync sequence run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sync-sequences/runs/{syncSequenceRunId}"),
            path_params=[param[str]("syncSequenceRunId", sync_sequence_run_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncSequenceStatusOutput],
            error_mapper=get_sync_sequence_run_error_mapper,
            request_options=request_options,
        )

    async def trigger_sequence_run(
        self, sync_sequence_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TriggerSequenceRunOutput, TriggerSequenceRunErrorBody]:
        """Trigger a new run for the given sync sequence.

        A sequence never runs concurrently with itself. If a run is already in progress, then where run queueing is
        enabled for the workspace, a single follow-up run is queued and starts after the current run completes (repeated
        triggers return the same queued run); otherwise the id of the run already in progress is returned.

        Args:
            sync_sequence_id: The id of the sync sequence to trigger a run
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sync-sequences/{syncSequenceId}/trigger"),
            path_params=[param[str]("syncSequenceId", sync_sequence_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TriggerSequenceRunOutput],
            error_mapper=trigger_sequence_run_error_mapper,
            request_options=request_options,
        )
