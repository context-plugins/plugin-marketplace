from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status_after import StatusAfterOrStr
from .enums.status_before import StatusBeforeOrStr


class ResultBundleSocialPostApi(SdkBaseModel):
    post_id: str = Field(alias="postId")
    title: OptionalNullable[str] = UNSET
    success: bool
    status_before: Optional[StatusBeforeOrStr] = Field(default=UNSET, alias="statusBefore")
    status_after: Optional[StatusAfterOrStr] = Field(default=UNSET, alias="statusAfter")
    message: Optional[str] = UNSET


class ResultBundleSocialPostApiDict(TypedDict):
    post_id: str
    title: NotRequired[str | None]
    success: bool
    status_before: NotRequired[StatusBeforeOrStr]
    status_after: NotRequired[StatusAfterOrStr]
    message: NotRequired[str]
