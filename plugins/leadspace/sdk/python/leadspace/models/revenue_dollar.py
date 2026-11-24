from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RevenueDollar(SdkBaseModel):
    exact: Optional[float] = UNSET
    range_: Optional[str] = Field(default=UNSET, alias="range")


class RevenueDollarDict(TypedDict):
    exact: NotRequired[float]
    range_: NotRequired[str]
