from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Rules(SdkBaseModel):
    """Array of individual rules that define the conditions"""

    field: str
    """The field to evaluate the condition against"""

    operator: str
    """The comparison operator"""

    value: str
    """The value to compare against"""


class RulesDict(TypedDict):
    field: str
    operator: str
    value: str
