from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .available_filter import AvailableFilter, AvailableFilterDict


class FilterTypesDiscoveryResponse(SdkBaseModel):
    available_filters: Optional[list[AvailableFilter]] = Field(default=UNSET, alias="availableFilters")


class FilterTypesDiscoveryResponseDict(TypedDict):
    available_filters: NotRequired[list[AvailableFilterDict]]
