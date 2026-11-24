from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acm_certificate_metadata_filter import AcmCertificateMetadataFilter, AcmCertificateMetadataFilterDict
from .x509_attribute_filter import X509AttributeFilter, X509AttributeFilterDict


class CertificateFilter(SdkBaseModel):
    """Exactly one member is set."""

    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """Filter by certificate ARN."""

    x509_attribute_filter: Optional[X509AttributeFilter] = Field(default=UNSET, alias="X509AttributeFilter")
    """Exactly one member is set."""

    acm_certificate_metadata_filter: Optional[AcmCertificateMetadataFilter] = Field(
        default=UNSET, alias="AcmCertificateMetadataFilter"
    )
    """Exactly one member is set."""


class CertificateFilterDict(TypedDict):
    certificate_arn: NotRequired[str]
    x509_attribute_filter: NotRequired[X509AttributeFilterDict]
    acm_certificate_metadata_filter: NotRequired[AcmCertificateMetadataFilterDict]
