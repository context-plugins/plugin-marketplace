from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_metadata import CertificateMetadata, CertificateMetadataDict
from .x509_attributes import X509Attributes, X509AttributesDict


class CertificateSearchResult(SdkBaseModel):
    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """The Amazon Resource Name (ARN) of the certificate."""

    x509_attributes: Optional[X509Attributes] = Field(default=UNSET, alias="X509Attributes")
    certificate_metadata: Optional[CertificateMetadata] = Field(default=UNSET, alias="CertificateMetadata")
    """Exactly one member is set."""


class CertificateSearchResultDict(TypedDict):
    certificate_arn: NotRequired[str]
    x509_attributes: NotRequired[X509AttributesDict]
    certificate_metadata: NotRequired[CertificateMetadataDict]
