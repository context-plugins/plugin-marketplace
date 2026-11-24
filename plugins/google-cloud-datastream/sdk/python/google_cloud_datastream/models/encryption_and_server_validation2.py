from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EncryptionAndServerValidation2(SdkBaseModel):
    """If set, Datastream will enforce encryption and authenticate server identity."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate."""

    server_certificate_hostname: Optional[str] = Field(default=UNSET, alias="serverCertificateHostname")
    """Optional. The hostname mentioned in the Subject or SAN extension of the server certificate. This field is used
    for bypassing the hostname validation while verifying server certificate. This is required for scenarios where the
    host name that datastream connects to is different from the certificate's subject. This specifically happens for
    private connectivity. It could also happen when the customer provides a public IP in connection profile but the same
    is not present in the server certificate."""


class EncryptionAndServerValidation2Dict(TypedDict):
    ca_certificate: NotRequired[str]
    server_certificate_hostname: NotRequired[str]
