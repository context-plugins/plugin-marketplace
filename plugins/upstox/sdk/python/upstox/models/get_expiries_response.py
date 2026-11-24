from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class GetExpiriesResponse(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    data: Optional[list[str]] = UNSET


class GetExpiriesResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[list[str]]
