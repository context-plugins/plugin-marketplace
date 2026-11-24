from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_bundle_social_app_api import StatusBundleSocialAppApiOrStr


class ThreadsBundleSocialAppApi(SdkBaseModel):
    status: StatusBundleSocialAppApiOrStr
    note: str


class ThreadsBundleSocialAppApiDict(TypedDict):
    status: StatusBundleSocialAppApiOrStr
    note: str
