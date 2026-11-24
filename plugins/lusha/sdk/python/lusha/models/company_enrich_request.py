from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyEnrichRequest(SdkBaseModel):
    request_id: str = Field(alias="requestId")
    """The requestId from the Prospecting Search response"""

    companies_ids: list[str] = Field(alias="companiesIds")
    """An array of company IDs for enrichment. Min 1, max 100."""


class CompanyEnrichRequestDict(TypedDict):
    request_id: str
    companies_ids: list[str]
