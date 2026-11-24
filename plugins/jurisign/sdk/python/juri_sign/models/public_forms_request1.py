from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status1 import Status1OrStr


class PublicFormsRequest1(SdkBaseModel):
    name: Optional[str] = UNSET
    status: Optional[Status1OrStr] = UNSET
    expires_at: OptionalNullable[RFC3339DateTime] = UNSET
    daily_submission_limit: OptionalNullable[int] = UNSET


class PublicFormsRequest1Dict(TypedDict):
    name: NotRequired[str]
    status: NotRequired[Status1OrStr]
    expires_at: NotRequired[RFC3339DateTime | None]
    daily_submission_limit: NotRequired[int | None]
