from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_authority import CertificateAuthority, CertificateAuthorityDict
from .enums.contact2 import Contact2OrStr
from .tag_model import TagModel, TagModelDict


class CreateAcmeEndpointRequest(SdkBaseModel):
    idempotency_token: Optional[str] = Field(default=UNSET, alias="IdempotencyToken")
    """A unique, case-sensitive identifier to ensure idempotency of the request."""

    authorization_behavior: Literal["PRE_APPROVED"] = Field(default="PRE_APPROVED", alias="AuthorizationBehavior")
    """The authorization behavior for the ACME endpoint."""

    contact: Optional[Contact2OrStr] = Field(default=UNSET, alias="Contact")
    """Specifies whether ACME clients must provide contact information during account registration."""

    certificate_authority: CertificateAuthority = Field(alias="CertificateAuthority")
    """Exactly one member is set."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """One or more tags to associate with the ACME endpoint."""

    certificate_tags: Optional[list[TagModel]] = Field(default=UNSET, alias="CertificateTags")
    """Tags to apply to certificates issued through this ACME endpoint."""


class CreateAcmeEndpointRequestDict(TypedDict):
    idempotency_token: NotRequired[str]
    authorization_behavior: Literal["PRE_APPROVED"]
    contact: NotRequired[Contact2OrStr]
    certificate_authority: CertificateAuthorityDict
    tags: NotRequired[list[TagModelDict]]
    certificate_tags: NotRequired[list[TagModelDict]]
