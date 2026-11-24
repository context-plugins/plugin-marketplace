from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.notification_filter_type_dto import NotificationFilterTypeDtoOrStr
from .notification_filter_field_dto import NotificationFilterFieldDto, NotificationFilterFieldDtoDict


class NotificationFilterDto(SdkBaseModel):
    expression: Optional[NotificationFilterDto] = UNSET
    expressions: Optional[list[NotificationFilterDto]] = UNSET
    field: Optional[NotificationFilterFieldDto] = UNSET
    type_: NotificationFilterTypeDtoOrStr = Field(alias="type")
    value: Optional[str] = UNSET
    values: Optional[list[str]] = UNSET


class NotificationFilterDtoDict(TypedDict):
    expression: NotRequired[NotificationFilterDtoDict]
    expressions: NotRequired[list[NotificationFilterDtoDict]]
    field: NotRequired[NotificationFilterFieldDtoDict]
    type_: NotificationFilterTypeDtoOrStr
    value: NotRequired[str]
    values: NotRequired[list[str]]
