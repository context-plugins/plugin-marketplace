from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OracleSslConfig1(SdkBaseModel):
    """Optional. SSL configuration for the Oracle connection."""

    ca_certificate_set: Optional[bool] = Field(default=UNSET, alias="caCertificateSet")
    """Output only. Indicates whether the ca_certificate field has been set for this Connection-Profile."""

    server_certificate_distinguished_name: Optional[str] = Field(
        default=UNSET, alias="serverCertificateDistinguishedName"
    )
    """Optional. The distinguished name (DN) mentioned in the server certificate. This corresponds to SSL_SERVER_CERT_DN
    sqlnet parameter. Refer
    https://docs.oracle.com/en/database/oracle/oracle-database/19/netrf/local-naming-parameters-in-tns-ora-file.html#GUID-70AB0695-A9AA-4A94-B141-4C605236EEB7
    If this field is not provided, the DN matching is not enforced."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Input only. PEM-encoded certificate of the CA that signed the source database server's certificate."""


class OracleSslConfig1Dict(TypedDict):
    ca_certificate_set: NotRequired[bool]
    server_certificate_distinguished_name: NotRequired[str]
    ca_certificate: NotRequired[str]
