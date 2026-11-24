from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operation import OperationOrStr


class Action(SdkBaseModel):
    attribute_name: str = Field(alias="AttributeName")
    """The related time series that you are modifying. This value is case insensitive."""

    operation: OperationOrStr = Field(alias="Operation")
    """The operation that is applied to the provided attribute. Operations include: ADD - adds Value to all rows of
    AttributeName. SUBTRACT - subtracts Value from all rows of AttributeName. MULTIPLY - multiplies all rows of
    AttributeName by Value. DIVIDE - divides all rows of AttributeName by Value."""

    value: float = Field(alias="Value")
    """The value that is applied for the chosen Operation."""


class ActionDict(TypedDict):
    attribute_name: str
    operation: OperationOrStr
    value: float
