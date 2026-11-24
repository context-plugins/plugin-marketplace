from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SslPublicKeyInfo(SdkBaseModel):
    key_size: Optional[str] = Field(default=UNSET, alias="keySize")
    key_algorithm: Optional[str] = Field(default=UNSET, alias="keyAlgorithm")
    pem_raw: Optional[str] = Field(default=UNSET, alias="pemRaw")


class SslPublicKeyInfoDict(TypedDict):
    key_size: NotRequired[str]
    key_algorithm: NotRequired[str]
    pem_raw: NotRequired[str]
