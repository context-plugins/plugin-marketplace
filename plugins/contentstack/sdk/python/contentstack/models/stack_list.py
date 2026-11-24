from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stack import Stack, StackDict


class StackList(SdkBaseModel):
    """A list of stacks."""

    stacks: Optional[list[Stack]] = UNSET
    """Array of stack objects."""


class StackListDict(TypedDict):
    stacks: NotRequired[list[StackDict]]
