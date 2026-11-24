from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Step(SdkBaseModel):
    wait_days: Optional[int] = UNSET
    subject: Optional[str] = UNSET
    body: Optional[str] = UNSET


class StepDict(TypedDict):
    wait_days: NotRequired[int]
    subject: NotRequired[str]
    body: NotRequired[str]
