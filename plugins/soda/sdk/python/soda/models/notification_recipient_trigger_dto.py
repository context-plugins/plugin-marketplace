from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.notification_level_dto import NotificationLevelDtoOrStr
from .enums.notification_scan_state_dto import NotificationScanStateDtoOrStr
from .enums.notification_trigger_type_dto import NotificationTriggerTypeDtoOrStr


class NotificationRecipientTriggerDto(SdkBaseModel):
    level: Optional[NotificationLevelDtoOrStr] = UNSET
    scan_state: Optional[NotificationScanStateDtoOrStr] = Field(default=UNSET, alias="scanState")
    type_: NotificationTriggerTypeDtoOrStr = Field(alias="type")


class NotificationRecipientTriggerDtoDict(TypedDict):
    level: NotRequired[NotificationLevelDtoOrStr]
    scan_state: NotRequired[NotificationScanStateDtoOrStr]
    type_: NotificationTriggerTypeDtoOrStr
