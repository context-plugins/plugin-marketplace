from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .notification_recipient import NotificationRecipient, NotificationRecipientDict


class ApplicationsEnvironmentsNotificationsResponse(SdkBaseModel):
    value: Optional[list[NotificationRecipient]] = UNSET


class ApplicationsEnvironmentsNotificationsResponseDict(TypedDict):
    value: NotRequired[list[NotificationRecipientDict]]
