from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .record_day_boolean_or_undefined import RecordDayBooleanOrUndefined, RecordDayBooleanOrUndefinedDict


class Expression(SdkBaseModel):
    days: RecordDayBooleanOrUndefined
    """Construct a type with a set of properties K of type T"""

    time: str


class ExpressionDict(TypedDict):
    days: RecordDayBooleanOrUndefinedDict
    time: str
