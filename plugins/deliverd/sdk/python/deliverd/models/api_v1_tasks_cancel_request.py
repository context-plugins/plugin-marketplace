from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1TasksCancelRequest(SdkBaseModel):
    reason: Optional[str] = UNSET
    """Why it was called off, for whoever reads the history"""


class ApiV1TasksCancelRequestDict(TypedDict):
    reason: NotRequired[str]
