from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FilterOptions(SdkBaseModel):
    """Available enum values for signal sub-filters. Only present in the ``company`` response."""

    news_event_types: Optional[list[str]] = Field(default=UNSET, alias="newsEventTypes")
    """Available values for the ``newsEventTypes`` filter"""

    hiring_by_departments: Optional[list[str]] = Field(default=UNSET, alias="hiringByDepartments")
    """Available values for the ``hiringByDepartments`` filter"""


class FilterOptionsDict(TypedDict):
    news_event_types: NotRequired[list[str]]
    hiring_by_departments: NotRequired[list[str]]
