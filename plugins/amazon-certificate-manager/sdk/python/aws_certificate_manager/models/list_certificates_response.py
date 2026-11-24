from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_summary import CertificateSummary, CertificateSummaryDict


class ListCertificatesResponse(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """When the list is truncated, this value is present and contains the value to use for the NextToken parameter in a
    subsequent pagination request."""

    certificate_summary_list: Optional[list[CertificateSummary]] = Field(default=UNSET, alias="CertificateSummaryList")
    """A list of ACM certificates."""


class ListCertificatesResponseDict(TypedDict):
    next_token: NotRequired[str]
    certificate_summary_list: NotRequired[list[CertificateSummaryDict]]
