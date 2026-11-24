from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.op import OpOrStr


class Operation(SdkBaseModel):
    op: OpOrStr
    """The operation type."""

    path: Optional[str] = UNSET
    """The attribute path to operate on."""

    value: Optional[Any] = UNSET
    """The value to set for add and replace operations."""


class OperationDict(TypedDict):
    op: OpOrStr
    path: NotRequired[str]
    value: NotRequired[Any]
