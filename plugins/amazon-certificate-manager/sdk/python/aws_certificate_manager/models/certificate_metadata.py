from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .acm_certificate_metadata import AcmCertificateMetadata, AcmCertificateMetadataDict


class CertificateMetadata(SdkBaseModel):
    """Exactly one member is set."""

    acm_certificate_metadata: Optional[AcmCertificateMetadata] = Field(default=UNSET, alias="AcmCertificateMetadata")


class CertificateMetadataDict(TypedDict):
    acm_certificate_metadata: NotRequired[AcmCertificateMetadataDict]
