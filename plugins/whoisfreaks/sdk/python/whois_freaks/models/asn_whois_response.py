from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .asn_info import AsnInfo, AsnInfoDict


class AsnWhoisResponse(SdkBaseModel):
    """ASN WHOIS v2 (/v2.0/asn-whois) — pass-through of ipgeolocation ASN data."""

    asn: Optional[AsnInfo] = UNSET


class AsnWhoisResponseDict(TypedDict):
    asn: NotRequired[AsnInfoDict]
