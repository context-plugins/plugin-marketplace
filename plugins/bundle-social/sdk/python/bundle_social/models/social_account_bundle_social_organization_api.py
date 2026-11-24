from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SocialAccountBundleSocialOrganizationApi(SdkBaseModel):
    id: str
    type_: str = Field(alias="type")
    username: str | None
    display_name: str | None = Field(alias="displayName")
    used: float
    limit: float
    remaining: float


class SocialAccountBundleSocialOrganizationApiDict(TypedDict):
    id: str
    type_: str
    username: str | None
    display_name: str | None
    used: float
    limit: float
    remaining: float
