from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EndDate(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    year: Optional[int] = UNSET
    month: Optional[int] = UNSET
    day: Optional[int] = UNSET


class EndDateDict(TypedDict):
    year: NotRequired[int]
    month: NotRequired[int]
    day: NotRequired[int]
