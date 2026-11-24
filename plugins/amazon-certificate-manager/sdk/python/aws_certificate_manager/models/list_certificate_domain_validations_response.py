from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain_validation_summary import DomainValidationSummary, DomainValidationSummaryDict


class ListCertificateDomainValidationsResponse(SdkBaseModel):
    domain_validation_summary_list: Optional[list[DomainValidationSummary]] = Field(
        default=UNSET, alias="DomainValidationSummaryList"
    )
    """A list of DomainValidationSummary objects, one for each domain on the certificate. Each object contains the
    domain name and its active and requested validation configurations."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the number of results exceeds MaxItems, this token is included in the response. Use this token in a subsequent
    ListCertificateDomainValidations request to retrieve the next page of results."""


class ListCertificateDomainValidationsResponseDict(TypedDict):
    domain_validation_summary_list: NotRequired[list[DomainValidationSummaryDict]]
    next_token: NotRequired[str]
