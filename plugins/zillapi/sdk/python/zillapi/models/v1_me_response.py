from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .me import Me, MeDict


class V1MeResponse(SdkBaseModel):
    data: Optional[Me] = UNSET
    request_id: Optional[str] = UNSET


class V1MeResponseDict(TypedDict):
    data: NotRequired[MeDict]
    request_id: NotRequired[str]
