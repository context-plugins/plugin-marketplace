from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.comparator5 import Comparator5OrStr


class AudienceMatchFilter(SdkBaseModel):
    type_: Literal["audienceMatch"] = Field(default="audienceMatch", alias="type")
    comparator: Optional[Comparator5OrStr] = UNSET
    audiences: Optional[list[str]] = Field(default=UNSET, alias="_audiences")


class AudienceMatchFilterDict(TypedDict):
    type_: Literal["audienceMatch"]
    comparator: NotRequired[Comparator5OrStr]
    audiences: NotRequired[list[str]]
