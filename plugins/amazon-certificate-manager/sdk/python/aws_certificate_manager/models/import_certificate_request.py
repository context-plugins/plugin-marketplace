from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class ImportCertificateRequest(SdkBaseModel):
    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """The Amazon Resource Name (ARN) of an imported certificate to replace. To import a new certificate, omit this
    field."""

    certificate: str = Field(alias="Certificate")
    """The certificate to import."""

    private_key: str = Field(alias="PrivateKey")
    """The private key that matches the public key in the certificate."""

    certificate_chain: Optional[str] = Field(default=UNSET, alias="CertificateChain")
    """The PEM encoded certificate chain."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """One or more resource tags to associate with the imported certificate. Note: You cannot apply tags when
    reimporting a certificate."""


class ImportCertificateRequestDict(TypedDict):
    certificate_arn: NotRequired[str]
    certificate: str
    private_key: str
    certificate_chain: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
