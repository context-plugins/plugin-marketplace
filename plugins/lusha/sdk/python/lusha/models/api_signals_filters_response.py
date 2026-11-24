from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter_options import FilterOptions, FilterOptionsDict


class ApiSignalsFiltersResponse(SdkBaseModel):
    signals: Optional[list[str]] = UNSET
    object_type: Optional[str] = Field(default=UNSET, alias="objectType")
    filter_options: Optional[FilterOptions] = Field(default=UNSET, alias="filterOptions")
    """Available enum values for signal sub-filters. Only present in the ``company`` response."""


class ApiSignalsFiltersResponseDict(TypedDict):
    signals: NotRequired[list[str]]
    object_type: NotRequired[str]
    filter_options: NotRequired[FilterOptionsDict]
