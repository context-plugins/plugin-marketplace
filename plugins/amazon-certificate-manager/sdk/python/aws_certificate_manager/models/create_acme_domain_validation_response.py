from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateAcmeDomainValidationResponse(SdkBaseModel):
    acme_domain_validation_arn: str = Field(alias="AcmeDomainValidationArn")
    """The Amazon Resource Name (ARN) of the created domain validation."""


class CreateAcmeDomainValidationResponseDict(TypedDict):
    acme_domain_validation_arn: str
