from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data_bundle_social_misc_api import DataBundleSocialMiscApi, DataBundleSocialMiscApiDict


class ApiV1MiscInstagramTagsResponse(SdkBaseModel):
    exists: bool
    """Whether the user is discoverable via Instagram business_discovery (typically Business/Creator). Personal/private
    accounts can return false even if taggable in media payload."""

    data: DataBundleSocialMiscApi | None
    """User data if exists, null otherwise"""


class ApiV1MiscInstagramTagsResponseDict(TypedDict):
    exists: bool
    data: DataBundleSocialMiscApiDict | None
