from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result_bundle_social_post_api import ResultBundleSocialPostApi, ResultBundleSocialPostApiDict


class ApiV1PostReconnectSocialAccountResponse(SdkBaseModel):
    total: float
    succeeded: float
    failed: float
    results: list[ResultBundleSocialPostApi]


class ApiV1PostReconnectSocialAccountResponseDict(TypedDict):
    total: float
    succeeded: float
    failed: float
    results: list[ResultBundleSocialPostApiDict]
