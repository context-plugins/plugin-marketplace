from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_bundle_social_post_import_api import PostBundleSocialPostImportApi, PostBundleSocialPostImportApiDict


class ApiV1PostHistoryImportPostsResponse(SdkBaseModel):
    posts: list[PostBundleSocialPostImportApi]
    total: float
    limit: float
    remaining_capacity: float = Field(alias="remainingCapacity")


class ApiV1PostHistoryImportPostsResponseDict(TypedDict):
    posts: list[PostBundleSocialPostImportApiDict]
    total: float
    limit: float
    remaining_capacity: float
