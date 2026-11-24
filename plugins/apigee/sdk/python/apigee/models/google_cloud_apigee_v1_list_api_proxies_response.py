from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_proxy import GoogleCloudApigeeV1ApiProxy, GoogleCloudApigeeV1ApiProxyDict


class GoogleCloudApigeeV1ListApiProxiesResponse(SdkBaseModel):
    proxies: Optional[list[GoogleCloudApigeeV1ApiProxy]] = UNSET


class GoogleCloudApigeeV1ListApiProxiesResponseDict(TypedDict):
    proxies: NotRequired[list[GoogleCloudApigeeV1ApiProxyDict]]
