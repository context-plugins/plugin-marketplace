from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.prevalidation_type import PrevalidationTypeOrStr
from .enums.status_aws_certificate_manager_acme_domain_validation_api import (
    StatusAwsCertificateManagerAcmeDomainValidationApiOrStr,
)
from .failure_details import FailureDetails, FailureDetailsDict
from .prevalidation_details import PrevalidationDetails, PrevalidationDetailsDict


class AcmeDomainValidationSummary(SdkBaseModel):
    acme_domain_validation_arn: Optional[str] = Field(default=UNSET, alias="AcmeDomainValidationArn")
    """The Amazon Resource Name (ARN) of the ACME domain validation."""

    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""

    domain_name: Optional[str] = Field(default=UNSET, alias="DomainName")
    """The domain name being validated."""

    prevalidation_type: Optional[PrevalidationTypeOrStr] = Field(default=UNSET, alias="PrevalidationType")
    """The type of prevalidation used."""

    prevalidation_details: Optional[PrevalidationDetails] = Field(default=UNSET, alias="PrevalidationDetails")
    """Exactly one member is set."""

    status: Optional[StatusAwsCertificateManagerAcmeDomainValidationApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the domain validation."""

    failure_details: Optional[FailureDetails] = Field(default=UNSET, alias="FailureDetails")
    created_at: Optional[str] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the domain validation was created."""

    updated_at: Optional[str] = Field(default=UNSET, alias="UpdatedAt")
    """The time at which the domain validation was last updated."""


class AcmeDomainValidationSummaryDict(TypedDict):
    acme_domain_validation_arn: NotRequired[str]
    acme_endpoint_arn: NotRequired[str]
    domain_name: NotRequired[str]
    prevalidation_type: NotRequired[PrevalidationTypeOrStr]
    prevalidation_details: NotRequired[PrevalidationDetailsDict]
    status: NotRequired[StatusAwsCertificateManagerAcmeDomainValidationApiOrStr]
    failure_details: NotRequired[FailureDetailsDict]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
