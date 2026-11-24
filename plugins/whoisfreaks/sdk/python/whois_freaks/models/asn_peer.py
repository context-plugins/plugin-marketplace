from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AsnPeer(SdkBaseModel):
    as_number: Optional[str] = UNSET
    description: Optional[str] = UNSET
    country: Optional[str] = UNSET


class AsnPeerDict(TypedDict):
    as_number: NotRequired[str]
    description: NotRequired[str]
    country: NotRequired[str]
