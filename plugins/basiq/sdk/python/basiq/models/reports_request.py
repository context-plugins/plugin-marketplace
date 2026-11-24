from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .filter import Filter, FilterDict


class ReportsRequest(SdkBaseModel):
    report_type: str = Field(alias="reportType")
    title: str
    filters: list[Filter]


class ReportsRequestDict(TypedDict):
    report_type: str
    title: str
    filters: list[FilterDict]
