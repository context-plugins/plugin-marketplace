from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.resource_permission import ResourcePermissionOrStr
from .enums.resource_type_filter import ResourceTypeFilterOrStr


class ListMonitoredResourcesFilters(SdkBaseModel):
    resource_permission: ResourcePermissionOrStr = Field(alias="ResourcePermission")
    """The permission status of a resource."""

    resource_type_filters: list[ResourceTypeFilterOrStr] = Field(alias="ResourceTypeFilters")
    """The type of resource that you wish to retrieve, such as log groups."""


class ListMonitoredResourcesFiltersDict(TypedDict):
    resource_permission: ResourcePermissionOrStr
    resource_type_filters: list[ResourceTypeFilterOrStr]
