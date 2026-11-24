from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrderMetadata(SdkBaseModel):
    latency: Optional[int] = UNSET


class OrderMetadataDict(TypedDict):
    latency: NotRequired[int]
