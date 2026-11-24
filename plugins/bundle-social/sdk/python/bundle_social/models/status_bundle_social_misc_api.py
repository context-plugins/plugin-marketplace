from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatusBundleSocialMiscApi(SdkBaseModel):
    privacy_status: Optional[str] = Field(default=UNSET, alias="privacyStatus")


class StatusBundleSocialMiscApiDict(TypedDict):
    privacy_status: NotRequired[str]
