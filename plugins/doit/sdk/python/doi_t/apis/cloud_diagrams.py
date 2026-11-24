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
    Date,
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
from ..errors.export_cloud_diagram_json_error import (
    ExportCloudDiagramJsonErrorBody,
    export_cloud_diagram_json_error_mapper,
)
from ..errors.find_cloud_diagrams_error import FindCloudDiagramsErrorBody, find_cloud_diagrams_error_mapper
from ..errors.get_cloud_diagram_components_error import (
    GetCloudDiagramComponentsErrorBody,
    get_cloud_diagram_components_error_mapper,
)
from ..errors.get_cloud_diagram_cost_snapshot_error import (
    GetCloudDiagramCostSnapshotErrorBody,
    get_cloud_diagram_cost_snapshot_error_mapper,
)
from ..errors.get_cloud_diagram_layer_snapshot_error import (
    GetCloudDiagramLayerSnapshotErrorBody,
    get_cloud_diagram_layer_snapshot_error_mapper,
)
from ..errors.get_cloud_diagram_resource_relationships_error import (
    GetCloudDiagramResourceRelationshipsErrorBody,
    get_cloud_diagram_resource_relationships_error_mapper,
)
from ..errors.get_cloud_diagrams_stats_error import (
    GetCloudDiagramsStatsErrorBody,
    get_cloud_diagrams_stats_error_mapper,
)
from ..errors.get_statussheet_components_error import (
    GetStatussheetComponentsErrorBody,
    get_statussheet_components_error_mapper,
)
from ..errors.list_cloud_diagram_activity_groups_error import (
    ListCloudDiagramActivityGroupsErrorBody,
    list_cloud_diagram_activity_groups_error_mapper,
)
from ..errors.list_cloud_diagram_layer_snapshots_error import (
    ListCloudDiagramLayerSnapshotsErrorBody,
    list_cloud_diagram_layer_snapshots_error_mapper,
)
from ..errors.list_cloud_diagram_node_activities_error import (
    ListCloudDiagramNodeActivitiesErrorBody,
    list_cloud_diagram_node_activities_error_mapper,
)
from ..errors.search_cloud_diagrams_error import SearchCloudDiagramsErrorBody, search_cloud_diagrams_error_mapper
from ..models.cloud_diagram_cost_snapshot import CloudDiagramCostSnapshot
from ..models.cloud_diagram_export_json_response import CloudDiagramExportJsonResponse
from ..models.cloud_diagram_layer_snapshot import CloudDiagramLayerSnapshot
from ..models.cloud_diagram_node_activity import CloudDiagramNodeActivity
from ..models.cloud_diagram_snapshot_activity_group import CloudDiagramSnapshotActivityGroup
from ..models.cloud_diagram_stats import CloudDiagramStats
from ..models.cloud_diagram_statussheet_components import CloudDiagramStatussheetComponents
from ..models.cloud_diagram_statussheet_get_request import (
    CloudDiagramStatussheetGetRequest,
    CloudDiagramStatussheetGetRequestDict,
)
from ..models.cloud_diagrams_get_request import CloudDiagramsGetRequest, CloudDiagramsGetRequestDict
from ..models.cloud_diagrams_get_response import CloudDiagramsGetResponse
from ..models.cloud_diagrams_search_request import CloudDiagramsSearchRequest, CloudDiagramsSearchRequestDict
from ..models.cloud_diagrams_search_response import CloudDiagramsSearchResponse
from ..models.diagram_relationships_response import DiagramRelationshipsResponse
from ..models.enums.depth import Depth, DepthOrStr
from ..models.enums.direction import Direction, DirectionOrStr
from ..models.enums.interval1 import Interval1OrStr
from ..models.enums.kind import Kind, KindOrStr
from ..models.enums.node_type1 import NodeType1OrStr
from ..models.enums.type10 import Type10OrStr
from ..models.find_cloud_diagrams_request import FindCloudDiagramsRequest, FindCloudDiagramsRequestDict
from ..models.find_cloud_diagrams_response import FindCloudDiagramsResponse
from ..server.server import Server


class CloudDiagrams:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CloudDiagramsWithRawResponse(client, server, auth)

    def export_cloud_diagram_json(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudDiagramExportJsonResponse:
        """Exports the full content of a diagram layer as a structured JSON document, including all components and
        export metadata.

        Args:
            id_: Layer ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram exported as JSON.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.export_cloud_diagram_json(id_, request_options=request_options))

    def find_cloud_diagrams(
        self,
        body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[FindCloudDiagramsResponse]:
        """Returns diagram URLs matching the provided resource IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram URLs matching the criteria returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.find_cloud_diagrams(body, request_options=request_options))

    def get_cloud_diagram_components(
        self,
        *,
        components: bool | None = None,
        external: bool | None = None,
        element: bool | None = None,
        link: bool | None = None,
        group: bool | None = None,
        note: bool | None = None,
        combiner: bool | None = None,
        type_: list[Type10OrStr] | None = None,
        node_type: NodeType1OrStr | None = None,
        alarms_count: bool | None = None,
        issues_count: bool | None = None,
        skip_empty: bool | None = None,
        exclude_default_vpc: bool | None = None,
        exclude_empty_subnets: bool | None = None,
        body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudDiagramsGetResponse:
        """Returns diagram and layer data. When the request body is empty, returns all diagrams the caller has access
        to. When the body is populated, returns full diagram data including layer components projected to key display
        and cloud fields.

        Args:
            components: Include components in the layer response.
            external: Include external (cross-diagram) components.
            element: Include elements.
            link: Include links.
            group: Include groups.
            note: Include notes.
            combiner: Include combiners.
            type_: Filter diagrams by type.
            node_type: Filter components by node type.
            alarms_count: Include alarm counts (default true).
            issues_count: Include issue counts.
            skip_empty: Omit diagrams that have no components.
            exclude_default_vpc: Exclude the default VPC group (default true).
            exclude_empty_subnets: Exclude empty subnet groups (default true).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram and component data returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_cloud_diagram_components(
                components=components,
                external=external,
                element=element,
                link=link,
                group=group,
                note=note,
                combiner=combiner,
                type_=type_,
                node_type=node_type,
                alarms_count=alarms_count,
                issues_count=issues_count,
                skip_empty=skip_empty,
                exclude_default_vpc=exclude_default_vpc,
                exclude_empty_subnets=exclude_empty_subnets,
                body=body,
                request_options=request_options,
            ),
        )

    def get_cloud_diagram_cost_snapshot(
        self,
        id_: str,
        start_date: Date,
        end_date: Date,
        *,
        interval: Interval1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudDiagramCostSnapshot:
        """Returns a bounded cost snapshot for the specified diagram layer over a date window. The response composes the
        diagram's total spend, period-over-period change, top resources by cost (capped at 5), top services by cost
        (capped at 5), and a trend series (most recent 12 buckets at the requested interval).

        Args:
            id_: Layer ID.
            start_date: Inclusive start of the cost window (ISO date, e.g. ``2026-04-01``).
            end_date: Inclusive end of the cost window (ISO date, e.g. ``2026-04-28``).
            interval: Bucket interval for the trend series. Defaults to ``day`` when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram cost snapshot returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_cloud_diagram_cost_snapshot(
                id_, start_date, end_date, interval=interval, request_options=request_options
            ),
        )

    def get_cloud_diagram_layer_snapshot(
        self, id_: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CloudDiagramLayerSnapshot:
        """Returns a single snapshot of the specified diagram layer identified by its ID.

        Args:
            id_: Layer ID.
            snapshot_id: Snapshot ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Snapshot returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_cloud_diagram_layer_snapshot(id_, snapshot_id, request_options=request_options)
        )

    def get_cloud_diagram_resource_relationships(
        self,
        id_: str,
        rid: str,
        *,
        direction: DirectionOrStr | None = Direction.BOTH,
        depth: DepthOrStr | None = Depth.DIRECT,
        kind: KindOrStr | None = Kind.EDGES,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DiagramRelationshipsResponse:
        """Walks the diagram graph from the anchor resource and returns related resources. Edge traversal walks the
        diagram's link set (same-scheme guard, BFS, cycle-safe); group traversal walks the group membership set. The
        result list is capped at 200 relations; ``truncated`` is ``true`` when the cap is hit. Read-only: does not
        mutate diagram state.

        Args:
            id_: Diagram (layer) ID.
            rid: Anchor resource ID — must exist as a node, element, or group on the diagram.
            direction: Edge direction relative to the anchor. ``both`` returns upstream and downstream neighbours.
                Defaults to ``both``.
            depth: ``direct`` returns one-hop neighbours; ``transitive`` runs a cycle-safe BFS to the connected
                component (still capped at 200 relations). Defaults to ``direct``.
            kind: ``edges`` walks the link graph; ``group_members`` walks group membership (children and parent groups);
                ``both`` merges the two and dedupes by id, preserving the smallest observed hop count. Defaults to
                ``edges``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Related resources returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). Not Found - The requested resource does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_cloud_diagram_resource_relationships(
                id_, rid, direction=direction, depth=depth, kind=kind, request_options=request_options
            ),
        )

    def get_cloud_diagrams_stats(
        self, start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[CloudDiagramStats]:
        """Returns a list of all diagrams with activity stats for the given time period.

        Args:
            start: Start of the period.
            end: End of the period.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of diagrams with stats returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_cloud_diagrams_stats(start, end, request_options=request_options))

    def get_statussheet_components(
        self,
        id_: str,
        body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict,
        *,
        p: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudDiagramStatussheetComponents:
        """Returns the specified components of a diagram layer. Provide at least one component type with one or more IDs
        in the request body (for example, ``node`` or ``element``).

        Args:
            id_: Layer ID.
            body: The request body.
            p: Space-separated projection fields for component documents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Layer components returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_statussheet_components(id_, body, p=p, request_options=request_options)
        )

    def list_cloud_diagram_activity_groups(
        self,
        ss_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        tags: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CloudDiagramSnapshotActivityGroup]:
        """Returns snapshot activity groups for the specified diagram layer, ordered by timestamp descending. Each group
        contains a snapshot reference and the individual activity records that belong to it.

        Args:
            ss_id: Layer ID.
            limit: Maximum number of groups to return (default 10).
            offset: Number of groups to skip (default 0).
            tags: Filter by tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Activity groups returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_cloud_diagram_activity_groups(
                ss_id, limit=limit, offset=offset, tags=tags, request_options=request_options
            ),
        )

    def list_cloud_diagram_layer_snapshots(
        self,
        id_: str,
        *,
        offset: int | None = None,
        limit: int | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CloudDiagramLayerSnapshot]:
        """Returns the list of saved snapshots for the specified diagram layer.

        Args:
            id_: Layer ID.
            offset: Number of snapshots to skip (default 0).
            limit: Maximum number of snapshots to return (default 10).
            sort: Sort expression (e.g. "-createdAt" for descending).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Snapshots returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_cloud_diagram_layer_snapshots(
                id_, offset=offset, limit=limit, sort=sort, request_options=request_options
            ),
        )

    def list_cloud_diagram_node_activities(
        self,
        ss_id: str,
        node_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[CloudDiagramNodeActivity]:
        """Returns individual activity records for the specified component node, ordered by timestamp descending.

        Args:
            ss_id: Layer ID.
            node_id: Node component ID.
            limit: Maximum number of records to return (default 50).
            offset: Number of records to skip (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Node activity records returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_cloud_diagram_node_activities(
                ss_id, node_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def search_cloud_diagrams(
        self,
        body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CloudDiagramsSearchResponse:
        """Full-text search across diagram layers, components by name, and components by property values. Returns three
        result categories: diagram (matching layers), component (matching components by name), and prop (matching
        components by property values).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Search results returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.search_cloud_diagrams(body, request_options=request_options))

    @property
    def with_raw_response(self) -> CloudDiagramsWithRawResponse:
        return self._with_raw_response


class AsyncCloudDiagrams:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCloudDiagramsWithRawResponse(client, server, auth)

    async def export_cloud_diagram_json(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudDiagramExportJsonResponse:
        """Exports the full content of a diagram layer as a structured JSON document, including all components and
        export metadata.

        Args:
            id_: Layer ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram exported as JSON.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.export_cloud_diagram_json(id_, request_options=request_options))

    async def find_cloud_diagrams(
        self,
        body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[FindCloudDiagramsResponse]:
        """Returns diagram URLs matching the provided resource IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram URLs matching the criteria returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.find_cloud_diagrams(body, request_options=request_options))

    async def get_cloud_diagram_components(
        self,
        *,
        components: bool | None = None,
        external: bool | None = None,
        element: bool | None = None,
        link: bool | None = None,
        group: bool | None = None,
        note: bool | None = None,
        combiner: bool | None = None,
        type_: list[Type10OrStr] | None = None,
        node_type: NodeType1OrStr | None = None,
        alarms_count: bool | None = None,
        issues_count: bool | None = None,
        skip_empty: bool | None = None,
        exclude_default_vpc: bool | None = None,
        exclude_empty_subnets: bool | None = None,
        body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudDiagramsGetResponse:
        """Returns diagram and layer data. When the request body is empty, returns all diagrams the caller has access
        to. When the body is populated, returns full diagram data including layer components projected to key display
        and cloud fields.

        Args:
            components: Include components in the layer response.
            external: Include external (cross-diagram) components.
            element: Include elements.
            link: Include links.
            group: Include groups.
            note: Include notes.
            combiner: Include combiners.
            type_: Filter diagrams by type.
            node_type: Filter components by node type.
            alarms_count: Include alarm counts (default true).
            issues_count: Include issue counts.
            skip_empty: Omit diagrams that have no components.
            exclude_default_vpc: Exclude the default VPC group (default true).
            exclude_empty_subnets: Exclude empty subnet groups (default true).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram and component data returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloud_diagram_components(
                components=components,
                external=external,
                element=element,
                link=link,
                group=group,
                note=note,
                combiner=combiner,
                type_=type_,
                node_type=node_type,
                alarms_count=alarms_count,
                issues_count=issues_count,
                skip_empty=skip_empty,
                exclude_default_vpc=exclude_default_vpc,
                exclude_empty_subnets=exclude_empty_subnets,
                body=body,
                request_options=request_options,
            ),
        )

    async def get_cloud_diagram_cost_snapshot(
        self,
        id_: str,
        start_date: Date,
        end_date: Date,
        *,
        interval: Interval1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudDiagramCostSnapshot:
        """Returns a bounded cost snapshot for the specified diagram layer over a date window. The response composes the
        diagram's total spend, period-over-period change, top resources by cost (capped at 5), top services by cost
        (capped at 5), and a trend series (most recent 12 buckets at the requested interval).

        Args:
            id_: Layer ID.
            start_date: Inclusive start of the cost window (ISO date, e.g. ``2026-04-01``).
            end_date: Inclusive end of the cost window (ISO date, e.g. ``2026-04-28``).
            interval: Bucket interval for the trend series. Defaults to ``day`` when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Diagram cost snapshot returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloud_diagram_cost_snapshot(
                id_, start_date, end_date, interval=interval, request_options=request_options
            ),
        )

    async def get_cloud_diagram_layer_snapshot(
        self, id_: str, snapshot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CloudDiagramLayerSnapshot:
        """Returns a single snapshot of the specified diagram layer identified by its ID.

        Args:
            id_: Layer ID.
            snapshot_id: Snapshot ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Snapshot returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloud_diagram_layer_snapshot(
                id_, snapshot_id, request_options=request_options
            ),
        )

    async def get_cloud_diagram_resource_relationships(
        self,
        id_: str,
        rid: str,
        *,
        direction: DirectionOrStr | None = Direction.BOTH,
        depth: DepthOrStr | None = Depth.DIRECT,
        kind: KindOrStr | None = Kind.EDGES,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DiagramRelationshipsResponse:
        """Walks the diagram graph from the anchor resource and returns related resources. Edge traversal walks the
        diagram's link set (same-scheme guard, BFS, cycle-safe); group traversal walks the group membership set. The
        result list is capped at 200 relations; ``truncated`` is ``true`` when the cap is hit. Read-only: does not
        mutate diagram state.

        Args:
            id_: Diagram (layer) ID.
            rid: Anchor resource ID — must exist as a node, element, or group on the diagram.
            direction: Edge direction relative to the anchor. ``both`` returns upstream and downstream neighbours.
                Defaults to ``both``.
            depth: ``direct`` returns one-hop neighbours; ``transitive`` runs a cycle-safe BFS to the connected
                component (still capped at 200 relations). Defaults to ``direct``.
            kind: ``edges`` walks the link graph; ``group_members`` walks group membership (children and parent groups);
                ``both`` merges the two and dedupes by id, preserving the smallest observed hop count. Defaults to
                ``edges``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Related resources returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). Not Found - The requested resource does not exist.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloud_diagram_resource_relationships(
                id_, rid, direction=direction, depth=depth, kind=kind, request_options=request_options
            ),
        )

    async def get_cloud_diagrams_stats(
        self, start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[CloudDiagramStats]:
        """Returns a list of all diagrams with activity stats for the given time period.

        Args:
            start: Start of the period.
            end: End of the period.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of diagrams with stats returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloud_diagrams_stats(start, end, request_options=request_options)
        )

    async def get_statussheet_components(
        self,
        id_: str,
        body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict,
        *,
        p: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudDiagramStatussheetComponents:
        """Returns the specified components of a diagram layer. Provide at least one component type with one or more IDs
        in the request body (for example, ``node`` or ``element``).

        Args:
            id_: Layer ID.
            body: The request body.
            p: Space-separated projection fields for component documents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Layer components returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_statussheet_components(id_, body, p=p, request_options=request_options)
        )

    async def list_cloud_diagram_activity_groups(
        self,
        ss_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        tags: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CloudDiagramSnapshotActivityGroup]:
        """Returns snapshot activity groups for the specified diagram layer, ordered by timestamp descending. Each group
        contains a snapshot reference and the individual activity records that belong to it.

        Args:
            ss_id: Layer ID.
            limit: Maximum number of groups to return (default 10).
            offset: Number of groups to skip (default 0).
            tags: Filter by tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Activity groups returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloud_diagram_activity_groups(
                ss_id, limit=limit, offset=offset, tags=tags, request_options=request_options
            ),
        )

    async def list_cloud_diagram_layer_snapshots(
        self,
        id_: str,
        *,
        offset: int | None = None,
        limit: int | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CloudDiagramLayerSnapshot]:
        """Returns the list of saved snapshots for the specified diagram layer.

        Args:
            id_: Layer ID.
            offset: Number of snapshots to skip (default 0).
            limit: Maximum number of snapshots to return (default 10).
            sort: Sort expression (e.g. "-createdAt" for descending).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Snapshots returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - Either the resource does not exist, or the caller is not
                authorized to access it. These two cases are deliberately indistinguishable to avoid information
                disclosure: the access guard runs before any existence check, so callers receive 403 (not 404) for
                unknown IDs on this endpoint. Used by Cloud Diagrams routes keyed by a path-param resource id (e.g.
                ``/clouddiagrams/v1/statussheet/{id}/...``). ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloud_diagram_layer_snapshots(
                id_, offset=offset, limit=limit, sort=sort, request_options=request_options
            ),
        )

    async def list_cloud_diagram_node_activities(
        self,
        ss_id: str,
        node_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[CloudDiagramNodeActivity]:
        """Returns individual activity records for the specified component node, ordered by timestamp descending.

        Args:
            ss_id: Layer ID.
            node_id: Node component ID.
            limit: Maximum number of records to return (default 50).
            offset: Number of records to skip (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Node activity records returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_cloud_diagram_node_activities(
                ss_id, node_id, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def search_cloud_diagrams(
        self,
        body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CloudDiagramsSearchResponse:
        """Full-text search across diagram layers, components by name, and components by property values. Returns three
        result categories: diagram (matching layers), component (matching components by name), and prop (matching
        components by property values).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Search results returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.search_cloud_diagrams(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCloudDiagramsWithRawResponse:
        return self._with_raw_response


class CloudDiagramsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def export_cloud_diagram_json(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudDiagramExportJsonResponse, ExportCloudDiagramJsonErrorBody]:
        """Exports the full content of a diagram layer as a structured JSON document, including all components and
        export metadata.

        Args:
            id_: Layer ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/export-json"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudDiagramExportJsonResponse],
            error_mapper=export_cloud_diagram_json_error_mapper,
            request_options=request_options,
        )

    def find_cloud_diagrams(
        self,
        body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FindCloudDiagramsResponse], FindCloudDiagramsErrorBody]:
        """Returns diagram URLs matching the provided resource IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/scheme/find"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindCloudDiagramsRequest | FindCloudDiagramsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[FindCloudDiagramsResponse]],
            error_mapper=find_cloud_diagrams_error_mapper,
            request_options=request_options,
        )

    def get_cloud_diagram_components(
        self,
        *,
        components: bool | None = None,
        external: bool | None = None,
        element: bool | None = None,
        link: bool | None = None,
        group: bool | None = None,
        note: bool | None = None,
        combiner: bool | None = None,
        type_: list[Type10OrStr] | None = None,
        node_type: NodeType1OrStr | None = None,
        alarms_count: bool | None = None,
        issues_count: bool | None = None,
        skip_empty: bool | None = None,
        exclude_default_vpc: bool | None = None,
        exclude_empty_subnets: bool | None = None,
        body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramsGetResponse, GetCloudDiagramComponentsErrorBody]:
        """Returns diagram and layer data. When the request body is empty, returns all diagrams the caller has access
        to. When the body is populated, returns full diagram data including layer components projected to key display
        and cloud fields.

        Args:
            components: Include components in the layer response.
            external: Include external (cross-diagram) components.
            element: Include elements.
            link: Include links.
            group: Include groups.
            note: Include notes.
            combiner: Include combiners.
            type_: Filter diagrams by type.
            node_type: Filter components by node type.
            alarms_count: Include alarm counts (default true).
            issues_count: Include issue counts.
            skip_empty: Omit diagrams that have no components.
            exclude_default_vpc: Exclude the default VPC group (default true).
            exclude_empty_subnets: Exclude empty subnet groups (default true).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/scheme/get"),
            query_params=[
                param[bool | None]("components", components),
                param[bool | None]("external", external),
                param[bool | None]("element", element),
                param[bool | None]("link", link),
                param[bool | None]("group", group),
                param[bool | None]("note", note),
                param[bool | None]("combiner", combiner),
                param[list[Type10OrStr] | None]("type", type_),
                param[NodeType1OrStr | None]("node_type", node_type),
                param[bool | None]("alarms_count", alarms_count),
                param[bool | None]("issues_count", issues_count),
                param[bool | None]("skip_empty", skip_empty),
                param[bool | None]("exclude_default_vpc", exclude_default_vpc),
                param[bool | None]("exclude_empty_subnets", exclude_empty_subnets),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudDiagramsGetResponse],
            error_mapper=get_cloud_diagram_components_error_mapper,
            request_options=request_options,
        )

    def get_cloud_diagram_cost_snapshot(
        self,
        id_: str,
        start_date: Date,
        end_date: Date,
        *,
        interval: Interval1OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramCostSnapshot, GetCloudDiagramCostSnapshotErrorBody]:
        """Returns a bounded cost snapshot for the specified diagram layer over a date window. The response composes the
        diagram's total spend, period-over-period change, top resources by cost (capped at 5), top services by cost
        (capped at 5), and a trend series (most recent 12 buckets at the requested interval).

        Args:
            id_: Layer ID.
            start_date: Inclusive start of the cost window (ISO date, e.g. ``2026-04-01``).
            end_date: Inclusive end of the cost window (ISO date, e.g. ``2026-04-28``).
            interval: Bucket interval for the trend series. Defaults to ``day`` when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/costs"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date]("startDate", start_date),
                param[Date]("endDate", end_date),
                param[Interval1OrStr | None]("interval", interval),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudDiagramCostSnapshot],
            error_mapper=get_cloud_diagram_cost_snapshot_error_mapper,
            request_options=request_options,
        )

    def get_cloud_diagram_layer_snapshot(
        self, id_: str, snapshot_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CloudDiagramLayerSnapshot, GetCloudDiagramLayerSnapshotErrorBody]:
        """Returns a single snapshot of the specified diagram layer identified by its ID.

        Args:
            id_: Layer ID.
            snapshot_id: Snapshot ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/snapshot"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str]("snapshot_id", snapshot_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudDiagramLayerSnapshot],
            error_mapper=get_cloud_diagram_layer_snapshot_error_mapper,
            request_options=request_options,
        )

    def get_cloud_diagram_resource_relationships(
        self,
        id_: str,
        rid: str,
        *,
        direction: DirectionOrStr | None = Direction.BOTH,
        depth: DepthOrStr | None = Depth.DIRECT,
        kind: KindOrStr | None = Kind.EDGES,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DiagramRelationshipsResponse, GetCloudDiagramResourceRelationshipsErrorBody]:
        """Walks the diagram graph from the anchor resource and returns related resources. Edge traversal walks the
        diagram's link set (same-scheme guard, BFS, cycle-safe); group traversal walks the group membership set. The
        result list is capped at 200 relations; ``truncated`` is ``true`` when the cap is hit. Read-only: does not
        mutate diagram state.

        Args:
            id_: Diagram (layer) ID.
            rid: Anchor resource ID — must exist as a node, element, or group on the diagram.
            direction: Edge direction relative to the anchor. ``both`` returns upstream and downstream neighbours.
                Defaults to ``both``.
            depth: ``direct`` returns one-hop neighbours; ``transitive`` runs a cycle-safe BFS to the connected
                component (still capped at 200 relations). Defaults to ``direct``.
            kind: ``edges`` walks the link graph; ``group_members`` walks group membership (children and parent groups);
                ``both`` merges the two and dedupes by id, preserving the smallest observed hop count. Defaults to
                ``edges``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/resources/{rid}/relationships"),
            path_params=[param[str]("id", id_), param[str]("rid", rid)],
            query_params=[
                param[DirectionOrStr | None]("direction", direction),
                param[DepthOrStr | None]("depth", depth),
                param[KindOrStr | None]("kind", kind),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DiagramRelationshipsResponse],
            error_mapper=get_cloud_diagram_resource_relationships_error_mapper,
            request_options=request_options,
        )

    def get_cloud_diagrams_stats(
        self, start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[CloudDiagramStats], GetCloudDiagramsStatsErrorBody]:
        """Returns a list of all diagrams with activity stats for the given time period.

        Args:
            start: Start of the period.
            end: End of the period.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/scheme/stats"),
            query_params=[param[RFC3339DateTime]("start", start), param[RFC3339DateTime]("end", end)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[CloudDiagramStats]],
            error_mapper=get_cloud_diagrams_stats_error_mapper,
            request_options=request_options,
        )

    def get_statussheet_components(
        self,
        id_: str,
        body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict,
        *,
        p: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramStatussheetComponents, GetStatussheetComponentsErrorBody]:
        """Returns the specified components of a diagram layer. Provide at least one component type with one or more IDs
        in the request body (for example, ``node`` or ``element``).

        Args:
            id_: Layer ID.
            body: The request body.
            p: Space-separated projection fields for component documents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/get"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("p", p)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudDiagramStatussheetComponents],
            error_mapper=get_statussheet_components_error_mapper,
            request_options=request_options,
        )

    def list_cloud_diagram_activity_groups(
        self,
        ss_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        tags: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CloudDiagramSnapshotActivityGroup], ListCloudDiagramActivityGroupsErrorBody]:
        """Returns snapshot activity groups for the specified diagram layer, ordered by timestamp descending. Each group
        contains a snapshot reference and the individual activity records that belong to it.

        Args:
            ss_id: Layer ID.
            limit: Maximum number of groups to return (default 10).
            offset: Number of groups to skip (default 0).
            tags: Filter by tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/activity"),
            query_params=[
                param[str]("ss_id", ss_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[list[str] | None]("tags", tags),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[CloudDiagramSnapshotActivityGroup]],
            error_mapper=list_cloud_diagram_activity_groups_error_mapper,
            request_options=request_options,
        )

    def list_cloud_diagram_layer_snapshots(
        self,
        id_: str,
        *,
        offset: int | None = None,
        limit: int | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CloudDiagramLayerSnapshot], ListCloudDiagramLayerSnapshotsErrorBody]:
        """Returns the list of saved snapshots for the specified diagram layer.

        Args:
            id_: Layer ID.
            offset: Number of snapshots to skip (default 0).
            limit: Maximum number of snapshots to return (default 10).
            sort: Sort expression (e.g. "-createdAt" for descending).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/snapshots"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("offset", offset), param[int | None]("limit", limit), param[str | None]("sort", sort)
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[CloudDiagramLayerSnapshot]],
            error_mapper=list_cloud_diagram_layer_snapshots_error_mapper,
            request_options=request_options,
        )

    def list_cloud_diagram_node_activities(
        self,
        ss_id: str,
        node_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CloudDiagramNodeActivity], ListCloudDiagramNodeActivitiesErrorBody]:
        """Returns individual activity records for the specified component node, ordered by timestamp descending.

        Args:
            ss_id: Layer ID.
            node_id: Node component ID.
            limit: Maximum number of records to return (default 50).
            offset: Number of records to skip (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/activity/node-activities"),
            query_params=[
                param[str]("ss_id", ss_id),
                param[str]("nodeId", node_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[list[CloudDiagramNodeActivity]],
            error_mapper=list_cloud_diagram_node_activities_error_mapper,
            request_options=request_options,
        )

    def search_cloud_diagrams(
        self,
        body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramsSearchResponse, SearchCloudDiagramsErrorBody]:
        """Full-text search across diagram layers, components by name, and components by property values. Returns three
        result categories: diagram (matching layers), component (matching components by name), and prop (matching
        components by property values).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/scheme/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CloudDiagramsSearchResponse],
            error_mapper=search_cloud_diagrams_error_mapper,
            request_options=request_options,
        )


class AsyncCloudDiagramsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def export_cloud_diagram_json(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudDiagramExportJsonResponse, ExportCloudDiagramJsonErrorBody]:
        """Exports the full content of a diagram layer as a structured JSON document, including all components and
        export metadata.

        Args:
            id_: Layer ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/export-json"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudDiagramExportJsonResponse],
            error_mapper=export_cloud_diagram_json_error_mapper,
            request_options=request_options,
        )

    async def find_cloud_diagrams(
        self,
        body: FindCloudDiagramsRequest | FindCloudDiagramsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[FindCloudDiagramsResponse], FindCloudDiagramsErrorBody]:
        """Returns diagram URLs matching the provided resource IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/scheme/find"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindCloudDiagramsRequest | FindCloudDiagramsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[FindCloudDiagramsResponse]],
            error_mapper=find_cloud_diagrams_error_mapper,
            request_options=request_options,
        )

    async def get_cloud_diagram_components(
        self,
        *,
        components: bool | None = None,
        external: bool | None = None,
        element: bool | None = None,
        link: bool | None = None,
        group: bool | None = None,
        note: bool | None = None,
        combiner: bool | None = None,
        type_: list[Type10OrStr] | None = None,
        node_type: NodeType1OrStr | None = None,
        alarms_count: bool | None = None,
        issues_count: bool | None = None,
        skip_empty: bool | None = None,
        exclude_default_vpc: bool | None = None,
        exclude_empty_subnets: bool | None = None,
        body: CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramsGetResponse, GetCloudDiagramComponentsErrorBody]:
        """Returns diagram and layer data. When the request body is empty, returns all diagrams the caller has access
        to. When the body is populated, returns full diagram data including layer components projected to key display
        and cloud fields.

        Args:
            components: Include components in the layer response.
            external: Include external (cross-diagram) components.
            element: Include elements.
            link: Include links.
            group: Include groups.
            note: Include notes.
            combiner: Include combiners.
            type_: Filter diagrams by type.
            node_type: Filter components by node type.
            alarms_count: Include alarm counts (default true).
            issues_count: Include issue counts.
            skip_empty: Omit diagrams that have no components.
            exclude_default_vpc: Exclude the default VPC group (default true).
            exclude_empty_subnets: Exclude empty subnet groups (default true).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/scheme/get"),
            query_params=[
                param[bool | None]("components", components),
                param[bool | None]("external", external),
                param[bool | None]("element", element),
                param[bool | None]("link", link),
                param[bool | None]("group", group),
                param[bool | None]("note", note),
                param[bool | None]("combiner", combiner),
                param[list[Type10OrStr] | None]("type", type_),
                param[NodeType1OrStr | None]("node_type", node_type),
                param[bool | None]("alarms_count", alarms_count),
                param[bool | None]("issues_count", issues_count),
                param[bool | None]("skip_empty", skip_empty),
                param[bool | None]("exclude_default_vpc", exclude_default_vpc),
                param[bool | None]("exclude_empty_subnets", exclude_empty_subnets),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudDiagramsGetRequest | CloudDiagramsGetRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudDiagramsGetResponse],
            error_mapper=get_cloud_diagram_components_error_mapper,
            request_options=request_options,
        )

    async def get_cloud_diagram_cost_snapshot(
        self,
        id_: str,
        start_date: Date,
        end_date: Date,
        *,
        interval: Interval1OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramCostSnapshot, GetCloudDiagramCostSnapshotErrorBody]:
        """Returns a bounded cost snapshot for the specified diagram layer over a date window. The response composes the
        diagram's total spend, period-over-period change, top resources by cost (capped at 5), top services by cost
        (capped at 5), and a trend series (most recent 12 buckets at the requested interval).

        Args:
            id_: Layer ID.
            start_date: Inclusive start of the cost window (ISO date, e.g. ``2026-04-01``).
            end_date: Inclusive end of the cost window (ISO date, e.g. ``2026-04-28``).
            interval: Bucket interval for the trend series. Defaults to ``day`` when omitted.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/costs"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Date]("startDate", start_date),
                param[Date]("endDate", end_date),
                param[Interval1OrStr | None]("interval", interval),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudDiagramCostSnapshot],
            error_mapper=get_cloud_diagram_cost_snapshot_error_mapper,
            request_options=request_options,
        )

    async def get_cloud_diagram_layer_snapshot(
        self, id_: str, snapshot_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CloudDiagramLayerSnapshot, GetCloudDiagramLayerSnapshotErrorBody]:
        """Returns a single snapshot of the specified diagram layer identified by its ID.

        Args:
            id_: Layer ID.
            snapshot_id: Snapshot ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/snapshot"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str]("snapshot_id", snapshot_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudDiagramLayerSnapshot],
            error_mapper=get_cloud_diagram_layer_snapshot_error_mapper,
            request_options=request_options,
        )

    async def get_cloud_diagram_resource_relationships(
        self,
        id_: str,
        rid: str,
        *,
        direction: DirectionOrStr | None = Direction.BOTH,
        depth: DepthOrStr | None = Depth.DIRECT,
        kind: KindOrStr | None = Kind.EDGES,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DiagramRelationshipsResponse, GetCloudDiagramResourceRelationshipsErrorBody]:
        """Walks the diagram graph from the anchor resource and returns related resources. Edge traversal walks the
        diagram's link set (same-scheme guard, BFS, cycle-safe); group traversal walks the group membership set. The
        result list is capped at 200 relations; ``truncated`` is ``true`` when the cap is hit. Read-only: does not
        mutate diagram state.

        Args:
            id_: Diagram (layer) ID.
            rid: Anchor resource ID — must exist as a node, element, or group on the diagram.
            direction: Edge direction relative to the anchor. ``both`` returns upstream and downstream neighbours.
                Defaults to ``both``.
            depth: ``direct`` returns one-hop neighbours; ``transitive`` runs a cycle-safe BFS to the connected
                component (still capped at 200 relations). Defaults to ``direct``.
            kind: ``edges`` walks the link graph; ``group_members`` walks group membership (children and parent groups);
                ``both`` merges the two and dedupes by id, preserving the smallest observed hop count. Defaults to
                ``edges``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/resources/{rid}/relationships"),
            path_params=[param[str]("id", id_), param[str]("rid", rid)],
            query_params=[
                param[DirectionOrStr | None]("direction", direction),
                param[DepthOrStr | None]("depth", depth),
                param[KindOrStr | None]("kind", kind),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DiagramRelationshipsResponse],
            error_mapper=get_cloud_diagram_resource_relationships_error_mapper,
            request_options=request_options,
        )

    async def get_cloud_diagrams_stats(
        self, start: RFC3339DateTime, end: RFC3339DateTime, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[CloudDiagramStats], GetCloudDiagramsStatsErrorBody]:
        """Returns a list of all diagrams with activity stats for the given time period.

        Args:
            start: Start of the period.
            end: End of the period.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/scheme/stats"),
            query_params=[param[RFC3339DateTime]("start", start), param[RFC3339DateTime]("end", end)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[CloudDiagramStats]],
            error_mapper=get_cloud_diagrams_stats_error_mapper,
            request_options=request_options,
        )

    async def get_statussheet_components(
        self,
        id_: str,
        body: CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict,
        *,
        p: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramStatussheetComponents, GetStatussheetComponentsErrorBody]:
        """Returns the specified components of a diagram layer. Provide at least one component type with one or more IDs
        in the request body (for example, ``node`` or ``element``).

        Args:
            id_: Layer ID.
            body: The request body.
            p: Space-separated projection fields for component documents.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/get"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("p", p)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudDiagramStatussheetGetRequest | CloudDiagramStatussheetGetRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudDiagramStatussheetComponents],
            error_mapper=get_statussheet_components_error_mapper,
            request_options=request_options,
        )

    async def list_cloud_diagram_activity_groups(
        self,
        ss_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        tags: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CloudDiagramSnapshotActivityGroup], ListCloudDiagramActivityGroupsErrorBody]:
        """Returns snapshot activity groups for the specified diagram layer, ordered by timestamp descending. Each group
        contains a snapshot reference and the individual activity records that belong to it.

        Args:
            ss_id: Layer ID.
            limit: Maximum number of groups to return (default 10).
            offset: Number of groups to skip (default 0).
            tags: Filter by tags.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/activity"),
            query_params=[
                param[str]("ss_id", ss_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[list[str] | None]("tags", tags),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[CloudDiagramSnapshotActivityGroup]],
            error_mapper=list_cloud_diagram_activity_groups_error_mapper,
            request_options=request_options,
        )

    async def list_cloud_diagram_layer_snapshots(
        self,
        id_: str,
        *,
        offset: int | None = None,
        limit: int | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CloudDiagramLayerSnapshot], ListCloudDiagramLayerSnapshotsErrorBody]:
        """Returns the list of saved snapshots for the specified diagram layer.

        Args:
            id_: Layer ID.
            offset: Number of snapshots to skip (default 0).
            limit: Maximum number of snapshots to return (default 10).
            sort: Sort expression (e.g. "-createdAt" for descending).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/statussheet/{id}/snapshots"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("offset", offset), param[int | None]("limit", limit), param[str | None]("sort", sort)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[CloudDiagramLayerSnapshot]],
            error_mapper=list_cloud_diagram_layer_snapshots_error_mapper,
            request_options=request_options,
        )

    async def list_cloud_diagram_node_activities(
        self,
        ss_id: str,
        node_id: str,
        *,
        limit: int | None = None,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[CloudDiagramNodeActivity], ListCloudDiagramNodeActivitiesErrorBody]:
        """Returns individual activity records for the specified component node, ordered by timestamp descending.

        Args:
            ss_id: Layer ID.
            node_id: Node component ID.
            limit: Maximum number of records to return (default 50).
            offset: Number of records to skip (default 0).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/clouddiagrams/v1/activity/node-activities"),
            query_params=[
                param[str]("ss_id", ss_id),
                param[str]("nodeId", node_id),
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[list[CloudDiagramNodeActivity]],
            error_mapper=list_cloud_diagram_node_activities_error_mapper,
            request_options=request_options,
        )

    async def search_cloud_diagrams(
        self,
        body: CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CloudDiagramsSearchResponse, SearchCloudDiagramsErrorBody]:
        """Full-text search across diagram layers, components by name, and components by property values. Returns three
        result categories: diagram (matching layers), component (matching components by name), and prop (matching
        components by property values).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/clouddiagrams/v1/scheme/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CloudDiagramsSearchRequest | CloudDiagramsSearchRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CloudDiagramsSearchResponse],
            error_mapper=search_cloud_diagrams_error_mapper,
            request_options=request_options,
        )
