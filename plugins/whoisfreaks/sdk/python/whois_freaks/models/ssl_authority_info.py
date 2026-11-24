from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SslAuthorityInfo(SdkBaseModel):
    issuers: Optional[list[str]] = UNSET
    ocsp: Optional[list[str]] = UNSET


class SslAuthorityInfoDict(TypedDict):
    issuers: NotRequired[list[str]]
    ocsp: NotRequired[list[str]]
