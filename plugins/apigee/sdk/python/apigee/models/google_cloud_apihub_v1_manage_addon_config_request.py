from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_addon_config2 import GoogleCloudApihubV1AddonConfig2, GoogleCloudApihubV1AddonConfig2Dict


class GoogleCloudApihubV1ManageAddonConfigRequest(SdkBaseModel):
    """The ManageAddonConfig method's request."""

    config: Optional[GoogleCloudApihubV1AddonConfig2] = UNSET
    """Required. The config of the addon to be managed. This config will replace the config present in the addon. The
    type of the config should match the config type already present in the addon."""


class GoogleCloudApihubV1ManageAddonConfigRequestDict(TypedDict):
    config: NotRequired[GoogleCloudApihubV1AddonConfig2Dict]
