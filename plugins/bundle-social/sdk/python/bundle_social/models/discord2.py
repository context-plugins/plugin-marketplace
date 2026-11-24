from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Discord2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    channel_id: OptionalNullable[str] = Field(default=UNSET, alias="channelId")


class Discord2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    channel_id: NotRequired[str | None]
