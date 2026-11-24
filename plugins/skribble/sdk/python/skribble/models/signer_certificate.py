from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SignerCertificate(SdkBaseModel):
    subject: Optional[str] = UNSET
    issuer: Optional[str] = UNSET
    serial_number: Optional[str] = Field(default=UNSET, alias="serialNumber")


class SignerCertificateDict(TypedDict):
    subject: NotRequired[str]
    issuer: NotRequired[str]
    serial_number: NotRequired[str]
