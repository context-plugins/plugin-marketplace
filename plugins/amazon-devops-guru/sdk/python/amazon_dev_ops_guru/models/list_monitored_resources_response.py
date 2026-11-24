from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .monitored_resource_identifier import MonitoredResourceIdentifier, MonitoredResourceIdentifierDict


class ListMonitoredResourcesResponse(SdkBaseModel):
    monitored_resource_identifiers: list[MonitoredResourceIdentifier] = Field(alias="MonitoredResourceIdentifiers")
    """Information about the resource that is being monitored, including the name of the resource, the type of resource,
    and whether or not permission is given to DevOps Guru to access that resource."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListMonitoredResourcesResponseDict(TypedDict):
    monitored_resource_identifiers: list[MonitoredResourceIdentifierDict]
    next_token: NotRequired[str]
