from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runner import Runner, RunnerDict


class RunnerResponse(SdkBaseModel):
    items: Optional[list[Runner]] = UNSET
    """List of runners"""


class RunnerResponseDict(TypedDict):
    items: NotRequired[list[RunnerDict]]
