from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .prevalidation_options import PrevalidationOptions, PrevalidationOptionsDict


class UpdateAcmeDomainValidationRequest(SdkBaseModel):
    acme_domain_validation_arn: str = Field(alias="AcmeDomainValidationArn")
    """The Amazon Resource Name (ARN) of the ACME domain validation to update."""

    prevalidation_options: Optional[PrevalidationOptions] = Field(default=UNSET, alias="PrevalidationOptions")
    """Exactly one member is set."""


class UpdateAcmeDomainValidationRequestDict(TypedDict):
    acme_domain_validation_arn: str
    prevalidation_options: NotRequired[PrevalidationOptionsDict]
