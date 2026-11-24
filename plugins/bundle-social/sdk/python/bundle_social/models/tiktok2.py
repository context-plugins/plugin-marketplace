from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Tiktok2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    share_id: OptionalNullable[str] = Field(default=UNSET, alias="shareId")
    request_id: OptionalNullable[str] = Field(default=UNSET, alias="requestId")
    permalink: OptionalNullable[str] = UNSET
    status: OptionalNullable[str] = UNSET


class Tiktok2Dict(TypedDict):
    id: NotRequired[str | None]
    share_id: NotRequired[str | None]
    request_id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    status: NotRequired[str | None]
