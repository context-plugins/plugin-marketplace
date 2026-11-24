from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_datastore_config2 import (
    GoogleCloudApigeeV1DatastoreConfig2,
    GoogleCloudApigeeV1DatastoreConfig2Dict,
)


class GoogleCloudApigeeV1Datastore(SdkBaseModel):
    """The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the
    credentials used to access the data repository."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z"""

    org: Optional[str] = UNSET
    """Output only. Organization that the datastore belongs to"""

    datastore_config: Optional[GoogleCloudApigeeV1DatastoreConfig2] = Field(default=UNSET, alias="datastoreConfig")
    """Datastore Configurations."""

    target_type: Optional[str] = Field(default=UNSET, alias="targetType")
    """Destination storage type. Supported types ``gcs`` or ``bigquery``."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name in UI"""

    last_update_time: Optional[str] = Field(default=UNSET, alias="lastUpdateTime")
    """Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z"""

    self: Optional[str] = UNSET
    """Output only. Resource link of Datastore. Example: ``/organizations/{org}/analytics/datastores/{uuid}``"""


class GoogleCloudApigeeV1DatastoreDict(TypedDict):
    create_time: NotRequired[str]
    org: NotRequired[str]
    datastore_config: NotRequired[GoogleCloudApigeeV1DatastoreConfig2Dict]
    target_type: NotRequired[str]
    display_name: NotRequired[str]
    last_update_time: NotRequired[str]
    self: NotRequired[str]
