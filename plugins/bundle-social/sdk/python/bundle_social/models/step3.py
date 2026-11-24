from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Step3(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["SEND_PUBLIC_COMMENT_REPLY"] = Field(default="SEND_PUBLIC_COMMENT_REPLY", alias="type")
    text: str


class Step3Dict(TypedDict):
    id: NotRequired[str]
    type_: Literal["SEND_PUBLIC_COMMENT_REPLY"]
    text: str
