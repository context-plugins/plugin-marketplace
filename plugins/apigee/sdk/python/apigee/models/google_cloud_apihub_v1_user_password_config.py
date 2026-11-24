from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_secret3 import GoogleCloudApihubV1Secret3, GoogleCloudApihubV1Secret3Dict


class GoogleCloudApihubV1UserPasswordConfig(SdkBaseModel):
    """Parameters to support Username and Password Authentication."""

    password: Optional[GoogleCloudApihubV1Secret3] = UNSET
    """Required. Secret version reference containing the password. The ``secretmanager.versions.access`` permission
    should be granted to the service account accessing the secret."""

    username: Optional[str] = UNSET
    """Required. Username."""


class GoogleCloudApihubV1UserPasswordConfigDict(TypedDict):
    password: NotRequired[GoogleCloudApihubV1Secret3Dict]
    username: NotRequired[str]
