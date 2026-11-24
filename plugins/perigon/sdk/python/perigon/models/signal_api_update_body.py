from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .complex_all_endpoint_query import ComplexAllEndpointQuery, ComplexAllEndpointQueryDict
from .entity_group import EntityGroup, EntityGroupDict
from .enums.classification_type1 import ClassificationType1OrStr
from .signal_monitoring_plan_data_schema import SignalMonitoringPlanDataSchema, SignalMonitoringPlanDataSchemaDict
from .signal_monitoring_plan_newsletter_config import (
    SignalMonitoringPlanNewsletterConfig,
    SignalMonitoringPlanNewsletterConfigDict,
)
from .signal_schedule_policy import SignalSchedulePolicy, SignalSchedulePolicyDict
from .signal_x_query import SignalXQuery, SignalXQueryDict


class SignalApiUpdateBody(SdkBaseModel):
    name: str
    """New display name for the monitor. Must be non-blank and at most 256 characters."""

    classification_type: ClassificationType1OrStr = Field(alias="classificationType")
    """New classification behavior. Accepts EVENT, MENTIONS, or TOPIC."""

    monitoring_objective: str = Field(alias="monitoringObjective")
    """New plain-language monitoring objective. Must be non-blank and at most 4,096 characters."""

    prompt: OptionalNullable[str] = UNSET
    """New instructions used to guide monitor processing. Limited to 8,192 characters and may be cleared with null."""

    data_schema: SignalMonitoringPlanDataSchema = Field(alias="dataSchema")
    """Schema for the structured data extracted into each matching event."""

    newsletter_config: Optional[SignalMonitoringPlanNewsletterConfig] = Field(default=UNSET, alias="newsletterConfig")
    entity_groups: list[EntityGroup] = Field(alias="entityGroups")
    """Replacement entity groups for the monitor. Send an empty list to remove all groups."""

    query: ComplexAllEndpointQuery
    """Article search filters that determine which content the monitor evaluates."""

    schedule_policy: Optional[SignalSchedulePolicy] = Field(default=UNSET, alias="schedulePolicy")
    watchlist_id: OptionalNullable[int] = Field(default=UNSET, alias="watchlistId")
    """Numeric ID of a visible watchlist in the monitor's organization to associate with the monitor."""

    contact_point_ids: list[UUID] = Field(alias="contactPointIds")
    """Replacement UUIDs of verified, non-archived contact points. Send an empty list to remove all contact points."""

    x_query: Optional[SignalXQuery] = Field(default=UNSET, alias="xQuery")


class SignalApiUpdateBodyDict(TypedDict):
    name: str
    classification_type: ClassificationType1OrStr
    monitoring_objective: str
    prompt: NotRequired[str | None]
    data_schema: SignalMonitoringPlanDataSchemaDict
    newsletter_config: NotRequired[SignalMonitoringPlanNewsletterConfigDict]
    entity_groups: list[EntityGroupDict]
    query: ComplexAllEndpointQueryDict
    schedule_policy: NotRequired[SignalSchedulePolicyDict]
    watchlist_id: NotRequired[int | None]
    contact_point_ids: list[UUID]
    x_query: NotRequired[SignalXQueryDict]
