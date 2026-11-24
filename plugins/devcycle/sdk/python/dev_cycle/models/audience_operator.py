from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator import OperatorOrStr
from .unions.filter import Filter, FilterDict


class AudienceOperator(SdkBaseModel):
    filters: list[Filter]
    """Filters to apply using the "operator" operation"""

    operator: OperatorOrStr
    """Operator type if this object represents an operator, and not a filter"""


class AudienceOperatorDict(TypedDict):
    filters: list[FilterDict]
    operator: OperatorOrStr
