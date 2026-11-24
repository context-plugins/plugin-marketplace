from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeAcmeDomainValidationRequest(SdkBaseModel):
    acme_domain_validation_arn: str = Field(alias="AcmeDomainValidationArn")
    """The Amazon Resource Name (ARN) of the ACME domain validation."""


class DescribeAcmeDomainValidationRequestDict(TypedDict):
    acme_domain_validation_arn: str
