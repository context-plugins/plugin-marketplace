from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.resource_permission import ResourcePermissionOrStr
from .resource_collection import ResourceCollection, ResourceCollectionDict


class MonitoredResourceIdentifier(SdkBaseModel):
    monitored_resource_name: Optional[str] = Field(default=UNSET, alias="MonitoredResourceName")
    """The name of the resource being monitored."""

    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The type of resource being monitored."""

    resource_permission: Optional[ResourcePermissionOrStr] = Field(default=UNSET, alias="ResourcePermission")
    """The permission status of a resource."""

    last_updated: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdated")
    """The time at which DevOps Guru last updated this resource."""

    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")


class MonitoredResourceIdentifierDict(TypedDict):
    monitored_resource_name: NotRequired[str]
    type_: NotRequired[str]
    resource_permission: NotRequired[ResourcePermissionOrStr]
    last_updated: NotRequired[RFC3339DateTime]
    resource_collection: NotRequired[ResourceCollectionDict]
