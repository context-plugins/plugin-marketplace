from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.media_type import MediaTypeOrStr
from .enums.social_account_type_bundle_social_post_import_api import SocialAccountTypeBundleSocialPostImportApiOrStr
from .enums.surface import Surface, SurfaceOrStr


class ApiV1PostHistoryImportRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr = Field(alias="socialAccountType")
    count: int
    with_analytics: bool = Field(default=True, alias="withAnalytics")
    import_carousels: bool = Field(default=False, alias="importCarousels")
    only_latest: bool = Field(default=False, alias="onlyLatest")
    surface: SurfaceOrStr = Surface.ALL
    media_type: Optional[MediaTypeOrStr] = Field(default=UNSET, alias="mediaType")


class ApiV1PostHistoryImportRequestDict(TypedDict):
    team_id: str
    social_account_type: SocialAccountTypeBundleSocialPostImportApiOrStr
    count: int
    with_analytics: NotRequired[bool]
    import_carousels: NotRequired[bool]
    only_latest: NotRequired[bool]
    surface: NotRequired[SurfaceOrStr]
    media_type: NotRequired[MediaTypeOrStr]
