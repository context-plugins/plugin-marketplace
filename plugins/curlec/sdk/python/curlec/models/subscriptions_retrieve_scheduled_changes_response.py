from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubscriptionsRetrieveScheduledChangesResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    entity: Optional[str] = UNSET
    change_scheduled_at: Optional[int] = UNSET
    status: Optional[str] = UNSET
    subscription_id: Optional[str] = UNSET
    plan_id: Optional[str] = UNSET


class SubscriptionsRetrieveScheduledChangesResponseDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[str]
    change_scheduled_at: NotRequired[int]
    status: NotRequired[str]
    subscription_id: NotRequired[str]
    plan_id: NotRequired[str]
