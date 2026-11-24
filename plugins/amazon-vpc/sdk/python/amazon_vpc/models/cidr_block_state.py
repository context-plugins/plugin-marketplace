from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CidrBlockState(SdkBaseModel):
    state: Optional[str] = UNSET


class CidrBlockStateDict(TypedDict):
    state: NotRequired[str]
