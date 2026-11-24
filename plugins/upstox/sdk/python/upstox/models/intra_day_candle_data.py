from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IntraDayCandleData(SdkBaseModel):
    candles: Optional[list[list[Any]]] = UNSET


class IntraDayCandleDataDict(TypedDict):
    candles: NotRequired[list[list[Any]]]
