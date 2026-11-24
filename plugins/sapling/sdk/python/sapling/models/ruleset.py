from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rule1 import Rule1, Rule1Dict


class Ruleset(SdkBaseModel):
    created_at: Optional[str] = UNSET
    """Naive ISO 8601 timestamp (UTC, no offset)."""

    name: Optional[str] = UNSET
    rules: Optional[list[Rule1]] = UNSET
    updated_at: Optional[str] = UNSET
    """Naive ISO 8601 timestamp (UTC, no offset)."""


class RulesetDict(TypedDict):
    created_at: NotRequired[str]
    name: NotRequired[str]
    rules: NotRequired[list[Rule1Dict]]
    updated_at: NotRequired[str]
