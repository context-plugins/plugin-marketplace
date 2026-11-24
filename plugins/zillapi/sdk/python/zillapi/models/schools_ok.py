from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .school import School, SchoolDict


class SchoolsOk(SdkBaseModel):
    data: Optional[list[School]] = UNSET
    request_id: Optional[str] = UNSET


class SchoolsOkDict(TypedDict):
    data: NotRequired[list[SchoolDict]]
    request_id: NotRequired[str]
