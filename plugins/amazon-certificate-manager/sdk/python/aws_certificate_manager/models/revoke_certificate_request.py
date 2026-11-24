from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.revocation_reason1 import RevocationReason1OrStr


class RevokeCertificateRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """The Amazon Resource Name (ARN) of the public or private certificate that will be revoked. The ARN must have the
    following form: arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012"""

    revocation_reason: RevocationReason1OrStr = Field(alias="RevocationReason")
    """Specifies why you revoked the certificate."""


class RevokeCertificateRequestDict(TypedDict):
    certificate_arn: str
    revocation_reason: RevocationReason1OrStr
