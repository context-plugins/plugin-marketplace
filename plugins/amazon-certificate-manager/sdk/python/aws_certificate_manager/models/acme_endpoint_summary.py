from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_authority import CertificateAuthority, CertificateAuthorityDict
from .enums.authorization_behavior import AuthorizationBehaviorOrStr
from .enums.contact import ContactOrStr
from .enums.status_aws_certificate_manager_acme_endpoint_api import StatusAwsCertificateManagerAcmeEndpointApiOrStr
from .tag_model import TagModel, TagModelDict


class AcmeEndpointSummary(SdkBaseModel):
    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""

    endpoint_url: Optional[str] = Field(default=UNSET, alias="EndpointUrl")
    """The URL of the ACME endpoint."""

    status: Optional[StatusAwsCertificateManagerAcmeEndpointApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the ACME endpoint."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """The reason the ACME endpoint failed, if applicable."""

    authorization_behavior: Optional[AuthorizationBehaviorOrStr] = Field(default=UNSET, alias="AuthorizationBehavior")
    """The authorization behavior of the ACME endpoint."""

    contact: Optional[ContactOrStr] = Field(default=UNSET, alias="Contact")
    """Whether ACME clients must provide contact information during account registration."""

    certificate_authority: Optional[CertificateAuthority] = Field(default=UNSET, alias="CertificateAuthority")
    """Exactly one member is set."""

    certificate_tags: Optional[list[TagModel]] = Field(default=UNSET, alias="CertificateTags")
    """Tags applied to certificates issued through this ACME endpoint."""

    created_at: Optional[str] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the ACME endpoint was created."""

    updated_at: Optional[str] = Field(default=UNSET, alias="UpdatedAt")
    """The time at which the ACME endpoint was last updated."""


class AcmeEndpointSummaryDict(TypedDict):
    acme_endpoint_arn: NotRequired[str]
    endpoint_url: NotRequired[str]
    status: NotRequired[StatusAwsCertificateManagerAcmeEndpointApiOrStr]
    failure_reason: NotRequired[str]
    authorization_behavior: NotRequired[AuthorizationBehaviorOrStr]
    contact: NotRequired[ContactOrStr]
    certificate_authority: NotRequired[CertificateAuthorityDict]
    certificate_tags: NotRequired[list[TagModelDict]]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
