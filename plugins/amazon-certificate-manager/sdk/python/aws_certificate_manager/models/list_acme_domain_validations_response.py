from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_domain_validation_summary import AcmeDomainValidationSummary, AcmeDomainValidationSummaryDict


class ListAcmeDomainValidationsResponse(SdkBaseModel):
    acme_domain_validations: Optional[list[AcmeDomainValidationSummary]] = Field(
        default=UNSET, alias="AcmeDomainValidations"
    )
    """The list of domain validations."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token for pagination."""


class ListAcmeDomainValidationsResponseDict(TypedDict):
    acme_domain_validations: NotRequired[list[AcmeDomainValidationSummaryDict]]
    next_token: NotRequired[str]
