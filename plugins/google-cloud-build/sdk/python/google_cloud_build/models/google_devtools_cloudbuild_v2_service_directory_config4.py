from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4(SdkBaseModel):
    """Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data Center. This should
    only be set if the Bitbucket Data Center is hosted on-premises and not reachable by public internet. If this field
    is left empty, calls to the Bitbucket Data Center will be made over the public internet."""

    service: Optional[str] = UNSET
    """Required. The Service Directory service name. Format:
    projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}."""


class GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4Dict(TypedDict):
    service: NotRequired[str]
