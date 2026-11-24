from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Seniority(SdkBaseModel):
    id: Optional[float] = UNSET
    value: Optional[str] = UNSET


class SeniorityDict(TypedDict):
    id: NotRequired[float]
    value: NotRequired[str]
