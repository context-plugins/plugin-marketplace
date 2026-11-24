from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .action_notification import ActionNotification, ActionNotificationDict


class EventAction(SdkBaseModel):
    """Action that can be taken on event"""

    id: Optional[UUID] = UNSET
    """Global action identifier"""

    ts: Optional[RFC3339DateTime] = UNSET
    """Action create time in ISO format"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Action type"""

    finished: Optional[bool] = UNSET
    """Did action accomplished"""

    notification: Optional[ActionNotification] = UNSET
    """Action notification details"""


class EventActionDict(TypedDict):
    id: NotRequired[UUID]
    ts: NotRequired[RFC3339DateTime]
    type_: NotRequired[str]
    finished: NotRequired[bool]
    notification: NotRequired[ActionNotificationDict]
