from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig(SdkBaseModel):
    """ServiceDirectoryConfig represents Service Directory configuration for a connection."""

    service: Optional[str] = UNSET
    """Required. The Service Directory service name. Format:
    projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}."""


class GoogleDevtoolsCloudbuildV2ServiceDirectoryConfigDict(TypedDict):
    service: NotRequired[str]
