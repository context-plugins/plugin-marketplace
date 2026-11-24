from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MongodbSslConfig2(SdkBaseModel):
    """Optional. SSL configuration for the MongoDB connection."""

    client_certificate: Optional[str] = Field(default=UNSET, alias="clientCertificate")
    """Optional. Input only. PEM-encoded certificate that will be used by the replica to authenticate against the source
    database server. If this field is used then the 'client_key' and the 'ca_certificate' fields are mandatory."""

    client_certificate_set: Optional[bool] = Field(default=UNSET, alias="clientCertificateSet")
    """Output only. Indicates whether the client_certificate field is set."""

    client_key_set: Optional[bool] = Field(default=UNSET, alias="clientKeySet")
    """Output only. Indicates whether the client_key field is set."""

    ca_certificate_set: Optional[bool] = Field(default=UNSET, alias="caCertificateSet")
    """Output only. Indicates whether the ca_certificate field is set."""

    ca_certificate: Optional[str] = Field(default=UNSET, alias="caCertificate")
    """Optional. Input only. PEM-encoded certificate of the CA that signed the source database server's certificate."""

    secret_manager_stored_client_key: Optional[str] = Field(default=UNSET, alias="secretManagerStoredClientKey")
    """Optional. Input only. A reference to a Secret Manager resource name storing the PEM-encoded private key
    associated with the Client Certificate. If this field is used then the 'client_certificate' and the 'ca_certificate'
    fields are mandatory. Mutually exclusive with the ``client_key`` field."""

    client_key: Optional[str] = Field(default=UNSET, alias="clientKey")
    """Optional. Input only. PEM-encoded private key associated with the Client Certificate. If this field is used then
    the 'client_certificate' and the 'ca_certificate' fields are mandatory."""


class MongodbSslConfig2Dict(TypedDict):
    client_certificate: NotRequired[str]
    client_certificate_set: NotRequired[bool]
    client_key_set: NotRequired[bool]
    ca_certificate_set: NotRequired[bool]
    ca_certificate: NotRequired[str]
    secret_manager_stored_client_key: NotRequired[str]
    client_key: NotRequired[str]
