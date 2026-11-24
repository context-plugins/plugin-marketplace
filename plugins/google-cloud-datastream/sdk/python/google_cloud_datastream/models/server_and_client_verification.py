from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServerAndClientVerification(SdkBaseModel):
    """Message represents the option where Datastream will enforce the encryption and authenticate the server identity
    as well as the client identity. ca_certificate, client_certificate and client_key must be set if user selects this
    option."""

    client_certificate: Optional[str] = Field(default=UNSET, alias="clientCertificate")
    """Required. Input only. PEM-encoded certificate used by the source database to authenticate the client identity
    (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or
    one or more intermediate certificates (which is stored with the leaf certificate) to link the this certificate to
    the trusted root certificate."""

    server_certificate_hostname: Optional[str] = Field(default=UNSET, alias="serverCertificateHostname")
    """Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. If this field is not
    provided, the hostname in the server certificate is not validated."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Required. Input only. PEM-encoded server root CA certificate."""

    client_key: Optional[str] = Field(default=UNSET, alias="clientKey")
    """Optional. Input only. PEM-encoded private key associated with the client certificate. This value will be used
    during the SSL/TLS handshake, allowing the PostgreSQL server to authenticate the client's identity, i.e. identity of
    the Datastream."""


class ServerAndClientVerificationDict(TypedDict):
    client_certificate: NotRequired[str]
    server_certificate_hostname: NotRequired[str]
    ca_certificate: NotRequired[str]
    client_key: NotRequired[str]
