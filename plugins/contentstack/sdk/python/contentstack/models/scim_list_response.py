from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScimListResponse(SdkBaseModel):
    """A SCIM 2.0 ListResponse container for multi-resource responses."""

    schemas: Optional[list[str]] = UNSET
    """SCIM schema URNs identifying this as a ListResponse."""

    total_results: Optional[int] = Field(default=UNSET, alias="totalResults")
    """Total number of resources matching the query."""

    start_index: Optional[int] = Field(default=UNSET, alias="startIndex")
    """1-based index of the first result in this page."""

    items_per_page: Optional[int] = Field(default=UNSET, alias="itemsPerPage")
    """Number of results returned in this response."""

    resources: Optional[list[Any]] = Field(default=UNSET, alias="Resources")
    """Array of SCIM resource objects (Users or Groups)."""


class ScimListResponseDict(TypedDict):
    schemas: NotRequired[list[str]]
    total_results: NotRequired[int]
    start_index: NotRequired[int]
    items_per_page: NotRequired[int]
    resources: NotRequired[list[Any]]
