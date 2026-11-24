from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity4 import Severity4OrStr
from .enums.status4 import Status4OrStr
from .resource_collection import ResourceCollection, ResourceCollectionDict
from .service_collection import ServiceCollection, ServiceCollectionDict


class SearchInsightsFilters(SdkBaseModel):
    severities: Optional[list[Severity4OrStr]] = Field(default=UNSET, alias="Severities")
    """An array of severity values used to search for insights."""

    statuses: Optional[list[Status4OrStr]] = Field(default=UNSET, alias="Statuses")
    """An array of status values used to search for insights."""

    resource_collection: Optional[ResourceCollection] = Field(default=UNSET, alias="ResourceCollection")
    service_collection: Optional[ServiceCollection] = Field(default=UNSET, alias="ServiceCollection")


class SearchInsightsFiltersDict(TypedDict):
    severities: NotRequired[list[Severity4OrStr]]
    statuses: NotRequired[list[Status4OrStr]]
    resource_collection: NotRequired[ResourceCollectionDict]
    service_collection: NotRequired[ServiceCollectionDict]
