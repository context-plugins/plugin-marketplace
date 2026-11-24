from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.actor_type import ActorTypeOrStr
from .google_analytics_admin_v1_beta_change_history_change import (
    GoogleAnalyticsAdminV1BetaChangeHistoryChange,
    GoogleAnalyticsAdminV1BetaChangeHistoryChangeDict,
)


class GoogleAnalyticsAdminV1BetaChangeHistoryEvent(SdkBaseModel):
    """A set of changes within a Google Analytics account or its child properties that resulted from the same cause.
    Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google
    Analytics system changes."""

    id: Optional[str] = UNSET
    """ID of this change history event. This ID is unique across Google Analytics."""

    change_time: Optional[str] = Field(default=UNSET, alias="changeTime")
    """Time when change was made."""

    actor_type: Optional[ActorTypeOrStr] = Field(default=UNSET, alias="actorType")
    """The type of actor that made this change."""

    user_actor_email: Optional[str] = Field(default=UNSET, alias="userActorEmail")
    """Email address of the Google account that made the change. This will be a valid email address if the actor field
    is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error."""

    changes_filtered: Optional[bool] = Field(default=UNSET, alias="changesFiltered")
    """If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this
    event."""

    changes: Optional[list[GoogleAnalyticsAdminV1BetaChangeHistoryChange]] = UNSET
    """A list of changes made in this change history event that fit the filters specified in
    SearchChangeHistoryEventsRequest."""


class GoogleAnalyticsAdminV1BetaChangeHistoryEventDict(TypedDict):
    id: NotRequired[str]
    change_time: NotRequired[str]
    actor_type: NotRequired[ActorTypeOrStr]
    user_actor_email: NotRequired[str]
    changes_filtered: NotRequired[bool]
    changes: NotRequired[list[GoogleAnalyticsAdminV1BetaChangeHistoryChangeDict]]
