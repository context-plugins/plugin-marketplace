from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.notification_rule_status_dto import NotificationRuleStatusDtoOrStr
from .enums.public_api_rule_type_dto import PublicApiRuleTypeDtoOrStr
from .notification_customization_dto import NotificationCustomizationDto, NotificationCustomizationDtoDict
from .notification_filter_dto import NotificationFilterDto, NotificationFilterDtoDict
from .notification_recipient_dto import NotificationRecipientDto, NotificationRecipientDtoDict


class PublicApiNotificationRuleRequestDto(SdkBaseModel):
    customization: Optional[NotificationCustomizationDto] = UNSET
    filter: Optional[NotificationFilterDto] = UNSET
    name: str
    recipients: list[NotificationRecipientDto]
    rule_type: PublicApiRuleTypeDtoOrStr = Field(alias="ruleType")
    status: Optional[NotificationRuleStatusDtoOrStr] = UNSET


class PublicApiNotificationRuleRequestDtoDict(TypedDict):
    customization: NotRequired[NotificationCustomizationDtoDict]
    filter: NotRequired[NotificationFilterDtoDict]
    name: str
    recipients: list[NotificationRecipientDtoDict]
    rule_type: PublicApiRuleTypeDtoOrStr
    status: NotRequired[NotificationRuleStatusDtoOrStr]
