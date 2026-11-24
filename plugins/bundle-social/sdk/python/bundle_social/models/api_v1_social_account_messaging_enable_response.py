from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.messaging_status import MessagingStatusOrStr
from .enums.type9 import Type9OrStr


class ApiV1SocialAccountMessagingEnableResponse(SdkBaseModel):
    social_account_id: str = Field(alias="socialAccountId")
    type_: Type9OrStr = Field(alias="type")
    messaging_status: MessagingStatusOrStr = Field(alias="messagingStatus")
    messaging_last_error: str | None = Field(alias="messagingLastError")


class ApiV1SocialAccountMessagingEnableResponseDict(TypedDict):
    social_account_id: str
    type_: Type9OrStr
    messaging_status: MessagingStatusOrStr
    messaging_last_error: str | None
