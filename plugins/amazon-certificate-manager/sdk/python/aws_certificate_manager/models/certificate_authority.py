from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .public_certificate_authority import PublicCertificateAuthority, PublicCertificateAuthorityDict


class CertificateAuthority(SdkBaseModel):
    """Exactly one member is set."""

    public_certificate_authority: Optional[PublicCertificateAuthority] = Field(
        default=UNSET, alias="PublicCertificateAuthority"
    )


class CertificateAuthorityDict(TypedDict):
    public_certificate_authority: NotRequired[PublicCertificateAuthorityDict]
