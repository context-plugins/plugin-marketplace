from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SupportSettings(SdkBaseModel):
    app_id: Optional[UUID] = Field(default=UNSET, alias="appId")
    support_url: Optional[str] = Field(default=UNSET, alias="supportUrl")
    support_email: Optional[EmailStr] = Field(default=UNSET, alias="supportEmail")
    support_phone: Optional[str] = Field(default=UNSET, alias="supportPhone")


class SupportSettingsDict(TypedDict):
    app_id: NotRequired[UUID]
    support_url: NotRequired[str]
    support_email: NotRequired[EmailStr]
    support_phone: NotRequired[str]
