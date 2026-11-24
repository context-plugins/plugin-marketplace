from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .draft_version import DraftVersion, DraftVersionDict
from .enums.platform_scope import PlatformScopeOrStr
from .enums.status_bundle_social_automation_api import StatusBundleSocialAutomationApiOrStr
from .published_version import PublishedVersion, PublishedVersionDict


class ApiV1AutomationsArchiveResponse(SdkBaseModel):
    id: str
    team_id: str = Field(alias="teamId")
    organization_id: OptionalNullable[str] = Field(default=UNSET, alias="organizationId")
    name: str
    status: StatusBundleSocialAutomationApiOrStr
    platform_scope: PlatformScopeOrStr = Field(alias="platformScope")
    created_by_user_id: OptionalNullable[str] = Field(default=UNSET, alias="createdByUserId")
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    deleted_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="deletedAt")
    draft_version: Optional[DraftVersion] = Field(default=UNSET, alias="draftVersion")
    published_version: Optional[PublishedVersion] = Field(default=UNSET, alias="publishedVersion")


class ApiV1AutomationsArchiveResponseDict(TypedDict):
    id: str
    team_id: str
    organization_id: NotRequired[str | None]
    name: str
    status: StatusBundleSocialAutomationApiOrStr
    platform_scope: PlatformScopeOrStr
    created_by_user_id: NotRequired[str | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    deleted_at: NotRequired[RFC3339DateTime | None]
    draft_version: NotRequired[DraftVersionDict]
    published_version: NotRequired[PublishedVersionDict]
