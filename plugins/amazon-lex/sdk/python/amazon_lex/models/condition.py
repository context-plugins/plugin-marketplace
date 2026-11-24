from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Condition(SdkBaseModel):
    expression_string: str = Field(alias="expressionString")
    """The expression string that is evaluated."""


class ConditionDict(TypedDict):
    expression_string: str
