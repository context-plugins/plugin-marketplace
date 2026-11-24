from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AlterMetadataResourceLocationRequest(SdkBaseModel):
    """Request message for DataprocMetastore.AlterMetadataResourceLocation."""

    resource_name: Optional[str] = Field(default=UNSET, alias="resourceName")
    """Required. The relative metadata resource name in the following format.databases/{database_id} or
    databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id}"""

    location_uri: Optional[str] = Field(default=UNSET, alias="locationUri")
    """Required. The new location URI for the metadata resource."""


class AlterMetadataResourceLocationRequestDict(TypedDict):
    resource_name: NotRequired[str]
    location_uri: NotRequired[str]
