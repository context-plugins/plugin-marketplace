from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.social_account_type_bundle_social_organization_api import SocialAccountTypeBundleSocialOrganizationApiOrStr


class ApiV1SocialAccountCopyRequest(SdkBaseModel):
    from_team_id: str = Field(alias="fromTeamId")
    to_team_id: str = Field(alias="toTeamId")
    reset_channel: Optional[bool] = Field(default=UNSET, alias="resetChannel")
    """If you set that to true, selected page will not be transferred automatically. The user will have to select the
    page themselves again. This only applies to Facebook, Instagram, Linkedin and Youtube."""

    social_account_types: list[SocialAccountTypeBundleSocialOrganizationApiOrStr] = Field(alias="socialAccountTypes")


class ApiV1SocialAccountCopyRequestDict(TypedDict):
    from_team_id: str
    to_team_id: str
    reset_channel: NotRequired[bool]
    social_account_types: list[SocialAccountTypeBundleSocialOrganizationApiOrStr]
