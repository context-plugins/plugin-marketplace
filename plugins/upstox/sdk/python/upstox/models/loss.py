from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Loss(SdkBaseModel):
    total: Optional[float] = UNSET
    realised: Optional[float] = UNSET
    unrealised: Optional[float] = UNSET


class LossDict(TypedDict):
    total: NotRequired[float]
    realised: NotRequired[float]
    unrealised: NotRequired[float]
