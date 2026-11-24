from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.condition import ConditionOrStr


class Filter(SdkBaseModel):
    key: str = Field(alias="Key")
    """The name of the parameter to filter on."""

    value: str = Field(alias="Value")
    """The value to match."""

    condition: ConditionOrStr = Field(alias="Condition")
    """The condition to apply. To include the objects that match the statement, specify IS. To exclude matching objects,
    specify IS_NOT."""


class FilterDict(TypedDict):
    key: str
    value: str
    condition: ConditionOrStr
