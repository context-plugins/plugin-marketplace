from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.action import ActionOrStr
from .enums.status39 import Status39OrStr


class ProviderStateSync(SdkBaseModel):
    action: ActionOrStr
    status: Status39OrStr
    reason: OptionalNullable[str] = UNSET
    error: OptionalNullable[str] = UNSET
    synced_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="syncedAt")


class ProviderStateSyncDict(TypedDict):
    action: ActionOrStr
    status: Status39OrStr
    reason: NotRequired[str | None]
    error: NotRequired[str | None]
    synced_at: NotRequired[RFC3339DateTime | None]
