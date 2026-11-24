from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.combinator import CombinatorOrStr
from .rules import Rules, RulesDict


class DisplayRules(SdkBaseModel):
    id: str
    """Unique identifier for the display rule"""

    title: str
    """Human-readable title for the display rule"""

    combinator: CombinatorOrStr
    """Logical operator to combine multiple rules"""

    rules: Rules
    """Array of individual rules that define the conditions"""


class DisplayRulesDict(TypedDict):
    id: str
    title: str
    combinator: CombinatorOrStr
    rules: RulesDict
