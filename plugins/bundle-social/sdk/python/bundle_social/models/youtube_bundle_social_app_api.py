from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_bundle_social_app_api import StatusBundleSocialAppApiOrStr


class YoutubeBundleSocialAppApi(SdkBaseModel):
    status: StatusBundleSocialAppApiOrStr
    note: str


class YoutubeBundleSocialAppApiDict(TypedDict):
    status: StatusBundleSocialAppApiOrStr
    note: str
