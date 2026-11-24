from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Usage(SdkBaseModel):
    used: OptionalNullable[int] = UNSET
    limit: OptionalNullable[int] = UNSET
    remaining: OptionalNullable[int] = UNSET
    unlimited: Optional[bool] = UNSET
    resets_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="resetsAt")


class UsageDict(TypedDict):
    used: NotRequired[int | None]
    limit: NotRequired[int | None]
    remaining: NotRequired[int | None]
    unlimited: NotRequired[bool]
    resets_at: NotRequired[RFC3339DateTime | None]
