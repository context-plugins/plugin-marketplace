from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .domain_validation import DomainValidation, DomainValidationDict
from .enums.renewal_status2 import RenewalStatus2OrStr
from .enums.renewal_status_reason import RenewalStatusReasonOrStr


class RenewalSummary(SdkBaseModel):
    renewal_status: RenewalStatus2OrStr = Field(alias="RenewalStatus")
    """The status of ACM's managed renewal of the certificate."""

    domain_validation_options: list[DomainValidation] = Field(alias="DomainValidationOptions")
    """Contains information about the validation of each domain name in the certificate, as it pertains to ACM's managed
    renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.
    This field exists only when the certificate type is AMAZON_ISSUED."""

    renewal_status_reason: Optional[RenewalStatusReasonOrStr] = Field(default=UNSET, alias="RenewalStatusReason")
    """The reason that a renewal request was unsuccessful."""

    updated_at: RFC3339DateTime = Field(alias="UpdatedAt")
    """The time at which the renewal summary was last updated."""


class RenewalSummaryDict(TypedDict):
    renewal_status: RenewalStatus2OrStr
    domain_validation_options: list[DomainValidationDict]
    renewal_status_reason: NotRequired[RenewalStatusReasonOrStr]
    updated_at: RFC3339DateTime
