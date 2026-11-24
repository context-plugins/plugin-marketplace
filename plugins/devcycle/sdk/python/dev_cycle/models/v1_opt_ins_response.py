from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1OptInsResponse(SdkBaseModel):
    message: Optional[str] = UNSET


class V1OptInsResponseDict(TypedDict):
    message: NotRequired[str]
