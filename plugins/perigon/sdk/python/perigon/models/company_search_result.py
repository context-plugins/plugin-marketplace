from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .company import Company, CompanyDict


class CompanySearchResult(SdkBaseModel):
    """Company search result"""

    status: int
    num_results: int = Field(alias="numResults")
    results: list[Company]


class CompanySearchResultDict(TypedDict):
    status: int
    num_results: int
    results: list[CompanyDict]
