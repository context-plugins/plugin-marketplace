from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.approve_sync_draft_error import ApproveSyncDraftErrorBody, approve_sync_draft_error_mapper
from ..errors.create_sync_error import CreateSyncErrorBody, create_sync_error_mapper
from ..errors.delete_sync_error import DeleteSyncErrorBody, delete_sync_error_mapper
from ..errors.get_sync_draft_error import GetSyncDraftErrorBody, get_sync_draft_error_mapper
from ..errors.get_sync_error import GetSyncErrorBody, get_sync_error_mapper
from ..errors.list_drafts_for_sync_error import ListDraftsForSyncErrorBody, list_drafts_for_sync_error_mapper
from ..errors.list_sync_drafts_error import ListSyncDraftsErrorBody, list_sync_drafts_error_mapper
from ..errors.list_sync_error import ListSyncErrorBody, list_sync_error_mapper
from ..errors.list_sync_runs_error import ListSyncRunsErrorBody, list_sync_runs_error_mapper
from ..errors.reject_sync_draft_error import RejectSyncDraftErrorBody, reject_sync_draft_error_mapper
from ..errors.trigger_run_custom_error import TriggerRunCustomErrorBody, trigger_run_custom_error_mapper
from ..errors.trigger_run_error import TriggerRunErrorBody, trigger_run_error_mapper
from ..errors.update_sync_error import UpdateSyncErrorBody, update_sync_error_mapper
from ..models.approve_sync_draft_input import ApproveSyncDraftInput, ApproveSyncDraftInputDict
from ..models.enums.order_by1 import OrderBy1, OrderBy1OrStr
from ..models.enums.order_by_hightouch_destinations_api import (
    OrderByHightouchDestinationsApi,
    OrderByHightouchDestinationsApiOrStr,
)
from ..models.enums.sync_draft_status import SyncDraftStatusOrStr
from ..models.reject_sync_draft_input import RejectSyncDraftInput, RejectSyncDraftInputDict
from ..models.sync import Sync
from ..models.sync_create import SyncCreate, SyncCreateDict
from ..models.sync_draft import SyncDraft
from ..models.sync_draft_detail import SyncDraftDetail
from ..models.sync_draft_list import SyncDraftList
from ..models.sync_update import SyncUpdate, SyncUpdateDict
from ..models.syncs_response import SyncsResponse
from ..models.syncs_runs_response import SyncsRunsResponse
from ..models.trigger_run_custom_input import TriggerRunCustomInput, TriggerRunCustomInputDict
from ..models.trigger_run_input import TriggerRunInput, TriggerRunInputDict
from ..models.trigger_run_output import TriggerRunOutput
from ..models.unions.syncs_response1 import SyncsResponse1
from ..models.unions.syncs_response11 import SyncsResponse11
from ..models.unions.syncs_trigger_response import SyncsTriggerResponse
from ..server.server import Server


class Syncs:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SyncsWithRawResponse(client, server, auth)

    def approve_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: ApproveSyncDraftInput | ApproveSyncDraftInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncDraft:
        """Approve a sync draft and apply its change. Fails with 409 and applies nothing when the draft or the sync
        changed after the versions you send.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Conflict Payload Too Large Validation Failed ``error`` is
                ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.approve_sync_draft(sync_id, draft_id, body, request_options=request_options)
        )

    def create_sync(
        self, body: SyncCreate | SyncCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SyncsResponse1:
        """Create a new sync

        A sync either owns its configuration (``destinationId`` and ``configuration``) or is created from a sync
        template (``syncTemplateId``). A sync created from a template uses the template's destination and configuration,
        and may set the fields the template's ``overrideConfig`` marks as overridable through ``syncTemplateOverrides``.
        The effective configuration is validated for the destination either way, and ``configuration.`` errors on a
        template sync refer to that merged configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Conflict Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_sync(body, request_options=request_options))

    def delete_sync(self, sync_id: float, *, request_options: RequestOptionsOrDict | None = None) -> SyncsResponse11:
        """Delete a sync

        Args:
            sync_id: The sync's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Conflict Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.delete_sync(sync_id, request_options=request_options))

    def get_sync(self, sync_id: float, *, request_options: RequestOptionsOrDict | None = None) -> Sync:
        """Retrieve sync from sync ID

        Args:
            sync_id: The id of the sync
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_sync(sync_id, request_options=request_options))

    def get_sync_draft(
        self, sync_id: float, draft_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SyncDraftDetail:
        """Retrieve a sync draft with the sync as it is now and as approval would leave it. Send its ``draftVersion``
        and ``resourceVersion`` to approve it.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_sync_draft(sync_id, draft_id, request_options=request_options))

    def list_drafts_for_sync(
        self,
        sync_id: float,
        *,
        status: SyncDraftStatusOrStr | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncDraftList:
        """List one sync's drafts, oldest change first.

        Args:
            sync_id: The id of the sync
            status: filter on the draft's status (default ``pending``)
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_drafts_for_sync(
                sync_id,
                status=status,
                updated_since=updated_since,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    def list_sync(
        self,
        *,
        slug: str | None = None,
        model_id: float | None = None,
        destination_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncsResponse:
        """List all the syncs in the current workspace

        Args:
            slug: filter based on slug
            model_id: filter based on modelId
            destination_id: filter based on destinationId
            after: select syncs that were run after given ISO timestamp
            before: select syncs that were run before given ISO timestamp
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_sync(
                slug=slug,
                model_id=model_id,
                destination_id=destination_id,
                after=after,
                before=before,
                offset=offset,
                limit=limit,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    def list_sync_drafts(
        self,
        *,
        status: SyncDraftStatusOrStr | None = None,
        sync_id: float | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncDraftList:
        """List sync drafts across every sync in the workspace, oldest change first. Poll with ``status=pending`` and
        read every page each time: the list shows the current state, not a feed of changes.

        Args:
            status: filter on the draft's status (default ``pending``)
            sync_id: only drafts for this sync
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_sync_drafts(
                status=status,
                sync_id=sync_id,
                updated_since=updated_since,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    def list_sync_runs(
        self,
        sync_id: float,
        *,
        run_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        within: float | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderBy1OrStr | None = OrderBy1.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncsRunsResponse:
        """List all sync runs under a sync

        Args:
            sync_id: Value sent with the request.
            run_id: query for specific run id
            after: select sync runs that are started after given ISO timestamp
            before: select sync runs that are started before certain ISO timestamp
            within: select sync runs that are started within last given minutes
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.list_sync_runs(
                sync_id,
                run_id=run_id,
                after=after,
                before=before,
                within=within,
                offset=offset,
                limit=limit,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    def reject_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: RejectSyncDraftInput | RejectSyncDraftInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncDraft:
        """Reject a sync draft. The draft closes without applying its change; to try again, the requester edits the
        sync.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Conflict Payload Too Large Validation Failed ``error`` is
                ``ValidateErrorJson | RawError``."""
        return unwrap(
            self._with_raw_response.reject_sync_draft(sync_id, draft_id, body, request_options=request_options)
        )

    def trigger_run(
        self,
        sync_id: str,
        *,
        body: TriggerRunInput | TriggerRunInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TriggerRunOutput:
        """Trigger a new run for the given sync.

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            sync_id: The id of the sync to trigger a run
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.trigger_run(sync_id, body=body, request_options=request_options))

    def trigger_run_custom(
        self,
        body: TriggerRunCustomInput | TriggerRunCustomInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncsTriggerResponse:
        """Trigger a new run globally based on sync id or sync slug

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.trigger_run_custom(body, request_options=request_options))

    def update_sync(
        self, sync_id: float, body: SyncUpdate | SyncUpdateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SyncsResponse1:
        """Update an existing sync

        Patch a sync based on its Hightouch ID. A sync bound to a sync template takes its configuration from the
        template: change this sync's values with ``syncTemplateOverrides``, bind it to another template or detach it
        with ``syncTemplateId``, but do not set ``configuration`` while it is bound.

        Args:
            sync_id: The sync's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.update_sync(sync_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SyncsWithRawResponse:
        return self._with_raw_response


class AsyncSyncs:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSyncsWithRawResponse(client, server, auth)

    async def approve_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: ApproveSyncDraftInput | ApproveSyncDraftInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncDraft:
        """Approve a sync draft and apply its change. Fails with 409 and applies nothing when the draft or the sync
        changed after the versions you send.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Conflict Payload Too Large Validation Failed ``error`` is
                ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.approve_sync_draft(sync_id, draft_id, body, request_options=request_options)
        )

    async def create_sync(
        self, body: SyncCreate | SyncCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SyncsResponse1:
        """Create a new sync

        A sync either owns its configuration (``destinationId`` and ``configuration``) or is created from a sync
        template (``syncTemplateId``). A sync created from a template uses the template's destination and configuration,
        and may set the fields the template's ``overrideConfig`` marks as overridable through ``syncTemplateOverrides``.
        The effective configuration is validated for the destination either way, and ``configuration.`` errors on a
        template sync refer to that merged configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Conflict Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_sync(body, request_options=request_options))

    async def delete_sync(
        self, sync_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SyncsResponse11:
        """Delete a sync

        Args:
            sync_id: The sync's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Conflict Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.delete_sync(sync_id, request_options=request_options))

    async def get_sync(self, sync_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Sync:
        """Retrieve sync from sync ID

        Args:
            sync_id: The id of the sync
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_sync(sync_id, request_options=request_options))

    async def get_sync_draft(
        self, sync_id: float, draft_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SyncDraftDetail:
        """Retrieve a sync draft with the sync as it is now and as approval would leave it. Send its ``draftVersion``
        and ``resourceVersion`` to approve it.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_sync_draft(sync_id, draft_id, request_options=request_options))

    async def list_drafts_for_sync(
        self,
        sync_id: float,
        *,
        status: SyncDraftStatusOrStr | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncDraftList:
        """List one sync's drafts, oldest change first.

        Args:
            sync_id: The id of the sync
            status: filter on the draft's status (default ``pending``)
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_drafts_for_sync(
                sync_id,
                status=status,
                updated_since=updated_since,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    async def list_sync(
        self,
        *,
        slug: str | None = None,
        model_id: float | None = None,
        destination_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncsResponse:
        """List all the syncs in the current workspace

        Args:
            slug: filter based on slug
            model_id: filter based on modelId
            destination_id: filter based on destinationId
            after: select syncs that were run after given ISO timestamp
            before: select syncs that were run before given ISO timestamp
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sync(
                slug=slug,
                model_id=model_id,
                destination_id=destination_id,
                after=after,
                before=before,
                offset=offset,
                limit=limit,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    async def list_sync_drafts(
        self,
        *,
        status: SyncDraftStatusOrStr | None = None,
        sync_id: float | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncDraftList:
        """List sync drafts across every sync in the workspace, oldest change first. Poll with ``status=pending`` and
        read every page each time: the list shows the current state, not a feed of changes.

        Args:
            status: filter on the draft's status (default ``pending``)
            sync_id: only drafts for this sync
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sync_drafts(
                status=status,
                sync_id=sync_id,
                updated_since=updated_since,
                limit=limit,
                cursor=cursor,
                request_options=request_options,
            ),
        )

    async def list_sync_runs(
        self,
        sync_id: float,
        *,
        run_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        within: float | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderBy1OrStr | None = OrderBy1.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncsRunsResponse:
        """List all sync runs under a sync

        Args:
            sync_id: Value sent with the request.
            run_id: query for specific run id
            after: select sync runs that are started after given ISO timestamp
            before: select sync runs that are started before certain ISO timestamp
            within: select sync runs that are started within last given minutes
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sync_runs(
                sync_id,
                run_id=run_id,
                after=after,
                before=before,
                within=within,
                offset=offset,
                limit=limit,
                order_by=order_by,
                request_options=request_options,
            ),
        )

    async def reject_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: RejectSyncDraftInput | RejectSyncDraftInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncDraft:
        """Reject a sync draft. The draft closes without applying its change; to try again, the requester edits the
        sync.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Conflict Payload Too Large Validation Failed ``error`` is
                ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.reject_sync_draft(sync_id, draft_id, body, request_options=request_options)
        )

    async def trigger_run(
        self,
        sync_id: str,
        *,
        body: TriggerRunInput | TriggerRunInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TriggerRunOutput:
        """Trigger a new run for the given sync.

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            sync_id: The id of the sync to trigger a run
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(await self._with_raw_response.trigger_run(sync_id, body=body, request_options=request_options))

    async def trigger_run_custom(
        self,
        body: TriggerRunCustomInput | TriggerRunCustomInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncsTriggerResponse:
        """Trigger a new run globally based on sync id or sync slug

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(await self._with_raw_response.trigger_run_custom(body, request_options=request_options))

    async def update_sync(
        self,
        sync_id: float,
        body: SyncUpdate | SyncUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncsResponse1:
        """Update an existing sync

        Patch a sync based on its Hightouch ID. A sync bound to a sync template takes its configuration from the
        template: change this sync's values with ``syncTemplateOverrides``, bind it to another template or detach it
        with ``syncTemplateId``, but do not set ``configuration`` while it is bound.

        Args:
            sync_id: The sync's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.update_sync(sync_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSyncsWithRawResponse:
        return self._with_raw_response


class SyncsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def approve_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: ApproveSyncDraftInput | ApproveSyncDraftInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraft, ApproveSyncDraftErrorBody]:
        """Approve a sync draft and apply its change. Fails with 409 and applies nothing when the draft or the sync
        changed after the versions you send.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/{syncId}/drafts/{draftId}/approve"),
            path_params=[param[float]("syncId", sync_id), param[str]("draftId", draft_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApproveSyncDraftInput | ApproveSyncDraftInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncDraft],
            error_mapper=approve_sync_draft_error_mapper,
            request_options=request_options,
        )

    def create_sync(
        self, body: SyncCreate | SyncCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncsResponse1, CreateSyncErrorBody]:
        """Create a new sync

        A sync either owns its configuration (``destinationId`` and ``configuration``) or is created from a sync
        template (``syncTemplateId``). A sync created from a template uses the template's destination and configuration,
        and may set the fields the template's ``overrideConfig`` marks as overridable through ``syncTemplateOverrides``.
        The effective configuration is validated for the destination either way, and ``configuration.`` errors on a
        template sync refer to that merged configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncCreate | SyncCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncsResponse1],
            error_mapper=create_sync_error_mapper,
            request_options=request_options,
        )

    def delete_sync(
        self, sync_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncsResponse11, DeleteSyncErrorBody]:
        """Delete a sync

        Args:
            sync_id: The sync's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/syncs/{syncId}"),
            path_params=[param[float]("syncId", sync_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncsResponse11],
            error_mapper=delete_sync_error_mapper,
            request_options=request_options,
        )

    def get_sync(
        self, sync_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Sync, GetSyncErrorBody]:
        """Retrieve sync from sync ID

        Args:
            sync_id: The id of the sync
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}"),
            path_params=[param[float]("syncId", sync_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Sync],
            error_mapper=get_sync_error_mapper,
            request_options=request_options,
        )

    def get_sync_draft(
        self, sync_id: float, draft_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncDraftDetail, GetSyncDraftErrorBody]:
        """Retrieve a sync draft with the sync as it is now and as approval would leave it. Send its ``draftVersion``
        and ``resourceVersion`` to approve it.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}/drafts/{draftId}"),
            path_params=[param[float]("syncId", sync_id), param[str]("draftId", draft_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncDraftDetail],
            error_mapper=get_sync_draft_error_mapper,
            request_options=request_options,
        )

    def list_drafts_for_sync(
        self,
        sync_id: float,
        *,
        status: SyncDraftStatusOrStr | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraftList, ListDraftsForSyncErrorBody]:
        """List one sync's drafts, oldest change first.

        Args:
            sync_id: The id of the sync
            status: filter on the draft's status (default ``pending``)
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}/drafts"),
            path_params=[param[float]("syncId", sync_id)],
            query_params=[
                param[SyncDraftStatusOrStr | None]("status", status),
                param[RFC3339DateTime | None]("updatedSince", updated_since),
                param[float | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncDraftList],
            error_mapper=list_drafts_for_sync_error_mapper,
            request_options=request_options,
        )

    def list_sync(
        self,
        *,
        slug: str | None = None,
        model_id: float | None = None,
        destination_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsResponse, ListSyncErrorBody]:
        """List all the syncs in the current workspace

        Args:
            slug: filter based on slug
            model_id: filter based on modelId
            destination_id: filter based on destinationId
            after: select syncs that were run after given ISO timestamp
            before: select syncs that were run before given ISO timestamp
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs"),
            query_params=[
                param[str | None]("slug", slug),
                param[float | None]("modelId", model_id),
                param[float | None]("destinationId", destination_id),
                param[RFC3339DateTime | None]("after", after),
                param[RFC3339DateTime | None]("before", before),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncsResponse],
            error_mapper=list_sync_error_mapper,
            request_options=request_options,
        )

    def list_sync_drafts(
        self,
        *,
        status: SyncDraftStatusOrStr | None = None,
        sync_id: float | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraftList, ListSyncDraftsErrorBody]:
        """List sync drafts across every sync in the workspace, oldest change first. Poll with ``status=pending`` and
        read every page each time: the list shows the current state, not a feed of changes.

        Args:
            status: filter on the draft's status (default ``pending``)
            sync_id: only drafts for this sync
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/drafts"),
            query_params=[
                param[SyncDraftStatusOrStr | None]("status", status),
                param[float | None]("syncId", sync_id),
                param[RFC3339DateTime | None]("updatedSince", updated_since),
                param[float | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncDraftList],
            error_mapper=list_sync_drafts_error_mapper,
            request_options=request_options,
        )

    def list_sync_runs(
        self,
        sync_id: float,
        *,
        run_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        within: float | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderBy1OrStr | None = OrderBy1.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsRunsResponse, ListSyncRunsErrorBody]:
        """List all sync runs under a sync

        Args:
            sync_id: Value sent with the request.
            run_id: query for specific run id
            after: select sync runs that are started after given ISO timestamp
            before: select sync runs that are started before certain ISO timestamp
            within: select sync runs that are started within last given minutes
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}/runs"),
            path_params=[param[float]("syncId", sync_id)],
            query_params=[
                param[float | None]("runId", run_id),
                param[RFC3339DateTime | None]("after", after),
                param[RFC3339DateTime | None]("before", before),
                param[float | None]("within", within),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderBy1OrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncsRunsResponse],
            error_mapper=list_sync_runs_error_mapper,
            request_options=request_options,
        )

    def reject_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: RejectSyncDraftInput | RejectSyncDraftInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraft, RejectSyncDraftErrorBody]:
        """Reject a sync draft. The draft closes without applying its change; to try again, the requester edits the
        sync.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/{syncId}/drafts/{draftId}/reject"),
            path_params=[param[float]("syncId", sync_id), param[str]("draftId", draft_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RejectSyncDraftInput | RejectSyncDraftInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncDraft],
            error_mapper=reject_sync_draft_error_mapper,
            request_options=request_options,
        )

    def trigger_run(
        self,
        sync_id: str,
        *,
        body: TriggerRunInput | TriggerRunInputDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TriggerRunOutput, TriggerRunErrorBody]:
        """Trigger a new run for the given sync.

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            sync_id: The id of the sync to trigger a run
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/{syncId}/trigger"),
            path_params=[param[str]("syncId", sync_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunInput | TriggerRunInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TriggerRunOutput],
            error_mapper=trigger_run_error_mapper,
            request_options=request_options,
        )

    def trigger_run_custom(
        self,
        body: TriggerRunCustomInput | TriggerRunCustomInputDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsTriggerResponse, TriggerRunCustomErrorBody]:
        """Trigger a new run globally based on sync id or sync slug

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/trigger"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunCustomInput | TriggerRunCustomInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncsTriggerResponse],
            error_mapper=trigger_run_custom_error_mapper,
            request_options=request_options,
        )

    def update_sync(
        self, sync_id: float, body: SyncUpdate | SyncUpdateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncsResponse1, UpdateSyncErrorBody]:
        """Update an existing sync

        Patch a sync based on its Hightouch ID. A sync bound to a sync template takes its configuration from the
        template: change this sync's values with ``syncTemplateOverrides``, bind it to another template or detach it
        with ``syncTemplateId``, but do not set ``configuration`` while it is bound.

        Args:
            sync_id: The sync's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/syncs/{syncId}"),
            path_params=[param[float]("syncId", sync_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncUpdate | SyncUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncsResponse1],
            error_mapper=update_sync_error_mapper,
            request_options=request_options,
        )


class AsyncSyncsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def approve_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: ApproveSyncDraftInput | ApproveSyncDraftInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraft, ApproveSyncDraftErrorBody]:
        """Approve a sync draft and apply its change. Fails with 409 and applies nothing when the draft or the sync
        changed after the versions you send.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/{syncId}/drafts/{draftId}/approve"),
            path_params=[param[float]("syncId", sync_id), param[str]("draftId", draft_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApproveSyncDraftInput | ApproveSyncDraftInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncDraft],
            error_mapper=approve_sync_draft_error_mapper,
            request_options=request_options,
        )

    async def create_sync(
        self, body: SyncCreate | SyncCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SyncsResponse1, CreateSyncErrorBody]:
        """Create a new sync

        A sync either owns its configuration (``destinationId`` and ``configuration``) or is created from a sync
        template (``syncTemplateId``). A sync created from a template uses the template's destination and configuration,
        and may set the fields the template's ``overrideConfig`` marks as overridable through ``syncTemplateOverrides``.
        The effective configuration is validated for the destination either way, and ``configuration.`` errors on a
        template sync refer to that merged configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncCreate | SyncCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncsResponse1],
            error_mapper=create_sync_error_mapper,
            request_options=request_options,
        )

    async def delete_sync(
        self, sync_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SyncsResponse11, DeleteSyncErrorBody]:
        """Delete a sync

        Args:
            sync_id: The sync's ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/syncs/{syncId}"),
            path_params=[param[float]("syncId", sync_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncsResponse11],
            error_mapper=delete_sync_error_mapper,
            request_options=request_options,
        )

    async def get_sync(
        self, sync_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Sync, GetSyncErrorBody]:
        """Retrieve sync from sync ID

        Args:
            sync_id: The id of the sync
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}"),
            path_params=[param[float]("syncId", sync_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Sync],
            error_mapper=get_sync_error_mapper,
            request_options=request_options,
        )

    async def get_sync_draft(
        self, sync_id: float, draft_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SyncDraftDetail, GetSyncDraftErrorBody]:
        """Retrieve a sync draft with the sync as it is now and as approval would leave it. Send its ``draftVersion``
        and ``resourceVersion`` to approve it.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}/drafts/{draftId}"),
            path_params=[param[float]("syncId", sync_id), param[str]("draftId", draft_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncDraftDetail],
            error_mapper=get_sync_draft_error_mapper,
            request_options=request_options,
        )

    async def list_drafts_for_sync(
        self,
        sync_id: float,
        *,
        status: SyncDraftStatusOrStr | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraftList, ListDraftsForSyncErrorBody]:
        """List one sync's drafts, oldest change first.

        Args:
            sync_id: The id of the sync
            status: filter on the draft's status (default ``pending``)
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}/drafts"),
            path_params=[param[float]("syncId", sync_id)],
            query_params=[
                param[SyncDraftStatusOrStr | None]("status", status),
                param[RFC3339DateTime | None]("updatedSince", updated_since),
                param[float | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncDraftList],
            error_mapper=list_drafts_for_sync_error_mapper,
            request_options=request_options,
        )

    async def list_sync(
        self,
        *,
        slug: str | None = None,
        model_id: float | None = None,
        destination_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsResponse, ListSyncErrorBody]:
        """List all the syncs in the current workspace

        Args:
            slug: filter based on slug
            model_id: filter based on modelId
            destination_id: filter based on destinationId
            after: select syncs that were run after given ISO timestamp
            before: select syncs that were run before given ISO timestamp
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs"),
            query_params=[
                param[str | None]("slug", slug),
                param[float | None]("modelId", model_id),
                param[float | None]("destinationId", destination_id),
                param[RFC3339DateTime | None]("after", after),
                param[RFC3339DateTime | None]("before", before),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncsResponse],
            error_mapper=list_sync_error_mapper,
            request_options=request_options,
        )

    async def list_sync_drafts(
        self,
        *,
        status: SyncDraftStatusOrStr | None = None,
        sync_id: float | None = None,
        updated_since: RFC3339DateTime | None = None,
        limit: float | None = 100.0,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraftList, ListSyncDraftsErrorBody]:
        """List sync drafts across every sync in the workspace, oldest change first. Poll with ``status=pending`` and
        read every page each time: the list shows the current state, not a feed of changes.

        Args:
            status: filter on the draft's status (default ``pending``)
            sync_id: only drafts for this sync
            updated_since: only drafts changed at or after this ISO timestamp
            limit: the most drafts to return on a page, from 1 to 100 (default 100)
            cursor: the ``nextCursor`` from the previous page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/drafts"),
            query_params=[
                param[SyncDraftStatusOrStr | None]("status", status),
                param[float | None]("syncId", sync_id),
                param[RFC3339DateTime | None]("updatedSince", updated_since),
                param[float | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncDraftList],
            error_mapper=list_sync_drafts_error_mapper,
            request_options=request_options,
        )

    async def list_sync_runs(
        self,
        sync_id: float,
        *,
        run_id: float | None = None,
        after: RFC3339DateTime | None = None,
        before: RFC3339DateTime | None = None,
        within: float | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderBy1OrStr | None = OrderBy1.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsRunsResponse, ListSyncRunsErrorBody]:
        """List all sync runs under a sync

        Args:
            sync_id: Value sent with the request.
            run_id: query for specific run id
            after: select sync runs that are started after given ISO timestamp
            before: select sync runs that are started before certain ISO timestamp
            within: select sync runs that are started within last given minutes
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/syncs/{syncId}/runs"),
            path_params=[param[float]("syncId", sync_id)],
            query_params=[
                param[float | None]("runId", run_id),
                param[RFC3339DateTime | None]("after", after),
                param[RFC3339DateTime | None]("before", before),
                param[float | None]("within", within),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderBy1OrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncsRunsResponse],
            error_mapper=list_sync_runs_error_mapper,
            request_options=request_options,
        )

    async def reject_sync_draft(
        self,
        sync_id: float,
        draft_id: str,
        body: RejectSyncDraftInput | RejectSyncDraftInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncDraft, RejectSyncDraftErrorBody]:
        """Reject a sync draft. The draft closes without applying its change; to try again, the requester edits the
        sync.

        Args:
            sync_id: The id of the sync
            draft_id: The id of the draft
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/{syncId}/drafts/{draftId}/reject"),
            path_params=[param[float]("syncId", sync_id), param[str]("draftId", draft_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RejectSyncDraftInput | RejectSyncDraftInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncDraft],
            error_mapper=reject_sync_draft_error_mapper,
            request_options=request_options,
        )

    async def trigger_run(
        self,
        sync_id: str,
        *,
        body: TriggerRunInput | TriggerRunInputDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TriggerRunOutput, TriggerRunErrorBody]:
        """Trigger a new run for the given sync.

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            sync_id: The id of the sync to trigger a run
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/{syncId}/trigger"),
            path_params=[param[str]("syncId", sync_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunInput | TriggerRunInputDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TriggerRunOutput],
            error_mapper=trigger_run_error_mapper,
            request_options=request_options,
        )

    async def trigger_run_custom(
        self,
        body: TriggerRunCustomInput | TriggerRunCustomInputDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsTriggerResponse, TriggerRunCustomErrorBody]:
        """Trigger a new run globally based on sync id or sync slug

        If a run is already in progress, this queues a sync run that will get executed immediately after the current run
        completes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/syncs/trigger"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TriggerRunCustomInput | TriggerRunCustomInputDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncsTriggerResponse],
            error_mapper=trigger_run_custom_error_mapper,
            request_options=request_options,
        )

    async def update_sync(
        self,
        sync_id: float,
        body: SyncUpdate | SyncUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncsResponse1, UpdateSyncErrorBody]:
        """Update an existing sync

        Patch a sync based on its Hightouch ID. A sync bound to a sync template takes its configuration from the
        template: change this sync's values with ``syncTemplateOverrides``, bind it to another template or detach it
        with ``syncTemplateId``, but do not set ``configuration`` while it is bound.

        Args:
            sync_id: The sync's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/syncs/{syncId}"),
            path_params=[param[float]("syncId", sync_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncUpdate | SyncUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncsResponse1],
            error_mapper=update_sync_error_mapper,
            request_options=request_options,
        )
