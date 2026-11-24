from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsage(SdkBaseModel):
    """Current usage and limits for this feature"""

    event_name: str | None = Field(alias="eventName")
    """The event name used to track usage for this feature"""

    current_usage: int = Field(alias="currentUsage")
    """The current usage quantity for this feature on the order"""

    limit: int | None
    """The usage limit for this feature (null if unlimited)"""

    is_unlimited: bool = Field(alias="isUnlimited")
    """Whether this feature has unlimited usage"""


class PlansCurrentGetResponsesContentApplicationJsonSchemaPlanFeaturesItemsUsageDict(TypedDict):
    event_name: str | None
    current_usage: int
    limit: int | None
    is_unlimited: bool
