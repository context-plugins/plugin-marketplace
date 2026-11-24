from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.notification_filter_field_type_dto import NotificationFilterFieldTypeDtoOrStr


class NotificationFilterFieldDto(SdkBaseModel):
    attribute_name: Optional[str] = Field(default=UNSET, alias="attributeName")
    field: NotificationFilterFieldTypeDtoOrStr


class NotificationFilterFieldDtoDict(TypedDict):
    attribute_name: NotRequired[str]
    field: NotificationFilterFieldTypeDtoOrStr
