from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .scim_group import ScimGroup, ScimGroupDict


class ScimGroupListResponse(SdkBaseModel):
    """A SCIM 2.0 ListResponse containing group resources."""

    schemas: list[str]
    total_results: int = Field(alias="totalResults")
    """The total number of results matching the query."""

    items_per_page: Optional[int] = Field(default=UNSET, alias="itemsPerPage")
    """The number of results returned in this page."""

    start_index: Optional[int] = Field(default=UNSET, alias="startIndex")
    """The 1-based index of the first result in this page."""

    resources: list[ScimGroup] = Field(alias="Resources")
    """The list of SCIM group resources."""


class ScimGroupListResponseDict(TypedDict):
    schemas: list[str]
    total_results: int
    items_per_page: NotRequired[int]
    start_index: NotRequired[int]
    resources: list[ScimGroupDict]
