from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.platform import PlatformOrStr
from .enums.status59 import Status59OrStr
from .enums.type112 import Type112OrStr
from .last_sync_error import LastSyncError, LastSyncErrorDict
from .social_account import SocialAccount, SocialAccountDict
from .unions.config2 import Config2, Config2Dict


class Item3BundleSocialAutomationApi(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    platform: PlatformOrStr
    social_account_id: str = Field(alias="socialAccountId")
    type_: Type112OrStr = Field(alias="type")
    status: Status59OrStr
    config: Optional[Config2] = UNSET
    provider_response: OptionalNullable[dict[str, Any]] = Field(default=UNSET, alias="providerResponse")
    last_synced_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="lastSyncedAt")
    last_sync_error: OptionalNullable[LastSyncError] = Field(default=UNSET, alias="lastSyncError")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    social_account: Optional[SocialAccount] = Field(default=UNSET, alias="socialAccount")


class Item3BundleSocialAutomationApiDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    platform: PlatformOrStr
    social_account_id: str
    type_: Type112OrStr
    status: Status59OrStr
    config: NotRequired[Config2Dict]
    provider_response: NotRequired[dict[str, Any] | None]
    last_synced_at: NotRequired[RFC3339DateTime | None]
    last_sync_error: NotRequired[LastSyncErrorDict | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    social_account: NotRequired[SocialAccountDict]
