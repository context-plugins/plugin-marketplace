from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetCertificateResponse(SdkBaseModel):
    certificate: Optional[str] = Field(default=UNSET, alias="Certificate")
    """The ACM-issued certificate corresponding to the ARN specified as input."""

    certificate_chain: Optional[str] = Field(default=UNSET, alias="CertificateChain")
    """Certificates forming the requested certificate's chain of trust. The chain consists of the certificate of the
    issuing CA and the intermediate certificates of any other subordinate CAs."""


class GetCertificateResponseDict(TypedDict):
    certificate: NotRequired[str]
    certificate_chain: NotRequired[str]
