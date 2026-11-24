from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CompanyNameSearchRequest(SdkBaseModel):
    text: str
    """Search text for company name"""


class CompanyNameSearchRequestDict(TypedDict):
    text: str
