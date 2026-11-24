from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1CommentsResolveRequest(SdkBaseModel):
    note: Optional[str] = UNSET
    reopen: Optional[bool] = UNSET


class ApiV1CommentsResolveRequestDict(TypedDict):
    note: NotRequired[str]
    reopen: NotRequired[bool]
