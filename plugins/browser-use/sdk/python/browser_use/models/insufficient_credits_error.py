from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class InsufficientCreditsError(SdkBaseModel):
    """Error response when there are insufficient credits"""

    detail: str = "Insufficient credits"


class InsufficientCreditsErrorDict(TypedDict):
    detail: NotRequired[str]
