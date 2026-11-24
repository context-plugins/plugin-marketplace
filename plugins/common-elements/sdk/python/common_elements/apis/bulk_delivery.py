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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.deliveries_cancel_error import DeliveriesCancelErrorBody, deliveries_cancel_error_mapper
from ..errors.deliveries_catalog_error import DeliveriesCatalogErrorBody, deliveries_catalog_error_mapper
from ..errors.deliveries_create_error import DeliveriesCreateErrorBody, deliveries_create_error_mapper
from ..errors.deliveries_download_error import DeliveriesDownloadErrorBody, deliveries_download_error_mapper
from ..errors.deliveries_list_error import DeliveriesListErrorBody, deliveries_list_error_mapper
from ..errors.deliveries_schedule_delete_error import (
    DeliveriesScheduleDeleteErrorBody,
    deliveries_schedule_delete_error_mapper,
)
from ..errors.deliveries_schedule_detail_error import (
    DeliveriesScheduleDetailErrorBody,
    deliveries_schedule_detail_error_mapper,
)
from ..errors.deliveries_schedule_update_error import (
    DeliveriesScheduleUpdateErrorBody,
    deliveries_schedule_update_error_mapper,
)
from ..errors.deliveries_schedules_create_error import (
    DeliveriesSchedulesCreateErrorBody,
    deliveries_schedules_create_error_mapper,
)
from ..errors.deliveries_schedules_list_error import (
    DeliveriesSchedulesListErrorBody,
    deliveries_schedules_list_error_mapper,
)
from ..errors.deliveries_status_error import DeliveriesStatusErrorBody, deliveries_status_error_mapper
from ..models.api_v1_deliveries_datasets_response import ApiV1DeliveriesDatasetsResponse
from ..models.api_v1_deliveries_download_response import ApiV1DeliveriesDownloadResponse
from ..models.api_v1_deliveries_request import ApiV1DeliveriesRequest, ApiV1DeliveriesRequestDict
from ..models.api_v1_deliveries_response import ApiV1DeliveriesResponse
from ..models.api_v1_deliveries_response1 import ApiV1DeliveriesResponse1
from ..models.api_v1_deliveries_response2 import ApiV1DeliveriesResponse2
from ..models.api_v1_deliveries_response3 import ApiV1DeliveriesResponse3
from ..models.api_v1_deliveries_schedules_request import (
    ApiV1DeliveriesSchedulesRequest,
    ApiV1DeliveriesSchedulesRequestDict,
)
from ..models.api_v1_deliveries_schedules_request1 import (
    ApiV1DeliveriesSchedulesRequest1,
    ApiV1DeliveriesSchedulesRequest1Dict,
)
from ..models.api_v1_deliveries_schedules_response import ApiV1DeliveriesSchedulesResponse
from ..models.api_v1_deliveries_schedules_response1 import ApiV1DeliveriesSchedulesResponse1
from ..models.api_v1_deliveries_schedules_response2 import ApiV1DeliveriesSchedulesResponse2
from ..models.api_v1_deliveries_schedules_response3 import ApiV1DeliveriesSchedulesResponse3
from ..server.server import Server


class BulkDelivery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BulkDeliveryWithRawResponse(client, server, auth)

    def deliveries_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesResponse3:
        """Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than
        asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that
        skips the check.

        Args:
            id_: Delivery id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_cancel(id_, request_options=request_options))

    def deliveries_catalog(
        self, *, dataset: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesDatasetsResponse:
        """The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for
        the key on this request — what your plan allows. Every dataset is listed, each carrying ``available_to_you`` and
        the reason when it is false. Add ``?dataset=`` for one dataset's full column dictionary.

        - The dictionary returned here is the same document shipped inside each delivery, so a schema can be built
            against this endpoint before the first file arrives, and diffed afterwards.

        Args:
            dataset: Narrow to one dataset and include its full column dictionary. Without it the response carries
                column counts rather than every column. Current keys: associations, vendors, statutes, building-safety,
                report-card, changes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_catalog(dataset=dataset, request_options=request_options))

    def deliveries_create(
        self,
        body: ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesResponse:
        """Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs server-side
        with keyset pagination and produces a durable artifact with a manifest and a column dictionary beside it. Use
        this instead of /v1/export when the dataset is larger than one HTTP response can carry.

        **Plan:** Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap, lookback window,
        monthly delivery quota and concurrency are all resolved server-side from the key; none of them is a parameter.

        - One delivery counts once against your monthly request quota and once against your plan's separate monthly
            delivery quota. Polling its status costs a request like any other call.
        - A refusal names its reason: ``tier_not_allowed`` when the plan does not include delivery, ``quota_exceeded``
            when the monthly delivery quota is spent, and 429 again when too many deliveries are already running.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_create(body, request_options=request_options))

    def deliveries_download(
        self,
        id_: UUID,
        *,
        token: str | None = None,
        part: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesDownloadResponse:
        """Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own capability token
        for a pipeline that should not hold an API key, or the organization's API key for anything that already does.
        Either way the same database function re-checks that the run succeeded, that its retention window is still open,
        and that the presenter is entitled.

        - The response is the file itself, not a redirect to storage. A signed storage URL would keep working after the
            artifact expired, after the subscription lapsed and after the key was revoked, with no server left in the
            path to reconsider.
        - Fetch ``?part=dictionary`` to build a schema before parsing, and ``?part=manifest`` to verify the row count
            and checksum after downloading.

        Args:
            id_: Delivery id.
            token: The artifact's capability token, as returned on the delivery's status. Use this when the consumer
                should not hold an API key. A token download does not consume your monthly request quota.
            part: ``manifest`` for the run's manifest or ``dictionary`` for its column dictionary, fetched through the
                same authorization. Omit for the data itself.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.deliveries_download(id_, token=token, part=part, request_options=request_options)
        )

    def deliveries_list(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1DeliveriesResponse1:
        """List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and
        download links while they are live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``invalid_api_key`` — No Authorization header, a header that is not ``Bearer <key>``, or a key
                that does not resolve to an active record. Next: Send ``Authorization: Bearer ce_live_...``. If the
                header is correct, the key has been revoked or expired — mint a new one at /settings/api-keys. Keys are
                shown once at creation and stored only as a hash, so a lost key cannot be recovered.
                ``scope_not_allowed`` — The key is valid but was created without the scope this endpoint requires.
                Scopes are set at key creation and are not widened at request time. Next: Create a key carrying the
                scope named in the message, or use the ``all`` scope. Each endpoint's required scope is on its OpenAPI
                operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_list(request_options=request_options))

    def deliveries_schedule_delete(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesSchedulesResponse3:
        """Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their
        retention window closes.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_schedule_delete(id_, request_options=request_options))

    def deliveries_schedule_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesSchedulesResponse2:
        """One recurring delivery and its recent runs.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_schedule_detail(id_, request_options=request_options))

    def deliveries_schedule_update(
        self,
        id_: UUID,
        body: ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesSchedulesResponse3:
        """Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not
        editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would
        turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.

        - For a ``changes`` schedule the watermark is untouched by a pause, so the first run after resuming covers
            everything that happened while it slept — clamped, as always, by your plan's lookback window.

        Args:
            id_: Schedule id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_schedule_update(id_, body, request_options=request_options))

    def deliveries_schedules_create(
        self,
        body: ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesSchedulesResponse:
        """Create a recurring delivery: this dataset, these filters, this format, on this cadence, produced whether or
        not anyone is awake. In ``changes`` mode each run covers only what was observed after the previous SUCCESSFUL
        delivery, so a failed run is re-covered on the next one rather than silently skipped.

        **Plan:** Growth plan and above, the same gate as one-off delivery.

        - Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume are editable
            through PATCH on the schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_schedules_create(body, request_options=request_options))

    def deliveries_schedules_list(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesSchedulesResponse1:
        """List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``invalid_api_key`` — No Authorization header, a header that is not ``Bearer <key>``, or a key
                that does not resolve to an active record. Next: Send ``Authorization: Bearer ce_live_...``. If the
                header is correct, the key has been revoked or expired — mint a new one at /settings/api-keys. Keys are
                shown once at creation and stored only as a hash, so a lost key cannot be recovered.
                ``scope_not_allowed`` — The key is valid but was created without the scope this endpoint requires.
                Scopes are set at key creation and are not widened at request time. Next: Create a key carrying the
                scope named in the message, or use the ``all`` scope. Each endpoint's required scope is on its OpenAPI
                operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_schedules_list(request_options=request_options))

    def deliveries_status(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesResponse2:
        """Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a
        machine-readable ``error.code`` with a message written for the person who has to decide what to do next.

        Args:
            id_: Delivery id returned when the delivery was requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.deliveries_status(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> BulkDeliveryWithRawResponse:
        return self._with_raw_response


class AsyncBulkDelivery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBulkDeliveryWithRawResponse(client, server, auth)

    async def deliveries_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesResponse3:
        """Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than
        asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that
        skips the check.

        Args:
            id_: Delivery id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_cancel(id_, request_options=request_options))

    async def deliveries_catalog(
        self, *, dataset: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesDatasetsResponse:
        """The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for
        the key on this request — what your plan allows. Every dataset is listed, each carrying ``available_to_you`` and
        the reason when it is false. Add ``?dataset=`` for one dataset's full column dictionary.

        - The dictionary returned here is the same document shipped inside each delivery, so a schema can be built
            against this endpoint before the first file arrives, and diffed afterwards.

        Args:
            dataset: Narrow to one dataset and include its full column dictionary. Without it the response carries
                column counts rather than every column. Current keys: associations, vendors, statutes, building-safety,
                report-card, changes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.deliveries_catalog(dataset=dataset, request_options=request_options)
        )

    async def deliveries_create(
        self,
        body: ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesResponse:
        """Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs server-side
        with keyset pagination and produces a durable artifact with a manifest and a column dictionary beside it. Use
        this instead of /v1/export when the dataset is larger than one HTTP response can carry.

        **Plan:** Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap, lookback window,
        monthly delivery quota and concurrency are all resolved server-side from the key; none of them is a parameter.

        - One delivery counts once against your monthly request quota and once against your plan's separate monthly
            delivery quota. Polling its status costs a request like any other call.
        - A refusal names its reason: ``tier_not_allowed`` when the plan does not include delivery, ``quota_exceeded``
            when the monthly delivery quota is spent, and 429 again when too many deliveries are already running.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_create(body, request_options=request_options))

    async def deliveries_download(
        self,
        id_: UUID,
        *,
        token: str | None = None,
        part: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesDownloadResponse:
        """Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own capability token
        for a pipeline that should not hold an API key, or the organization's API key for anything that already does.
        Either way the same database function re-checks that the run succeeded, that its retention window is still open,
        and that the presenter is entitled.

        - The response is the file itself, not a redirect to storage. A signed storage URL would keep working after the
            artifact expired, after the subscription lapsed and after the key was revoked, with no server left in the
            path to reconsider.
        - Fetch ``?part=dictionary`` to build a schema before parsing, and ``?part=manifest`` to verify the row count
            and checksum after downloading.

        Args:
            id_: Delivery id.
            token: The artifact's capability token, as returned on the delivery's status. Use this when the consumer
                should not hold an API key. A token download does not consume your monthly request quota.
            part: ``manifest`` for the run's manifest or ``dictionary`` for its column dictionary, fetched through the
                same authorization. Omit for the data itself.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.deliveries_download(
                id_, token=token, part=part, request_options=request_options
            ),
        )

    async def deliveries_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesResponse1:
        """List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and
        download links while they are live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``invalid_api_key`` — No Authorization header, a header that is not ``Bearer <key>``, or a key
                that does not resolve to an active record. Next: Send ``Authorization: Bearer ce_live_...``. If the
                header is correct, the key has been revoked or expired — mint a new one at /settings/api-keys. Keys are
                shown once at creation and stored only as a hash, so a lost key cannot be recovered.
                ``scope_not_allowed`` — The key is valid but was created without the scope this endpoint requires.
                Scopes are set at key creation and are not widened at request time. Next: Create a key carrying the
                scope named in the message, or use the ``all`` scope. Each endpoint's required scope is on its OpenAPI
                operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_list(request_options=request_options))

    async def deliveries_schedule_delete(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesSchedulesResponse3:
        """Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their
        retention window closes.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_schedule_delete(id_, request_options=request_options))

    async def deliveries_schedule_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesSchedulesResponse2:
        """One recurring delivery and its recent runs.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_schedule_detail(id_, request_options=request_options))

    async def deliveries_schedule_update(
        self,
        id_: UUID,
        body: ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesSchedulesResponse3:
        """Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not
        editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would
        turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.

        - For a ``changes`` schedule the watermark is untouched by a pause, so the first run after resuming covers
            everything that happened while it slept — clamped, as always, by your plan's lookback window.

        Args:
            id_: Schedule id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.deliveries_schedule_update(id_, body, request_options=request_options)
        )

    async def deliveries_schedules_create(
        self,
        body: ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1DeliveriesSchedulesResponse:
        """Create a recurring delivery: this dataset, these filters, this format, on this cadence, produced whether or
        not anyone is awake. In ``changes`` mode each run covers only what was observed after the previous SUCCESSFUL
        delivery, so a failed run is re-covered on the next one rather than silently skipped.

        **Plan:** Growth plan and above, the same gate as one-off delivery.

        - Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume are editable
            through PATCH on the schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request
                included in the current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_schedules_create(body, request_options=request_options))

    async def deliveries_schedules_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesSchedulesResponse1:
        """List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``invalid_api_key`` — No Authorization header, a header that is not ``Bearer <key>``, or a key
                that does not resolve to an active record. Next: Send ``Authorization: Bearer ce_live_...``. If the
                header is correct, the key has been revoked or expired — mint a new one at /settings/api-keys. Keys are
                shown once at creation and stored only as a hash, so a lost key cannot be recovered.
                ``scope_not_allowed`` — The key is valid but was created without the scope this endpoint requires.
                Scopes are set at key creation and are not widened at request time. Next: Create a key carrying the
                scope named in the message, or use the ``all`` scope. Each endpoint's required scope is on its OpenAPI
                operation as ``x-ce-scope``. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_schedules_list(request_options=request_options))

    async def deliveries_status(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1DeliveriesResponse2:
        """Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a
        machine-readable ``error.code`` with a message written for the person who has to decide what to do next.

        Args:
            id_: Delivery id returned when the delivery was requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: ``validation_error`` — A query parameter or body field is missing, malformed, or outside its
                allowed range. The message names the first parameter that failed. Next: Fix the named parameter and
                re-send. Every parameter and its accepted values are in the OpenAPI document at /api/v1/openapi;
                retrying an unchanged request will fail the same way. ``invalid_api_key`` — No Authorization header, a
                header that is not ``Bearer <key>``, or a key that does not resolve to an active record. Next: Send
                ``Authorization: Bearer ce_live_...``. If the header is correct, the key has been revoked or expired —
                mint a new one at /settings/api-keys. Keys are shown once at creation and stored only as a hash, so a
                lost key cannot be recovered. ``scope_not_allowed`` — The key is valid but was created without the scope
                this endpoint requires. Scopes are set at key creation and are not widened at request time. Next: Create
                a key carrying the scope named in the message, or use the ``all`` scope. Each endpoint's required scope
                is on its OpenAPI operation as ``x-ce-scope``. ``not_found`` — The identifier is well-formed but matches
                nothing this key may see. Records excluded from the public directory read as absent rather than
                forbidden, deliberately — a 403 would confirm the row exists. Next: Confirm the identifier against a
                list or search endpoint before fetching it by id. A record that appears in the product but not here is
                outside the licensed dataset. ``quota_exceeded`` — The key has spent every request included in the
                current calendar month. There is no overage charge and no automatic top-up. Next: Call
                /api/v1/meta/usage to see the reset date and how the quota was spent, then either wait for the reset at
                the start of the next calendar month or upgrade the plan. /api/v1/meta/usage does not itself consume
                quota. ``internal_error`` — The request was accepted and failed on our side. Next: Retry with
                exponential backoff (1s, 2s, 4s, up to about 30s). If it persists past a few minutes, check
                /api/v1/meta/status and contact support with the time of the request. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.deliveries_status(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBulkDeliveryWithRawResponse:
        return self._with_raw_response


class BulkDeliveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def deliveries_cancel(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesResponse3, DeliveriesCancelErrorBody]:
        """Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than
        asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that
        skips the check.

        Args:
            id_: Delivery id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/deliveries/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesResponse3],
            error_mapper=deliveries_cancel_error_mapper,
            request_options=request_options,
        )

    def deliveries_catalog(
        self, *, dataset: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesDatasetsResponse, DeliveriesCatalogErrorBody]:
        """The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for
        the key on this request — what your plan allows. Every dataset is listed, each carrying ``available_to_you`` and
        the reason when it is false. Add ``?dataset=`` for one dataset's full column dictionary.

        - The dictionary returned here is the same document shipped inside each delivery, so a schema can be built
            against this endpoint before the first file arrives, and diffed afterwards.

        Args:
            dataset: Narrow to one dataset and include its full column dictionary. Without it the response carries
                column counts rather than every column. Current keys: associations, vendors, statutes, building-safety,
                report-card, changes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/datasets"),
            query_params=[param[str | None]("dataset", dataset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesDatasetsResponse],
            error_mapper=deliveries_catalog_error_mapper,
            request_options=request_options,
        )

    def deliveries_create(
        self,
        body: ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesResponse, DeliveriesCreateErrorBody]:
        """Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs server-side
        with keyset pagination and produces a durable artifact with a manifest and a column dictionary beside it. Use
        this instead of /v1/export when the dataset is larger than one HTTP response can carry.

        **Plan:** Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap, lookback window,
        monthly delivery quota and concurrency are all resolved server-side from the key; none of them is a parameter.

        - One delivery counts once against your monthly request quota and once against your plan's separate monthly
            delivery quota. Polling its status costs a request like any other call.
        - A refusal names its reason: ``tier_not_allowed`` when the plan does not include delivery, ``quota_exceeded``
            when the monthly delivery quota is spent, and 429 again when too many deliveries are already running.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/deliveries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesResponse],
            error_mapper=deliveries_create_error_mapper,
            request_options=request_options,
        )

    def deliveries_download(
        self,
        id_: UUID,
        *,
        token: str | None = None,
        part: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesDownloadResponse, DeliveriesDownloadErrorBody]:
        """Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own capability token
        for a pipeline that should not hold an API key, or the organization's API key for anything that already does.
        Either way the same database function re-checks that the run succeeded, that its retention window is still open,
        and that the presenter is entitled.

        - The response is the file itself, not a redirect to storage. A signed storage URL would keep working after the
            artifact expired, after the subscription lapsed and after the key was revoked, with no server left in the
            path to reconsider.
        - Fetch ``?part=dictionary`` to build a schema before parsing, and ``?part=manifest`` to verify the row count
            and checksum after downloading.

        Args:
            id_: Delivery id.
            token: The artifact's capability token, as returned on the delivery's status. Use this when the consumer
                should not hold an API key. A token download does not consume your monthly request quota.
            part: ``manifest`` for the run's manifest or ``dictionary`` for its column dictionary, fetched through the
                same authorization. Omit for the data itself.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/{id}/download"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[str | None]("token", token), param[str | None]("part", part)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesDownloadResponse],
            error_mapper=deliveries_download_error_mapper,
            request_options=request_options,
        )

    def deliveries_list(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesResponse1, DeliveriesListErrorBody]:
        """List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and
        download links while they are live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesResponse1],
            error_mapper=deliveries_list_error_mapper,
            request_options=request_options,
        )

    def deliveries_schedule_delete(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse3, DeliveriesScheduleDeleteErrorBody]:
        """Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their
        retention window closes.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/deliveries/schedules/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesSchedulesResponse3],
            error_mapper=deliveries_schedule_delete_error_mapper,
            request_options=request_options,
        )

    def deliveries_schedule_detail(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse2, DeliveriesScheduleDetailErrorBody]:
        """One recurring delivery and its recent runs.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/schedules/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesSchedulesResponse2],
            error_mapper=deliveries_schedule_detail_error_mapper,
            request_options=request_options,
        )

    def deliveries_schedule_update(
        self,
        id_: UUID,
        body: ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse3, DeliveriesScheduleUpdateErrorBody]:
        """Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not
        editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would
        turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.

        - For a ``changes`` schedule the watermark is untouched by a pause, so the first run after resuming covers
            everything that happened while it slept — clamped, as always, by your plan's lookback window.

        Args:
            id_: Schedule id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/deliveries/schedules/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesSchedulesResponse3],
            error_mapper=deliveries_schedule_update_error_mapper,
            request_options=request_options,
        )

    def deliveries_schedules_create(
        self,
        body: ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse, DeliveriesSchedulesCreateErrorBody]:
        """Create a recurring delivery: this dataset, these filters, this format, on this cadence, produced whether or
        not anyone is awake. In ``changes`` mode each run covers only what was observed after the previous SUCCESSFUL
        delivery, so a failed run is re-covered on the next one rather than silently skipped.

        **Plan:** Growth plan and above, the same gate as one-off delivery.

        - Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume are editable
            through PATCH on the schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/deliveries/schedules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesSchedulesResponse],
            error_mapper=deliveries_schedules_create_error_mapper,
            request_options=request_options,
        )

    def deliveries_schedules_list(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse1, DeliveriesSchedulesListErrorBody]:
        """List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/schedules"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesSchedulesResponse1],
            error_mapper=deliveries_schedules_list_error_mapper,
            request_options=request_options,
        )

    def deliveries_status(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesResponse2, DeliveriesStatusErrorBody]:
        """Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a
        machine-readable ``error.code`` with a message written for the person who has to decide what to do next.

        Args:
            id_: Delivery id returned when the delivery was requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1DeliveriesResponse2],
            error_mapper=deliveries_status_error_mapper,
            request_options=request_options,
        )


class AsyncBulkDeliveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def deliveries_cancel(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesResponse3, DeliveriesCancelErrorBody]:
        """Cancel a queued or running delivery. Authorization is enforced in SQL from the key's organization rather than
        asserted by the route, so a delivery belonging to another organization cannot be cancelled even by a caller that
        skips the check.

        Args:
            id_: Delivery id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/deliveries/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesResponse3],
            error_mapper=deliveries_cancel_error_mapper,
            request_options=request_options,
        )

    async def deliveries_catalog(
        self, *, dataset: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesDatasetsResponse, DeliveriesCatalogErrorBody]:
        """The deliverable catalog and its column dictionary: what can be delivered, in what shape, and — resolved for
        the key on this request — what your plan allows. Every dataset is listed, each carrying ``available_to_you`` and
        the reason when it is false. Add ``?dataset=`` for one dataset's full column dictionary.

        - The dictionary returned here is the same document shipped inside each delivery, so a schema can be built
            against this endpoint before the first file arrives, and diffed afterwards.

        Args:
            dataset: Narrow to one dataset and include its full column dictionary. Without it the response carries
                column counts rather than every column. Current keys: associations, vendors, statutes, building-safety,
                report-card, changes.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/datasets"),
            query_params=[param[str | None]("dataset", dataset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesDatasetsResponse],
            error_mapper=deliveries_catalog_error_mapper,
            request_options=request_options,
        )

    async def deliveries_create(
        self,
        body: ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesResponse, DeliveriesCreateErrorBody]:
        """Request an asynchronous bulk delivery. Returns immediately with a delivery id; the export runs server-side
        with keyset pagination and produces a durable artifact with a manifest and a column dictionary beside it. Use
        this instead of /v1/export when the dataset is larger than one HTTP response can carry.

        **Plan:** Bulk delivery is a Growth plan capability, the same line /v1/export draws. Row cap, lookback window,
        monthly delivery quota and concurrency are all resolved server-side from the key; none of them is a parameter.

        - One delivery counts once against your monthly request quota and once against your plan's separate monthly
            delivery quota. Polling its status costs a request like any other call.
        - A refusal names its reason: ``tier_not_allowed`` when the plan does not include delivery, ``quota_exceeded``
            when the monthly delivery quota is spent, and 429 again when too many deliveries are already running.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/deliveries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesResponse],
            error_mapper=deliveries_create_error_mapper,
            request_options=request_options,
        )

    async def deliveries_download(
        self,
        id_: UUID,
        *,
        token: str | None = None,
        part: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesDownloadResponse, DeliveriesDownloadErrorBody]:
        """Stream a delivered artifact, or one of its sidecars. Two doors, one gate: the artifact's own capability token
        for a pipeline that should not hold an API key, or the organization's API key for anything that already does.
        Either way the same database function re-checks that the run succeeded, that its retention window is still open,
        and that the presenter is entitled.

        - The response is the file itself, not a redirect to storage. A signed storage URL would keep working after the
            artifact expired, after the subscription lapsed and after the key was revoked, with no server left in the
            path to reconsider.
        - Fetch ``?part=dictionary`` to build a schema before parsing, and ``?part=manifest`` to verify the row count
            and checksum after downloading.

        Args:
            id_: Delivery id.
            token: The artifact's capability token, as returned on the delivery's status. Use this when the consumer
                should not hold an API key. A token download does not consume your monthly request quota.
            part: ``manifest`` for the run's manifest or ``dictionary`` for its column dictionary, fetched through the
                same authorization. Omit for the data itself.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/{id}/download"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[str | None]("token", token), param[str | None]("part", part)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesDownloadResponse],
            error_mapper=deliveries_download_error_mapper,
            request_options=request_options,
        )

    async def deliveries_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesResponse1, DeliveriesListErrorBody]:
        """List this organization's deliveries, most recent first, with their status, row and byte counts, checksum, and
        download links while they are live.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesResponse1],
            error_mapper=deliveries_list_error_mapper,
            request_options=request_options,
        )

    async def deliveries_schedule_delete(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse3, DeliveriesScheduleDeleteErrorBody]:
        """Remove a recurring delivery. Artifacts already produced are unaffected and remain downloadable until their
        retention window closes.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/deliveries/schedules/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesSchedulesResponse3],
            error_mapper=deliveries_schedule_delete_error_mapper,
            request_options=request_options,
        )

    async def deliveries_schedule_detail(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse2, DeliveriesScheduleDetailErrorBody]:
        """One recurring delivery and its recent runs.

        Args:
            id_: Schedule id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/schedules/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesSchedulesResponse2],
            error_mapper=deliveries_schedule_detail_error_mapper,
            request_options=request_options,
        )

    async def deliveries_schedule_update(
        self,
        id_: UUID,
        body: ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse3, DeliveriesScheduleUpdateErrorBody]:
        """Pause, resume, retime or refilter a recurring delivery. Dataset, format and mode are deliberately not
        editable: they are what entitlement was checked against at creation, and letting a PATCH swap the dataset would
        turn one authorized decision into a standing permission for any other. Change them by creating a new schedule.

        - For a ``changes`` schedule the watermark is untouched by a pause, so the first run after resuming covers
            everything that happened while it slept — clamped, as always, by your plan's lookback window.

        Args:
            id_: Schedule id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/deliveries/schedules/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesSchedulesResponse3],
            error_mapper=deliveries_schedule_update_error_mapper,
            request_options=request_options,
        )

    async def deliveries_schedules_create(
        self,
        body: ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse, DeliveriesSchedulesCreateErrorBody]:
        """Create a recurring delivery: this dataset, these filters, this format, on this cadence, produced whether or
        not anyone is awake. In ``changes`` mode each run covers only what was observed after the previous SUCCESSFUL
        delivery, so a failed run is re-covered on the next one rather than silently skipped.

        **Plan:** Growth plan and above, the same gate as one-off delivery.

        - Dataset, format and mode are fixed at creation. Filters, columns, cadence and pause/resume are editable
            through PATCH on the schedule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/deliveries/schedules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesSchedulesResponse],
            error_mapper=deliveries_schedules_create_error_mapper,
            request_options=request_options,
        )

    async def deliveries_schedules_list(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesSchedulesResponse1, DeliveriesSchedulesListErrorBody]:
        """List this organization's recurring deliveries, with their cadence, next run, watermark and paused state.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/schedules"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesSchedulesResponse1],
            error_mapper=deliveries_schedules_list_error_mapper,
            request_options=request_options,
        )

    async def deliveries_status(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1DeliveriesResponse2, DeliveriesStatusErrorBody]:
        """Status of one delivery: progress while it runs, download links once it succeeds, and — when it fails — a
        machine-readable ``error.code`` with a message written for the person who has to decide what to do next.

        Args:
            id_: Delivery id returned when the delivery was requested.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/deliveries/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1DeliveriesResponse2],
            error_mapper=deliveries_status_error_mapper,
            request_options=request_options,
        )
