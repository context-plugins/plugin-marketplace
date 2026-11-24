from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrCodeDestination(SdkBaseModel):
    bitlink_id: Optional[str] = UNSET
    long_url: Optional[str] = UNSET
    site_id: Optional[str] = UNSET


class QrCodeDestinationDict(TypedDict):
    bitlink_id: NotRequired[str]
    long_url: NotRequired[str]
    site_id: NotRequired[str]
