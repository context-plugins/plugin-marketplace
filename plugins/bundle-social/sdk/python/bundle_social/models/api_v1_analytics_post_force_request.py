from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.platform_type import PlatformTypeOrStr


class ApiV1AnalyticsPostForceRequest(SdkBaseModel):
    post_id: OptionalNullable[str] = Field(default=UNSET, alias="postId")
    platform_type: OptionalNullable[PlatformTypeOrStr] = Field(default=UNSET, alias="platformType")
    imported_post_id: OptionalNullable[str] = Field(default=UNSET, alias="importedPostId")


class ApiV1AnalyticsPostForceRequestDict(TypedDict):
    post_id: NotRequired[str | None]
    platform_type: NotRequired[PlatformTypeOrStr | None]
    imported_post_id: NotRequired[str | None]
