from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConfirmTarget(SdkBaseModel):
    """The typed confirmation a destructive (Tier C) operation requires. A mismatch is 409 and changes nothing."""

    confirm: str
    """The exact target value this operation names in its description. A boolean true is rejected by the strict schema,
    so a bare confirmation can never stand in for a typed one."""


class ConfirmTargetDict(TypedDict):
    confirm: str
