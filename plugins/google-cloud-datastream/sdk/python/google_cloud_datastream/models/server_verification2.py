from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServerVerification2(SdkBaseModel):
    """If this field is set, the communication will be encrypted with TLS encryption and the server identity will be
    authenticated."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Required. Input only. PEM-encoded server root CA certificate."""

    server_certificate_hostname: Optional[str] = Field(default=UNSET, alias="serverCertificateHostname")
    """Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not
    provided, the hostname in the server certificate is not validated."""


class ServerVerification2Dict(TypedDict):
    ca_certificate: NotRequired[str]
    server_certificate_hostname: NotRequired[str]
