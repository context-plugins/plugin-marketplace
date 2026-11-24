from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class InsufficientCreditsErrorError(SdkBaseModel):
    """Error response when there are insufficient credits"""

    detail: str = "Insufficient credits"


class InsufficientCreditsErrorErrorDict(TypedDict):
    detail: NotRequired[str]
