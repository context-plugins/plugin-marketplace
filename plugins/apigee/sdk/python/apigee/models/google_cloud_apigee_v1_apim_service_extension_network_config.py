from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ApimServiceExtensionNetworkConfig(SdkBaseModel):
    """Network configuration for the APIM service extension."""

    subnet: Optional[str] = UNSET
    """Required. The subnet for the PSC NEG. Format: projects/{project}/regions/{region}/subnetworks/{subnet}"""

    region: Optional[str] = UNSET
    """Required. The region for the PSC NEG."""


class GoogleCloudApigeeV1ApimServiceExtensionNetworkConfigDict(TypedDict):
    subnet: NotRequired[str]
    region: NotRequired[str]
