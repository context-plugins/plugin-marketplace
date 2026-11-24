from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .category_reporting_reports_api import CategoryReportingReportsApi, CategoryReportingReportsApiDict
from .location_reporting_reports_api import LocationReportingReportsApi, LocationReportingReportsApiDict
from .merchant_reporting_reports_api import MerchantReportingReportsApi, MerchantReportingReportsApiDict


class Enrich(SdkBaseModel):
    clean_description: str = Field(alias="cleanDescription")
    tags: Any
    category: CategoryReportingReportsApi
    location: LocationReportingReportsApi
    merchant: MerchantReportingReportsApi


class EnrichDict(TypedDict):
    clean_description: str
    tags: Any
    category: CategoryReportingReportsApiDict
    location: LocationReportingReportsApiDict
    merchant: MerchantReportingReportsApiDict
