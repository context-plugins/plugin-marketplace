from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class VersionDetails(SdkBaseModel):
    version: Optional[str] = UNSET
    """Current version number"""

    grace_period_start_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="gracePeriodStartDate")
    """When the grace period starts for the current major version"""

    enforced_update_period_start_date: Optional[RFC3339DateTime] = Field(
        default=UNSET, alias="enforcedUpdatePeriodStartDate"
    )
    """When the enforced update period starts"""


class VersionDetailsDict(TypedDict):
    version: NotRequired[str]
    grace_period_start_date: NotRequired[RFC3339DateTime]
    enforced_update_period_start_date: NotRequired[RFC3339DateTime]
