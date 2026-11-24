from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action import ActionOrStr
from .google_analytics_admin_v1_beta_change_history_change_change_history_resource1 import (
    GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1,
    GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1Dict,
)
from .google_analytics_admin_v1_beta_change_history_change_change_history_resource3 import (
    GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3,
    GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3Dict,
)


class GoogleAnalyticsAdminV1BetaChangeHistoryChange(SdkBaseModel):
    """A description of a change to a single Google Analytics resource."""

    resource_after_change: Optional[GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3] = Field(
        default=UNSET, alias="resourceAfterChange"
    )
    """Resource contents from after the change was made. If this resource was deleted in this change, this field will be
    missing."""

    resource: Optional[str] = UNSET
    """Resource name of the resource whose changes are described by this entry."""

    resource_before_change: Optional[GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1] = Field(
        default=UNSET, alias="resourceBeforeChange"
    )
    """Resource contents from before the change was made. If this resource was created in this change, this field will
    be missing."""

    action: Optional[ActionOrStr] = UNSET
    """The type of action that changed this resource."""


class GoogleAnalyticsAdminV1BetaChangeHistoryChangeDict(TypedDict):
    resource_after_change: NotRequired[GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource3Dict]
    resource: NotRequired[str]
    resource_before_change: NotRequired[GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource1Dict]
    action: NotRequired[ActionOrStr]
