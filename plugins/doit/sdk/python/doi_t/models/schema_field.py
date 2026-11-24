from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.aggregation1 import Aggregation1OrStr
from .enums.type7_doi_t_reports_api import Type7DoiTReportsApiOrStr
from .enums.unit2 import Unit2OrStr


class SchemaField(SdkBaseModel):
    """Schema of a report result column."""

    id: Optional[str] = UNSET
    """Stable allocation-group ID used to select the allocation dimension in report configurations. Omitted for other
    report columns."""

    name: Optional[str] = UNSET
    """Column name. Matches the corresponding value position in each row."""

    type_: Optional[Type7DoiTReportsApiOrStr] = Field(default=UNSET, alias="type")
    """Wire-format type of the column values. Dimension columns use string; metric columns use float (cost, usage,
    saving, custom, and extended metrics) or integer (count aggregation). Time-series reports include a timestamp
    column."""

    unit: Optional[Unit2OrStr] = UNSET
    """Semantic unit of the column values."""

    currency: Optional[str] = UNSET
    """Effective ISO 4217 currency code when unit is currency."""

    aggregation: Optional[Aggregation1OrStr] = UNSET
    """Authoritative aggregation applied to this metric column."""


class SchemaFieldDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[Type7DoiTReportsApiOrStr]
    unit: NotRequired[Unit2OrStr]
    currency: NotRequired[str]
    aggregation: NotRequired[Aggregation1OrStr]
