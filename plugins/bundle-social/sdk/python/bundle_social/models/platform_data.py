from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .provider_state_sync import ProviderStateSync, ProviderStateSyncDict


class PlatformData(SdkBaseModel):
    can_reply: OptionalNullable[bool] = Field(default=UNSET, alias="canReply")
    last_inbound_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastInboundAt")
    provider_state_sync: OptionalNullable[ProviderStateSync] = Field(default=UNSET, alias="providerStateSync")


class PlatformDataDict(TypedDict):
    can_reply: NotRequired[bool | None]
    last_inbound_at: NotRequired[RFC3339DateTime | None]
    provider_state_sync: NotRequired[ProviderStateSyncDict | None]
