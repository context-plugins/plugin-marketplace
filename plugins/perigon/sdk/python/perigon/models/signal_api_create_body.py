from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .complex_all_endpoint_query import ComplexAllEndpointQuery, ComplexAllEndpointQueryDict
from .entity_group import EntityGroup, EntityGroupDict
from .enums.classification_type2 import ClassificationType2OrStr
from .enums.status1_perigon_monitors_api import Status1PerigonMonitorsApiOrStr
from .signal_monitoring_plan_data_schema import SignalMonitoringPlanDataSchema, SignalMonitoringPlanDataSchemaDict
from .signal_monitoring_plan_newsletter_config import (
    SignalMonitoringPlanNewsletterConfig,
    SignalMonitoringPlanNewsletterConfigDict,
)
from .signal_schedule_policy import SignalSchedulePolicy, SignalSchedulePolicyDict
from .signal_x_query import SignalXQuery, SignalXQueryDict


class SignalApiCreateBody(SdkBaseModel):
    name: str
    """Display name for the monitor. Must be non-blank and at most 256 characters."""

    status: OptionalNullable[Status1PerigonMonitorsApiOrStr] = UNSET
    """Required initial monitor status. Accepts ACTIVE or DRAFT."""

    classification_type: ClassificationType2OrStr = Field(alias="classificationType")
    """How matching content is classified. Accepts EVENT, MENTIONS, or TOPIC."""

    monitoring_objective: str = Field(alias="monitoringObjective")
    """Plain-language objective that defines what the monitor tracks. Must be non-blank and at most 4,096 characters."""

    prompt: OptionalNullable[str] = UNSET
    """Optional instructions used to guide monitor processing. Limited to 8,192 characters."""

    data_schema: SignalMonitoringPlanDataSchema = Field(alias="dataSchema")
    """Schema for the structured data extracted into each matching event."""

    newsletter_config: Optional[SignalMonitoringPlanNewsletterConfig] = Field(default=UNSET, alias="newsletterConfig")
    entity_groups: OptionalNullable[list[EntityGroup]] = Field(default=UNSET, alias="entityGroups")
    """Entity groups the monitor should identify in matching content. Null is treated as an empty list."""

    query: ComplexAllEndpointQuery
    """Article search filters that determine which content the monitor evaluates."""

    schedule_policy: Optional[SignalSchedulePolicy] = Field(default=UNSET, alias="schedulePolicy")
    watchlist_id: OptionalNullable[int] = Field(default=UNSET, alias="watchlistId")
    """Numeric ID of a visible watchlist in the monitor's organization to associate with the monitor."""

    contact_point_ids: OptionalNullable[list[UUID]] = Field(default=UNSET, alias="contactPointIds")
    """UUIDs of verified, non-archived contact points that receive monitor notifications."""

    x_query: Optional[SignalXQuery] = Field(default=UNSET, alias="xQuery")


class SignalApiCreateBodyDict(TypedDict):
    name: str
    status: NotRequired[Status1PerigonMonitorsApiOrStr | None]
    classification_type: ClassificationType2OrStr
    monitoring_objective: str
    prompt: NotRequired[str | None]
    data_schema: SignalMonitoringPlanDataSchemaDict
    newsletter_config: NotRequired[SignalMonitoringPlanNewsletterConfigDict]
    entity_groups: NotRequired[list[EntityGroupDict] | None]
    query: ComplexAllEndpointQueryDict
    schedule_policy: NotRequired[SignalSchedulePolicyDict]
    watchlist_id: NotRequired[int | None]
    contact_point_ids: NotRequired[list[UUID] | None]
    x_query: NotRequired[SignalXQueryDict]
