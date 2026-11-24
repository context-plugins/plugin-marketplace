from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_app_group_app_key2 import (
    GoogleCloudApigeeV1AppGroupAppKey2,
    GoogleCloudApigeeV1AppGroupAppKey2Dict,
)


class GoogleCloudApigeeV1UpdateAppGroupAppKeyRequest(SdkBaseModel):
    """Request for UpdateAppGroupAppKey"""

    app_group_app_key: Optional[GoogleCloudApigeeV1AppGroupAppKey2] = Field(default=UNSET, alias="appGroupAppKey")
    """Note that only Scopes and Attributes of the AppGroupAppKey can be amended. Scopes and Attributes mentioned in the
    request will be inserted and the existing scopes and attributes will be removed."""

    action: Optional[str] = UNSET
    """Approve or revoke the consumer key by setting this value to ``approve`` or ``revoke`` respectively. The
    ``Content-Type`` header, if set, must be set to ``application/octet-stream``, with empty body."""

    api_products: Optional[list[str]] = Field(default=UNSET, alias="apiProducts")
    """The list of API products that will be associated with the credential. This list will be appended to the existing
    list of associated API Products for this App Key. Duplicates will be ignored."""


class GoogleCloudApigeeV1UpdateAppGroupAppKeyRequestDict(TypedDict):
    app_group_app_key: NotRequired[GoogleCloudApigeeV1AppGroupAppKey2Dict]
    action: NotRequired[str]
    api_products: NotRequired[list[str]]
