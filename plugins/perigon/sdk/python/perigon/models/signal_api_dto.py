from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .complex_all_endpoint_query import ComplexAllEndpointQuery, ComplexAllEndpointQueryDict
from .entity_group import EntityGroup, EntityGroupDict
from .enums.classification_type import ClassificationTypeOrStr
from .enums.status_perigon_monitors_api import StatusPerigonMonitorsApiOrStr
from .signal_monitoring_plan_data_schema import SignalMonitoringPlanDataSchema, SignalMonitoringPlanDataSchemaDict
from .signal_monitoring_plan_newsletter_config import (
    SignalMonitoringPlanNewsletterConfig,
    SignalMonitoringPlanNewsletterConfigDict,
)
from .signal_schedule_policy import SignalSchedulePolicy, SignalSchedulePolicyDict
from .signal_x_query import SignalXQuery, SignalXQueryDict


class SignalApiDto(SdkBaseModel):
    """Monitor payload."""

    uuid: OptionalNullable[UUID] = UNSET
    """Unique identifier for the monitor."""

    name: OptionalNullable[str] = UNSET
    """Display name of the monitor."""

    created_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    """Date and time the monitor was created, in ISO 8601 format."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Date and time the monitor was last updated, in ISO 8601 format."""

    status: OptionalNullable[StatusPerigonMonitorsApiOrStr] = UNSET
    """Current lifecycle status: DRAFT, ACTIVE, STOPPED, or ARCHIVED."""

    classification_type: OptionalNullable[ClassificationTypeOrStr] = Field(default=UNSET, alias="classificationType")
    """How matching content is classified: EVENT, MENTIONS, or TOPIC."""

    monitoring_objective: OptionalNullable[str] = Field(default=UNSET, alias="monitoringObjective")
    """Plain-language objective that defines what the monitor tracks."""

    prompt: OptionalNullable[str] = UNSET
    """Optional instructions used to guide monitor processing."""

    data_schema: Optional[SignalMonitoringPlanDataSchema] = Field(default=UNSET, alias="dataSchema")
    newsletter_config: Optional[SignalMonitoringPlanNewsletterConfig] = Field(default=UNSET, alias="newsletterConfig")
    entity_groups: OptionalNullable[list[EntityGroup]] = Field(default=UNSET, alias="entityGroups")
    """Entity groups the monitor identifies in matching content."""

    query: Optional[ComplexAllEndpointQuery] = UNSET
    schedule_policy: Optional[SignalSchedulePolicy] = Field(default=UNSET, alias="schedulePolicy")
    watchlist_id: OptionalNullable[int] = Field(default=UNSET, alias="watchlistId")
    """Numeric ID of the watchlist associated with the monitor, if any."""

    contact_point_ids: OptionalNullable[list[UUID]] = Field(default=UNSET, alias="contactPointIds")
    """UUIDs of contact points configured to receive monitor notifications."""

    x_query: Optional[SignalXQuery] = Field(default=UNSET, alias="xQuery")


class SignalApiDtoDict(TypedDict):
    uuid: NotRequired[UUID | None]
    name: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    status: NotRequired[StatusPerigonMonitorsApiOrStr | None]
    classification_type: NotRequired[ClassificationTypeOrStr | None]
    monitoring_objective: NotRequired[str | None]
    prompt: NotRequired[str | None]
    data_schema: NotRequired[SignalMonitoringPlanDataSchemaDict]
    newsletter_config: NotRequired[SignalMonitoringPlanNewsletterConfigDict]
    entity_groups: NotRequired[list[EntityGroupDict] | None]
    query: NotRequired[ComplexAllEndpointQueryDict]
    schedule_policy: NotRequired[SignalSchedulePolicyDict]
    watchlist_id: NotRequired[int | None]
    contact_point_ids: NotRequired[list[UUID] | None]
    x_query: NotRequired[SignalXQueryDict]
