from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .allocation_doi_t_anomalies_api import AllocationDoiTAnomaliesApi, AllocationDoiTAnomaliesApiDict
from .anomaly_resource import AnomalyResource, AnomalyResourceDict
from .anomaly_sku import AnomalySku, AnomalySkuDict
from .enums.deactivation_reason import DeactivationReasonOrStr
from .enums.monitor_level import MonitorLevelOrStr
from .enums.status import StatusOrStr
from .notification_event import NotificationEvent, NotificationEventDict


class AnomalyItem(SdkBaseModel):
    """Detailed information about a detected anomaly. The ``notifications`` array is always present; list responses
    return an empty array unless ``includeNotifications=true`` is requested."""

    attribution: str
    """Deprecated: use 'allocations' instead. Name of the anomaly's primary allocation. Can be empty even when
    ``allocations`` is not, so it may differ from the first entry of ``allocations``."""

    allocations: list[AllocationDoiTAnomaliesApi]
    """Every allocation the anomaly belongs to, primary allocation first. Allocations that no longer exist are left out.
    Anomalies with a single allocation return a one-item list. Some older anomalies have no allocation recorded and
    return an empty list."""

    billing_account: str = Field(alias="billingAccount")
    """Billing account ID."""

    cost_of_anomaly: float = Field(alias="costOfAnomaly")
    """Excess cost over and above the expected normal cost."""

    actual_cost: OptionalNullable[float] = Field(default=UNSET, alias="actualCost")
    """Observed (actual) cost of the anomaly."""

    expected_max_cost: OptionalNullable[float] = Field(default=UNSET, alias="expectedMaxCost")
    """Maximum cost within the expected normal range."""

    id: Optional[str] = UNSET
    platform: str
    """Cloud Provider name."""

    scope: str
    """The anomaly's project or account identifier as reported by the provider. For providers whose billing grain is not
    a cloud project — a user or an organization, for example — this is that identifier, so treat it as an opaque id and
    use ``entityLabel``/``entityName`` for presentation."""

    entity_label: Optional[str] = Field(default=UNSET, alias="entityLabel")
    """Connector-declared name for what ``scope`` identifies, for example "Project", "Account" or "User". Absent when
    the provider publishes no display profile."""

    entity_name: Optional[str] = Field(default=UNSET, alias="entityName")
    """Human-readable value for ``scope`` when the provider publishes one — for example a user's email address where
    ``scope`` is an opaque user id. Absent when unavailable."""

    provider_display_name: Optional[str] = Field(default=UNSET, alias="providerDisplayName")
    """Connector-declared display name for the provider, for example "Anthropic (Analytics API)". Absent when the
    provider publishes no display profile."""

    service_name: str = Field(alias="serviceName")
    """Service name."""

    severity_level: str = Field(alias="severityLevel")
    """Severity level: ``information``, ``warning``, or ``critical``."""

    start_time: int = Field(alias="startTime")
    """Usage start time of the anomaly."""

    end_time: OptionalNullable[int] = Field(default=UNSET, alias="endTime")
    """End of the anomaly."""

    deactivation_reason: OptionalNullable[DeactivationReasonOrStr] = Field(default=UNSET, alias="deactivationReason")
    """Why the anomaly stopped being active. ``reverted`` means the cost returned inside the expected normal range;
    ``expired`` means the anomaly was deactivated without the cost returning inside that range; ``unknown`` means the
    reason could not be determined. Null while the anomaly is still active."""

    time_frame: str = Field(alias="timeFrame")
    """Timeframe: Daily or Hourly"""

    top3_skus: list[AnomalySku] = Field(alias="top3SKUs")
    """Array of SKU entries contributing to an anomaly."""

    monitor_level: MonitorLevelOrStr = Field(alias="monitorLevel")
    """Whether the anomaly was detected on a single SKU (``sku``) or at the level of a whole service (``service``)."""

    resource_data: Optional[list[AnomalyResource]] = Field(default=UNSET, alias="resourceData")
    """Array of resources contributing to an anomaly."""

    status: OptionalNullable[StatusOrStr] = UNSET
    acknowledged: Optional[bool] = UNSET
    """Has the anomaly been acknowledged"""

    acknowledged_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="acknowledgedAt")
    """When the anomaly was first acknowledged"""

    acknowledged_by: OptionalNullable[str] = Field(default=UNSET, alias="acknowledgedBy")
    """Email of the user who first acknowledged the anomaly"""

    notifications: list[NotificationEvent]
    """Chronologically ordered notification dispatch events."""

    initial_notifications: list[NotificationEvent] = Field(alias="initialNotifications")
    """The first notification sent on each channel (email, Slack, Microsoft Teams) for this anomaly, without reminders,
    ordered by timestamp. Always present; empty when the anomaly has not been notified."""

    linked_anomalies: list[str] = Field(alias="linkedAnomalies")
    """IDs of the other related anomalies in the same service around same time. Always the complete group: the filters,
    time window, and pagination of the request that returned this anomaly do not narrow it, so an ID here may not appear
    among the anomalies of that same response."""


class AnomalyItemDict(TypedDict):
    attribution: str
    allocations: list[AllocationDoiTAnomaliesApiDict]
    billing_account: str
    cost_of_anomaly: float
    actual_cost: NotRequired[float | None]
    expected_max_cost: NotRequired[float | None]
    id: NotRequired[str]
    platform: str
    scope: str
    entity_label: NotRequired[str]
    entity_name: NotRequired[str]
    provider_display_name: NotRequired[str]
    service_name: str
    severity_level: str
    start_time: int
    end_time: NotRequired[int | None]
    deactivation_reason: NotRequired[DeactivationReasonOrStr | None]
    time_frame: str
    top3_skus: list[AnomalySkuDict]
    monitor_level: MonitorLevelOrStr
    resource_data: NotRequired[list[AnomalyResourceDict]]
    status: NotRequired[StatusOrStr | None]
    acknowledged: NotRequired[bool]
    acknowledged_at: NotRequired[RFC3339DateTime | None]
    acknowledged_by: NotRequired[str | None]
    notifications: list[NotificationEventDict]
    initial_notifications: list[NotificationEventDict]
    linked_anomalies: list[str]
