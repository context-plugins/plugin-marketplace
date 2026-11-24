from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_authority import CertificateAuthority, CertificateAuthorityDict
from .enums.authorization_behavior2 import AuthorizationBehavior2OrStr
from .enums.contact3 import Contact3OrStr


class UpdateAcmeEndpointRequest(SdkBaseModel):
    acme_endpoint_arn: str = Field(alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint to update."""

    authorization_behavior: Optional[AuthorizationBehavior2OrStr] = Field(default=UNSET, alias="AuthorizationBehavior")
    """The updated authorization behavior."""

    contact: Optional[Contact3OrStr] = Field(default=UNSET, alias="Contact")
    """The updated contact requirement."""

    certificate_authority: Optional[CertificateAuthority] = Field(default=UNSET, alias="CertificateAuthority")
    """Exactly one member is set."""


class UpdateAcmeEndpointRequestDict(TypedDict):
    acme_endpoint_arn: str
    authorization_behavior: NotRequired[AuthorizationBehavior2OrStr]
    contact: NotRequired[Contact3OrStr]
    certificate_authority: NotRequired[CertificateAuthorityDict]
