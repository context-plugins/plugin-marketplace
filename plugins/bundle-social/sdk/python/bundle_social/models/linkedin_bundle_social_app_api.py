from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_bundle_social_app_api import StatusBundleSocialAppApiOrStr


class LinkedinBundleSocialAppApi(SdkBaseModel):
    status: StatusBundleSocialAppApiOrStr
    note: str


class LinkedinBundleSocialAppApiDict(TypedDict):
    status: StatusBundleSocialAppApiOrStr
    note: str
