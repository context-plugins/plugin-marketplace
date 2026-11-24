from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .certificate_detail import CertificateDetail, CertificateDetailDict


class DescribeCertificateResponse(SdkBaseModel):
    certificate: Optional[CertificateDetail] = Field(default=UNSET, alias="Certificate")


class DescribeCertificateResponseDict(TypedDict):
    certificate: NotRequired[CertificateDetailDict]
