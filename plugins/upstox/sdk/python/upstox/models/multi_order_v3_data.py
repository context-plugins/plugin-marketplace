from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MultiOrderV3Data(SdkBaseModel):
    order_ids: Optional[list[str]] = UNSET


class MultiOrderV3DataDict(TypedDict):
    order_ids: NotRequired[list[str]]
