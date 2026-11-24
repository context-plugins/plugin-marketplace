from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .between_filter2 import BetweenFilter2, BetweenFilter2Dict
from .in_list_filter2 import InListFilter2, InListFilter2Dict
from .numeric_filter2 import NumericFilter2, NumericFilter2Dict
from .string_filter2 import StringFilter2, StringFilter2Dict


class Filter(SdkBaseModel):
    """An expression to filter dimension or metric values."""

    field_name: Optional[str] = Field(default=UNSET, alias="fieldName")
    """The dimension name or metric name. In most methods, dimensions & metrics can be used for the first time in this
    field. However in a RunPivotReportRequest, this field must be additionally specified by name in the
    RunPivotReportRequest's dimensions or metrics."""

    between_filter: Optional[BetweenFilter2] = Field(default=UNSET, alias="betweenFilter")
    """A filter for two values."""

    in_list_filter: Optional[InListFilter2] = Field(default=UNSET, alias="inListFilter")
    """A filter for in list values."""

    numeric_filter: Optional[NumericFilter2] = Field(default=UNSET, alias="numericFilter")
    """A filter for numeric or date values."""

    string_filter: Optional[StringFilter2] = Field(default=UNSET, alias="stringFilter")
    """Strings related filter."""

    empty_filter: Optional[Any] = Field(default=UNSET, alias="emptyFilter")
    """A filter for empty values such as ``(not set)`` and ``""`` values."""


class FilterDict(TypedDict):
    field_name: NotRequired[str]
    between_filter: NotRequired[BetweenFilter2Dict]
    in_list_filter: NotRequired[InListFilter2Dict]
    numeric_filter: NotRequired[NumericFilter2Dict]
    string_filter: NotRequired[StringFilter2Dict]
    empty_filter: NotRequired[Any]
