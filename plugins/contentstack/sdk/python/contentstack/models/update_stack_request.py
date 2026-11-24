from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stack1 import Stack1, Stack1Dict


class UpdateStackRequest(SdkBaseModel):
    """Fields to update on the stack."""

    stack: Optional[Stack1] = UNSET


class UpdateStackRequestDict(TypedDict):
    stack: NotRequired[Stack1Dict]
