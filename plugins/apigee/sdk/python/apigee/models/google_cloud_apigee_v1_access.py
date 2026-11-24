from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_access_get import GoogleCloudApigeeV1AccessGet, GoogleCloudApigeeV1AccessGetDict
from .google_cloud_apigee_v1_access_remove import GoogleCloudApigeeV1AccessRemove, GoogleCloudApigeeV1AccessRemoveDict
from .google_cloud_apigee_v1_access_set import GoogleCloudApigeeV1AccessSet, GoogleCloudApigeeV1AccessSetDict


class GoogleCloudApigeeV1Access(SdkBaseModel):
    set_: Optional[GoogleCloudApigeeV1AccessSet] = Field(default=UNSET, alias="Set")
    """Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }"""

    remove: Optional[GoogleCloudApigeeV1AccessRemove] = Field(default=UNSET, alias="Remove")
    """Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }"""

    get: Optional[GoogleCloudApigeeV1AccessGet] = Field(default=UNSET, alias="Get")
    """Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }"""


class GoogleCloudApigeeV1AccessDict(TypedDict):
    set_: NotRequired[GoogleCloudApigeeV1AccessSetDict]
    remove: NotRequired[GoogleCloudApigeeV1AccessRemoveDict]
    get: NotRequired[GoogleCloudApigeeV1AccessGetDict]
