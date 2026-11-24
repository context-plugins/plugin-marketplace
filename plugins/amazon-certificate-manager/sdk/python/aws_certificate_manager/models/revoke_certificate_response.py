from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RevokeCertificateResponse(SdkBaseModel):
    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """The Amazon Resource Name (ARN) of the public or private certificate that was revoked."""


class RevokeCertificateResponseDict(TypedDict):
    certificate_arn: NotRequired[str]
