from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode import ModeOrStr


class Delivery2(SdkBaseModel):
    mode: Optional[ModeOrStr] = UNSET
    status: Optional[str] = UNSET
    download_url: Optional[str] = Field(default=UNSET, alias="downloadUrl")


class Delivery2Dict(TypedDict):
    mode: NotRequired[ModeOrStr]
    status: NotRequired[str]
    download_url: NotRequired[str]
