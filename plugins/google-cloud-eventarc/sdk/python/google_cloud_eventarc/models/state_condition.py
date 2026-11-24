from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class StateCondition(SdkBaseModel):
    """A condition that is part of the trigger state computation."""

    message: Optional[str] = UNSET
    """Human-readable message."""

    code: Optional[CodeOrStr] = UNSET
    """The canonical code of the condition."""


class StateConditionDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[CodeOrStr]
