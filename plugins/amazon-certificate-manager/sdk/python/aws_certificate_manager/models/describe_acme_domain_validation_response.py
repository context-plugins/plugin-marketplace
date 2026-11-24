from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acme_domain_validation import AcmeDomainValidation, AcmeDomainValidationDict


class DescribeAcmeDomainValidationResponse(SdkBaseModel):
    acme_domain_validation: Optional[AcmeDomainValidation] = Field(default=UNSET, alias="AcmeDomainValidation")


class DescribeAcmeDomainValidationResponseDict(TypedDict):
    acme_domain_validation: NotRequired[AcmeDomainValidationDict]
