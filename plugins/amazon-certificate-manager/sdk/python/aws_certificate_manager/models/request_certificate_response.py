from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestCertificateResponse(SdkBaseModel):
    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """String that contains the ARN of the issued certificate. This must be of the form:
    arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012"""


class RequestCertificateResponseDict(TypedDict):
    certificate_arn: NotRequired[str]
