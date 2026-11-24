from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_datastore import GoogleCloudApigeeV1Datastore, GoogleCloudApigeeV1DatastoreDict


class GoogleCloudApigeeV1ListDatastoresResponse(SdkBaseModel):
    """The response for ListDatastores"""

    datastores: Optional[list[GoogleCloudApigeeV1Datastore]] = UNSET
    """A list of datastores"""


class GoogleCloudApigeeV1ListDatastoresResponseDict(TypedDict):
    datastores: NotRequired[list[GoogleCloudApigeeV1DatastoreDict]]
