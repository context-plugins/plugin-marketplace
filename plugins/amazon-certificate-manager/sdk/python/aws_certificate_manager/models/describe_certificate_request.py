from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeCertificateRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:
    arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs,
    see Amazon Resource Names (ARNs)."""


class DescribeCertificateRequestDict(TypedDict):
    certificate_arn: str
