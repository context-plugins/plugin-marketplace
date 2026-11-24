from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1MonitorsRequest(SdkBaseModel):
    entity_id: str
    webhook_url: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET


class V1MonitorsRequestDict(TypedDict):
    entity_id: str
    webhook_url: NotRequired[str]
    email: NotRequired[EmailStr]
