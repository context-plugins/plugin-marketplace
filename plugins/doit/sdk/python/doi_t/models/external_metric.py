from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type2_doi_t_reports_api import Type2DoiTReportsApiOrStr


class ExternalMetric(SdkBaseModel):
    """Metric selector used in reports and filters."""

    type_: Type2DoiTReportsApiOrStr = Field(alias="type")
    """Type of metric to use."""

    value: str
    """For basic metrics, the value can be one of: ["cost", "usage", "savings"] If using custom metrics, the value must
    refer to an existing custom metric ID."""


class ExternalMetricDict(TypedDict):
    type_: Type2DoiTReportsApiOrStr
    value: str
