from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MysqlSslConfig1(SdkBaseModel):
    """SSL configuration for the MySQL connection."""

    client_key: Optional[str] = Field(default=UNSET, alias="clientKey")
    """Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then
    the 'client_certificate' and the 'ca_certificate' fields are mandatory."""

    client_certificate: Optional[str] = Field(default=UNSET, alias="clientCertificate")
    """Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source
    database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory."""

    client_certificate_set: Optional[bool] = Field(default=UNSET, alias="clientCertificateSet")
    """Output only. Indicates whether the client_certificate field is set."""

    ca_certificate_set: Optional[bool] = Field(default=UNSET, alias="caCertificateSet")
    """Output only. Indicates whether the ca_certificate field is set."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Input only. PEM-encoded certificate of the CA that signed the source database server's certificate."""

    client_key_set: Optional[bool] = Field(default=UNSET, alias="clientKeySet")
    """Output only. Indicates whether the client_key field is set."""


class MysqlSslConfig1Dict(TypedDict):
    client_key: NotRequired[str]
    client_certificate: NotRequired[str]
    client_certificate_set: NotRequired[bool]
    ca_certificate_set: NotRequired[bool]
    ca_certificate: NotRequired[str]
    client_key_set: NotRequired[bool]
