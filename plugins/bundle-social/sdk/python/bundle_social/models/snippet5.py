from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Snippet5(SdkBaseModel):
    channel_id: Optional[str] = Field(default=UNSET, alias="channelId")
    title: Optional[str] = UNSET
    assignable: Optional[bool] = UNSET


class Snippet5Dict(TypedDict):
    channel_id: NotRequired[str]
    title: NotRequired[str]
    assignable: NotRequired[bool]
