from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DowntimeInstrument(SdkBaseModel):
    bank: Optional[str] = UNSET
    network: Optional[str] = UNSET
    issuer: Optional[str] = UNSET
    psp: Optional[str] = UNSET
    vpa_handle: Optional[str] = UNSET
    card_type: Optional[str] = UNSET
    flow: Optional[str] = UNSET


class DowntimeInstrumentDict(TypedDict):
    bank: NotRequired[str]
    network: NotRequired[str]
    issuer: NotRequired[str]
    psp: NotRequired[str]
    vpa_handle: NotRequired[str]
    card_type: NotRequired[str]
    flow: NotRequired[str]
