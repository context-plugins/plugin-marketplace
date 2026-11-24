from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1_bundle_social_organization_api import Type1BundleSocialOrganizationApiOrStr


class ItemBundleSocialOrganizationApi(SdkBaseModel):
    id: str
    type_: Type1BundleSocialOrganizationApiOrStr = Field(alias="type")
    username: str | None
    display_name: str | None = Field(alias="displayName")
    messages_used: float = Field(alias="messagesUsed")
    messages_limit: float = Field(alias="messagesLimit")
    automation_runs_used: float = Field(alias="automationRunsUsed")
    automation_runs_limit: float = Field(alias="automationRunsLimit")


class ItemBundleSocialOrganizationApiDict(TypedDict):
    id: str
    type_: Type1BundleSocialOrganizationApiOrStr
    username: str | None
    display_name: str | None
    messages_used: float
    messages_limit: float
    automation_runs_used: float
    automation_runs_limit: float
