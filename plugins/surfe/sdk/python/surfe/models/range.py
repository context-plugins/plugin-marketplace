from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Range(SdkBaseModel):
    from_: Optional[int] = Field(default=UNSET, alias="from")
    to: Optional[int] = UNSET


class RangeDict(TypedDict):
    from_: NotRequired[int]
    to: NotRequired[int]
