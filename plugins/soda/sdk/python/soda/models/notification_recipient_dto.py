from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.notification_recipient_role_dto import NotificationRecipientRoleDtoOrStr
from .enums.notification_recipient_type_dto import NotificationRecipientTypeDtoOrStr
from .notification_recipient_trigger_dto import NotificationRecipientTriggerDto, NotificationRecipientTriggerDtoDict


class NotificationRecipientDto(SdkBaseModel):
    custom_role_id: Optional[str] = Field(default=UNSET, alias="customRoleId")
    email: Optional[str] = UNSET
    integration_channel: Optional[str] = Field(default=UNSET, alias="integrationChannel")
    integration_id: Optional[str] = Field(default=UNSET, alias="integrationId")
    role: Optional[NotificationRecipientRoleDtoOrStr] = UNSET
    triggers: list[NotificationRecipientTriggerDto]
    type_: NotificationRecipientTypeDtoOrStr = Field(alias="type")
    user_group_id: Optional[str] = Field(default=UNSET, alias="userGroupId")
    user_id: Optional[str] = Field(default=UNSET, alias="userId")


class NotificationRecipientDtoDict(TypedDict):
    custom_role_id: NotRequired[str]
    email: NotRequired[str]
    integration_channel: NotRequired[str]
    integration_id: NotRequired[str]
    role: NotRequired[NotificationRecipientRoleDtoOrStr]
    triggers: list[NotificationRecipientTriggerDtoDict]
    type_: NotificationRecipientTypeDtoOrStr
    user_group_id: NotRequired[str]
    user_id: NotRequired[str]
