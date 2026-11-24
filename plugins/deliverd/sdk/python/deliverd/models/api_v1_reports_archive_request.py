from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsArchiveRequest(SdkBaseModel):
    archived: Optional[bool] = UNSET
    """false to unarchive; defaults to true"""


class ApiV1ReportsArchiveRequestDict(TypedDict):
    archived: NotRequired[bool]
