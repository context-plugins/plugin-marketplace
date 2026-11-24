from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CompanyIdentifiersBatch(SdkBaseModel):
    domains: Optional[list[str]] = UNSET
    linkedin_urls: Optional[list[str]] = Field(default=UNSET, alias="linkedinUrls")


class CompanyIdentifiersBatchDict(TypedDict):
    domains: NotRequired[list[str]]
    linkedin_urls: NotRequired[list[str]]
