from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_search_result import CertificateSearchResult, CertificateSearchResultDict


class SearchCertificatesResponse(SdkBaseModel):
    results: Optional[list[CertificateSearchResult]] = Field(default=UNSET, alias="Results")
    """A list of certificate search results containing certificate ARNs, X.509 attributes, and ACM metadata."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """When the list is truncated, this value is present and contains the value to use for the NextToken parameter in a
    subsequent pagination request."""


class SearchCertificatesResponseDict(TypedDict):
    results: NotRequired[list[CertificateSearchResultDict]]
    next_token: NotRequired[str]
