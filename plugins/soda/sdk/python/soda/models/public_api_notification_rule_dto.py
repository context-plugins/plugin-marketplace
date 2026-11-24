from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.notification_rule_status_dto import NotificationRuleStatusDtoOrStr
from .enums.public_api_rule_type_dto import PublicApiRuleTypeDtoOrStr
from .notification_customization_dto import NotificationCustomizationDto, NotificationCustomizationDtoDict
from .notification_filter_dto import NotificationFilterDto, NotificationFilterDtoDict
from .notification_recipient_dto import NotificationRecipientDto, NotificationRecipientDtoDict


class PublicApiNotificationRuleDto(SdkBaseModel):
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    customization: Optional[NotificationCustomizationDto] = UNSET
    filter: Optional[NotificationFilterDto] = UNSET
    id: Optional[str] = UNSET
    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    last_triggered_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastTriggeredAt")
    name: Optional[str] = UNSET
    owner_id: Optional[str] = Field(default=UNSET, alias="ownerId")
    recipients: Optional[list[NotificationRecipientDto]] = UNSET
    rule_type: Optional[PublicApiRuleTypeDtoOrStr] = Field(default=UNSET, alias="ruleType")
    status: Optional[NotificationRuleStatusDtoOrStr] = UNSET
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class PublicApiNotificationRuleDtoDict(TypedDict):
    created_at: NotRequired[RFC3339DateTime]
    customization: NotRequired[NotificationCustomizationDtoDict]
    filter: NotRequired[NotificationFilterDtoDict]
    id: NotRequired[str]
    is_default: NotRequired[bool]
    last_triggered_at: NotRequired[RFC3339DateTime]
    name: NotRequired[str]
    owner_id: NotRequired[str]
    recipients: NotRequired[list[NotificationRecipientDtoDict]]
    rule_type: NotRequired[PublicApiRuleTypeDtoOrStr]
    status: NotRequired[NotificationRuleStatusDtoOrStr]
    updated_at: NotRequired[RFC3339DateTime]
