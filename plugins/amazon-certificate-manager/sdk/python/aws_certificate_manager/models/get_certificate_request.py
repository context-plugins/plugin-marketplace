from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetCertificateRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """String that contains a certificate ARN in the following format:
    arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs,
    see Amazon Resource Names (ARNs)."""


class GetCertificateRequestDict(TypedDict):
    certificate_arn: str
