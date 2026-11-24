from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .case_expression1 import CaseExpression1, CaseExpression1Dict
from .case_expression3 import CaseExpression3, CaseExpression3Dict
from .concatenate_expression2 import ConcatenateExpression2, ConcatenateExpression2Dict


class DimensionExpression(SdkBaseModel):
    """Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1)
    lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2)."""

    concatenate: Optional[ConcatenateExpression2] = UNSET
    """Used to combine dimension values to a single dimension. For example, dimension "country, city":
    concatenate(country, ", ", city)."""

    lower_case: Optional[CaseExpression3] = Field(default=UNSET, alias="lowerCase")
    """Used to convert a dimension value to lower case."""

    upper_case: Optional[CaseExpression1] = Field(default=UNSET, alias="upperCase")
    """Used to convert a dimension value to upper case."""


class DimensionExpressionDict(TypedDict):
    concatenate: NotRequired[ConcatenateExpression2Dict]
    lower_case: NotRequired[CaseExpression3Dict]
    upper_case: NotRequired[CaseExpression1Dict]
