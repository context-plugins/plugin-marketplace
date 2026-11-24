from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AvailableFilter(SdkBaseModel):
    filter_type: Optional[str] = Field(default=UNSET, alias="filterType")
    requires_query: Optional[bool] = Field(default=UNSET, alias="requiresQuery")


class AvailableFilterDict(TypedDict):
    filter_type: NotRequired[str]
    requires_query: NotRequired[bool]
