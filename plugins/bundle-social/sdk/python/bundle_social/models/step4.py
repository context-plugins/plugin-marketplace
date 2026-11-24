from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Step4(SdkBaseModel):
    id: Optional[str] = UNSET
    type_: Literal["LIKE_COMMENT"] = Field(default="LIKE_COMMENT", alias="type")


class Step4Dict(TypedDict):
    id: NotRequired[str]
    type_: Literal["LIKE_COMMENT"]
