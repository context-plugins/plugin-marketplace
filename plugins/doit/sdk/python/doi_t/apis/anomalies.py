from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.get_anomaly_error import GetAnomalyErrorBody, get_anomaly_error_mapper
from ..errors.get_anomaly_explanation_error import GetAnomalyExplanationErrorBody, get_anomaly_explanation_error_mapper
from ..errors.list_anomalies_error import ListAnomaliesErrorBody, list_anomalies_error_mapper
from ..errors.patch_anomaly_error import PatchAnomalyErrorBody, patch_anomaly_error_mapper
from ..models.anomalies_response import AnomaliesResponse
from ..models.anomalies_v1_explanation_response import AnomaliesV1ExplanationResponse
from ..models.anomalies_v1_response import AnomaliesV1Response
from ..models.anomaly_status_update import AnomalyStatusUpdate, AnomalyStatusUpdateDict
from ..models.enums.sort_by_doi_t_anomalies_api import SortByDoiTAnomaliesApi, SortByDoiTAnomaliesApiOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..server.server import Server


class Anomalies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnomaliesWithRawResponse(client, server, auth)

    def get_anomaly(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AnomaliesV1Response:
        """Returns the specified anomaly.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Anomaly returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_anomaly(id_, request_options=request_options))

    def get_anomaly_explanation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AnomaliesV1ExplanationResponse:
        """Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence
        references it was generated from. The explanation itself is AI-generated; it is always returned separately from
        the deterministic ``facts``, and is marked as such in the ``explanation`` object. Generation is ephemeral: no
        conversation is persisted on your behalf.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Anomaly explanation returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Too Many Requests. Internal Server Error - Something went
                wrong with the DoiT API server. Service Unavailable — minting the ephemeral console-iam token or calling
                Ava failed. This is a dependency-availability failure, not a client error: retry after the interval
                indicated by the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_anomaly_explanation(id_, request_options=request_options))

    def list_anomalies(
        self,
        *,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = None,
        page_token: str | None = None,
        include_notifications: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnomaliesResponse:
        """Returns a list of detected anomalies. Anomalies can be sorted by ``startTime``, ``severityLevel``, or
        ``costOfAnomaly`` using ``sortBy`` and ``sortOrder``. By default they are sorted by ``startTime`` in descending
        order (most recent first). The sort order is total and reproducible: ties on the selected field are broken by
        ``startTime`` descending and then by anomaly ``id`` ascending, so the same result set always paginates in the
        same order. The ``notifications`` array is always present on each anomaly item; it is empty unless
        ``includeNotifications=true`` is supplied. **Pagination stability**: ``sortBy``, ``sortOrder``, ``filter``,
        ``minCreationTime``, and ``maxCreationTime`` must be held constant across a pagination sequence. A ``pageToken``
        presented with any of them changed is rejected with ``400``.

        Args:
            min_creation_time: Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            max_creation_time: Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            filter_: An expression for filtering the results. The syntax is ``key:value``. Multiple criteria can be
                combined using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**. ``severityLevel`` values
                must be lowercase: ``information``, ``warning``, ``critical``. An unrecognised key, or a segment that is
                not ``key:value``, is rejected with ``400`` rather than ignored.
            sort_by: A field by which the results will be sorted. Defaults to ``startTime``.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. If omitted, all anomalies matching
                the filters and time window are returned in a single page.
            page_token: Page token, returned by a previous call, to request the next page of results
            include_notifications: Include anomaly notifications from the subcollection. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_anomalies(
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                filter_=filter_,
                sort_by=sort_by,
                sort_order=sort_order,
                max_results=max_results,
                page_token=page_token,
                include_notifications=include_notifications,
                request_options=request_options,
            ),
        )

    def patch_anomaly(
        self,
        id_: str,
        body: AnomalyStatusUpdate | AnomalyStatusUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the review status of the anomaly identified by ``{id}``, the same identifier ``getAnomaly`` accepts.
        Mirrors the review workflow available in the console: set ``reviewStatus``, and when resolving, qualify it with
        ``resolution`` and optionally a ``resolutionNote`` (feedback reason and comment). The change is recorded in the
        anomaly's review history exactly like a console update, and the actor is derived from the API credentials -
        never from the request body.

        Validation: ``reviewStatus`` is one of ``NEEDS_REVIEW``, ``UNDER_REVIEW``, ``RESOLVED``; ``resolution``
        (``ANOMALY_CONFIRMED`` or ``NOT_ANOMALY``) is required when ``reviewStatus`` is ``RESOLVED`` and forbidden
        otherwise; ``resolutionNote.reason`` must belong to the given ``resolution`` - ``SECURITY_BREACH``,
        ``MISCONFIGURATION``, ``UNINTENTIONAL_PROVISIONING``, ``EXPECTED_COST_SPIKE`` or ``ANOMALOUS_OTHER`` for
        ``ANOMALY_CONFIRMED``, and ``FAULTY_ANOMALY_DETECTION_MODEL``, ``INCORRECT_DATA``, ``LOW_IMPACT`` or
        ``NON_ANOMALOUS_OTHER`` for ``NOT_ANOMALY``. Requires the ``AnomaliesManager`` permission and DoiT API access
        (``platform:externalApi``).

        Args:
            id_: A unique identifier of the anomaly.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Anomaly status updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.patch_anomaly(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AnomaliesWithRawResponse:
        return self._with_raw_response


class AsyncAnomalies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnomaliesWithRawResponse(client, server, auth)

    async def get_anomaly(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnomaliesV1Response:
        """Returns the specified anomaly.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Anomaly returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_anomaly(id_, request_options=request_options))

    async def get_anomaly_explanation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnomaliesV1ExplanationResponse:
        """Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence
        references it was generated from. The explanation itself is AI-generated; it is always returned separately from
        the deterministic ``facts``, and is marked as such in the ``explanation`` object. Generation is ephemeral: no
        conversation is persisted on your behalf.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Anomaly explanation returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Too Many Requests. Internal Server Error - Something went
                wrong with the DoiT API server. Service Unavailable — minting the ephemeral console-iam token or calling
                Ava failed. This is a dependency-availability failure, not a client error: retry after the interval
                indicated by the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_anomaly_explanation(id_, request_options=request_options))

    async def list_anomalies(
        self,
        *,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = None,
        page_token: str | None = None,
        include_notifications: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnomaliesResponse:
        """Returns a list of detected anomalies. Anomalies can be sorted by ``startTime``, ``severityLevel``, or
        ``costOfAnomaly`` using ``sortBy`` and ``sortOrder``. By default they are sorted by ``startTime`` in descending
        order (most recent first). The sort order is total and reproducible: ties on the selected field are broken by
        ``startTime`` descending and then by anomaly ``id`` ascending, so the same result set always paginates in the
        same order. The ``notifications`` array is always present on each anomaly item; it is empty unless
        ``includeNotifications=true`` is supplied. **Pagination stability**: ``sortBy``, ``sortOrder``, ``filter``,
        ``minCreationTime``, and ``maxCreationTime`` must be held constant across a pagination sequence. A ``pageToken``
        presented with any of them changed is rejected with ``400``.

        Args:
            min_creation_time: Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            max_creation_time: Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            filter_: An expression for filtering the results. The syntax is ``key:value``. Multiple criteria can be
                combined using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**. ``severityLevel`` values
                must be lowercase: ``information``, ``warning``, ``critical``. An unrecognised key, or a segment that is
                not ``key:value``, is rejected with ``400`` rather than ignored.
            sort_by: A field by which the results will be sorted. Defaults to ``startTime``.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. If omitted, all anomalies matching
                the filters and time window are returned in a single page.
            page_token: Page token, returned by a previous call, to request the next page of results
            include_notifications: Include anomaly notifications from the subcollection. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_anomalies(
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                filter_=filter_,
                sort_by=sort_by,
                sort_order=sort_order,
                max_results=max_results,
                page_token=page_token,
                include_notifications=include_notifications,
                request_options=request_options,
            ),
        )

    async def patch_anomaly(
        self,
        id_: str,
        body: AnomalyStatusUpdate | AnomalyStatusUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Updates the review status of the anomaly identified by ``{id}``, the same identifier ``getAnomaly`` accepts.
        Mirrors the review workflow available in the console: set ``reviewStatus``, and when resolving, qualify it with
        ``resolution`` and optionally a ``resolutionNote`` (feedback reason and comment). The change is recorded in the
        anomaly's review history exactly like a console update, and the actor is derived from the API credentials -
        never from the request body.

        Validation: ``reviewStatus`` is one of ``NEEDS_REVIEW``, ``UNDER_REVIEW``, ``RESOLVED``; ``resolution``
        (``ANOMALY_CONFIRMED`` or ``NOT_ANOMALY``) is required when ``reviewStatus`` is ``RESOLVED`` and forbidden
        otherwise; ``resolutionNote.reason`` must belong to the given ``resolution`` - ``SECURITY_BREACH``,
        ``MISCONFIGURATION``, ``UNINTENTIONAL_PROVISIONING``, ``EXPECTED_COST_SPIKE`` or ``ANOMALOUS_OTHER`` for
        ``ANOMALY_CONFIRMED``, and ``FAULTY_ANOMALY_DETECTION_MODEL``, ``INCORRECT_DATA``, ``LOW_IMPACT`` or
        ``NON_ANOMALOUS_OTHER`` for ``NOT_ANOMALY``. Requires the ``AnomaliesManager`` permission and DoiT API access
        (``platform:externalApi``).

        Args:
            id_: A unique identifier of the anomaly.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Anomaly status updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.patch_anomaly(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAnomaliesWithRawResponse:
        return self._with_raw_response


class AnomaliesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_anomaly(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnomaliesV1Response, GetAnomalyErrorBody]:
        """Returns the specified anomaly.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/v1/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnomaliesV1Response],
            error_mapper=get_anomaly_error_mapper,
            request_options=request_options,
        )

    def get_anomaly_explanation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnomaliesV1ExplanationResponse, GetAnomalyExplanationErrorBody]:
        """Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence
        references it was generated from. The explanation itself is AI-generated; it is always returned separately from
        the deterministic ``facts``, and is marked as such in the ``explanation`` object. Generation is ephemeral: no
        conversation is persisted on your behalf.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/v1/{id}/explanation"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnomaliesV1ExplanationResponse],
            error_mapper=get_anomaly_explanation_error_mapper,
            request_options=request_options,
        )

    def list_anomalies(
        self,
        *,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = None,
        page_token: str | None = None,
        include_notifications: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnomaliesResponse, ListAnomaliesErrorBody]:
        """Returns a list of detected anomalies. Anomalies can be sorted by ``startTime``, ``severityLevel``, or
        ``costOfAnomaly`` using ``sortBy`` and ``sortOrder``. By default they are sorted by ``startTime`` in descending
        order (most recent first). The sort order is total and reproducible: ties on the selected field are broken by
        ``startTime`` descending and then by anomaly ``id`` ascending, so the same result set always paginates in the
        same order. The ``notifications`` array is always present on each anomaly item; it is empty unless
        ``includeNotifications=true`` is supplied. **Pagination stability**: ``sortBy``, ``sortOrder``, ``filter``,
        ``minCreationTime``, and ``maxCreationTime`` must be held constant across a pagination sequence. A ``pageToken``
        presented with any of them changed is rejected with ``400``.

        Args:
            min_creation_time: Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            max_creation_time: Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            filter_: An expression for filtering the results. The syntax is ``key:value``. Multiple criteria can be
                combined using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**. ``severityLevel`` values
                must be lowercase: ``information``, ``warning``, ``critical``. An unrecognised key, or a segment that is
                not ``key:value``, is rejected with ``400`` rather than ignored.
            sort_by: A field by which the results will be sorted. Defaults to ``startTime``.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. If omitted, all anomalies matching
                the filters and time window are returned in a single page.
            page_token: Page token, returned by a previous call, to request the next page of results
            include_notifications: Include anomaly notifications from the subcollection. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/v1"),
            query_params=[
                param[int | None]("minCreationTime", min_creation_time),
                param[int | None]("maxCreationTime", max_creation_time),
                param[str | None]("filter", filter_),
                param[SortByDoiTAnomaliesApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[bool | None]("includeNotifications", include_notifications),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnomaliesResponse],
            error_mapper=list_anomalies_error_mapper,
            request_options=request_options,
        )

    def patch_anomaly(
        self,
        id_: str,
        body: AnomalyStatusUpdate | AnomalyStatusUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PatchAnomalyErrorBody]:
        """Updates the review status of the anomaly identified by ``{id}``, the same identifier ``getAnomaly`` accepts.
        Mirrors the review workflow available in the console: set ``reviewStatus``, and when resolving, qualify it with
        ``resolution`` and optionally a ``resolutionNote`` (feedback reason and comment). The change is recorded in the
        anomaly's review history exactly like a console update, and the actor is derived from the API credentials -
        never from the request body.

        Validation: ``reviewStatus`` is one of ``NEEDS_REVIEW``, ``UNDER_REVIEW``, ``RESOLVED``; ``resolution``
        (``ANOMALY_CONFIRMED`` or ``NOT_ANOMALY``) is required when ``reviewStatus`` is ``RESOLVED`` and forbidden
        otherwise; ``resolutionNote.reason`` must belong to the given ``resolution`` - ``SECURITY_BREACH``,
        ``MISCONFIGURATION``, ``UNINTENTIONAL_PROVISIONING``, ``EXPECTED_COST_SPIKE`` or ``ANOMALOUS_OTHER`` for
        ``ANOMALY_CONFIRMED``, and ``FAULTY_ANOMALY_DETECTION_MODEL``, ``INCORRECT_DATA``, ``LOW_IMPACT`` or
        ``NON_ANOMALOUS_OTHER`` for ``NOT_ANOMALY``. Requires the ``AnomaliesManager`` permission and DoiT API access
        (``platform:externalApi``).

        Args:
            id_: A unique identifier of the anomaly.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/anomalies/v1/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnomalyStatusUpdate | AnomalyStatusUpdateDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=patch_anomaly_error_mapper,
            request_options=request_options,
        )


class AsyncAnomaliesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_anomaly(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnomaliesV1Response, GetAnomalyErrorBody]:
        """Returns the specified anomaly.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/v1/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnomaliesV1Response],
            error_mapper=get_anomaly_error_mapper,
            request_options=request_options,
        )

    async def get_anomaly_explanation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnomaliesV1ExplanationResponse, GetAnomalyExplanationErrorBody]:
        """Returns a likely-cause explanation for the specified anomaly, alongside the deterministic facts and evidence
        references it was generated from. The explanation itself is AI-generated; it is always returned separately from
        the deterministic ``facts``, and is marked as such in the ``explanation`` object. Generation is ephemeral: no
        conversation is persisted on your behalf.

        Args:
            id_: A unique identifier of the anomaly.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/v1/{id}/explanation"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnomaliesV1ExplanationResponse],
            error_mapper=get_anomaly_explanation_error_mapper,
            request_options=request_options,
        )

    async def list_anomalies(
        self,
        *,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = None,
        page_token: str | None = None,
        include_notifications: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnomaliesResponse, ListAnomaliesErrorBody]:
        """Returns a list of detected anomalies. Anomalies can be sorted by ``startTime``, ``severityLevel``, or
        ``costOfAnomaly`` using ``sortBy`` and ``sortOrder``. By default they are sorted by ``startTime`` in descending
        order (most recent first). The sort order is total and reproducible: ties on the selected field are broken by
        ``startTime`` descending and then by anomaly ``id`` ascending, so the same result set always paginates in the
        same order. The ``notifications`` array is always present on each anomaly item; it is empty unless
        ``includeNotifications=true`` is supplied. **Pagination stability**: ``sortBy``, ``sortOrder``, ``filter``,
        ``minCreationTime``, and ``maxCreationTime`` must be held constant across a pagination sequence. A ``pageToken``
        presented with any of them changed is rejected with ``400``.

        Args:
            min_creation_time: Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            max_creation_time: Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX
                epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document
                was created.
            filter_: An expression for filtering the results. The syntax is ``key:value``. Multiple criteria can be
                combined using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **serviceName**, **billingAccount**, **platform**, **severityLevel**. ``severityLevel`` values
                must be lowercase: ``information``, ``warning``, ``critical``. An unrecognised key, or a segment that is
                not ``key:value``, is rejected with ``400`` rather than ignored.
            sort_by: A field by which the results will be sorted. Defaults to ``startTime``.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. If omitted, all anomalies matching
                the filters and time window are returned in a single page.
            page_token: Page token, returned by a previous call, to request the next page of results
            include_notifications: Include anomaly notifications from the subcollection. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/anomalies/v1"),
            query_params=[
                param[int | None]("minCreationTime", min_creation_time),
                param[int | None]("maxCreationTime", max_creation_time),
                param[str | None]("filter", filter_),
                param[SortByDoiTAnomaliesApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[bool | None]("includeNotifications", include_notifications),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnomaliesResponse],
            error_mapper=list_anomalies_error_mapper,
            request_options=request_options,
        )

    async def patch_anomaly(
        self,
        id_: str,
        body: AnomalyStatusUpdate | AnomalyStatusUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PatchAnomalyErrorBody]:
        """Updates the review status of the anomaly identified by ``{id}``, the same identifier ``getAnomaly`` accepts.
        Mirrors the review workflow available in the console: set ``reviewStatus``, and when resolving, qualify it with
        ``resolution`` and optionally a ``resolutionNote`` (feedback reason and comment). The change is recorded in the
        anomaly's review history exactly like a console update, and the actor is derived from the API credentials -
        never from the request body.

        Validation: ``reviewStatus`` is one of ``NEEDS_REVIEW``, ``UNDER_REVIEW``, ``RESOLVED``; ``resolution``
        (``ANOMALY_CONFIRMED`` or ``NOT_ANOMALY``) is required when ``reviewStatus`` is ``RESOLVED`` and forbidden
        otherwise; ``resolutionNote.reason`` must belong to the given ``resolution`` - ``SECURITY_BREACH``,
        ``MISCONFIGURATION``, ``UNINTENTIONAL_PROVISIONING``, ``EXPECTED_COST_SPIKE`` or ``ANOMALOUS_OTHER`` for
        ``ANOMALY_CONFIRMED``, and ``FAULTY_ANOMALY_DETECTION_MODEL``, ``INCORRECT_DATA``, ``LOW_IMPACT`` or
        ``NON_ANOMALOUS_OTHER`` for ``NOT_ANOMALY``. Requires the ``AnomaliesManager`` permission and DoiT API access
        (``platform:externalApi``).

        Args:
            id_: A unique identifier of the anomaly.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/anomalies/v1/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnomalyStatusUpdate | AnomalyStatusUpdateDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=patch_anomaly_error_mapper,
            request_options=request_options,
        )
