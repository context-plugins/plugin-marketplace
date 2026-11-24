from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExportCertificateResponse(SdkBaseModel):
    certificate: Optional[str] = Field(default=UNSET, alias="Certificate")
    """The base64 PEM-encoded certificate."""

    certificate_chain: Optional[str] = Field(default=UNSET, alias="CertificateChain")
    """The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting."""

    private_key: Optional[str] = Field(default=UNSET, alias="PrivateKey")
    """The encrypted private key associated with the public key in the certificate. The key is output in PKCS #8 format
    and is base64 PEM-encoded."""


class ExportCertificateResponseDict(TypedDict):
    certificate: NotRequired[str]
    certificate_chain: NotRequired[str]
    private_key: NotRequired[str]
