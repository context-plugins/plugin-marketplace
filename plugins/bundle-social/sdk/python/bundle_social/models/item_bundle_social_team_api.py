from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .analytic_bundle_social_team_api import AnalyticBundleSocialTeamApi, AnalyticBundleSocialTeamApiDict


class ItemBundleSocialTeamApi(SdkBaseModel):
    id: str
    bio_id: str = Field(alias="bioId")
    name: str
    link: str
    icon: OptionalNullable[str] = UNSET
    enabled: bool
    order: OptionalNullable[float] = UNSET
    created_at: RFC3339DateTime | None = Field(alias="createdAt")
    updated_at: RFC3339DateTime | None = Field(alias="updatedAt")
    analytics: list[AnalyticBundleSocialTeamApi]


class ItemBundleSocialTeamApiDict(TypedDict):
    id: str
    bio_id: str
    name: str
    link: str
    icon: NotRequired[str | None]
    enabled: bool
    order: NotRequired[float | None]
    created_at: RFC3339DateTime | None
    updated_at: RFC3339DateTime | None
    analytics: list[AnalyticBundleSocialTeamApiDict]
