from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Youtube2(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    permalink: OptionalNullable[str] = UNSET
    thumbnail: OptionalNullable[str] = UNSET
    session_uri: OptionalNullable[str] = Field(default=UNSET, alias="sessionUri")
    """YouTube resumable upload session URI for retry handling"""


class Youtube2Dict(TypedDict):
    id: NotRequired[str | None]
    permalink: NotRequired[str | None]
    thumbnail: NotRequired[str | None]
    session_uri: NotRequired[str | None]
