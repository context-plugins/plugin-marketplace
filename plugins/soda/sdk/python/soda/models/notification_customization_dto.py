from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.notification_customization_type_dto import NotificationCustomizationTypeDtoOrStr


class NotificationCustomizationDto(SdkBaseModel):
    message: Optional[str] = UNSET
    type_: NotificationCustomizationTypeDtoOrStr = Field(alias="type")


class NotificationCustomizationDtoDict(TypedDict):
    message: NotRequired[str]
    type_: NotificationCustomizationTypeDtoOrStr
