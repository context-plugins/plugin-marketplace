from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .step import Step, StepDict


class SequenceInput(SdkBaseModel):
    name: str
    channel: Optional[str] = UNSET
    connection: Optional[str] = UNSET
    trigger: Optional[Any] = UNSET
    exit_when: Optional[list[Any]] = UNSET
    steps: list[Step]
    enroll_existing: Optional[bool] = UNSET
    enabled: Optional[bool] = UNSET


class SequenceInputDict(TypedDict):
    name: str
    channel: NotRequired[str]
    connection: NotRequired[str]
    trigger: NotRequired[Any]
    exit_when: NotRequired[list[Any]]
    steps: list[StepDict]
    enroll_existing: NotRequired[bool]
    enabled: NotRequired[bool]
