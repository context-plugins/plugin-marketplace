from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .source_group_dto import SourceGroupDto, SourceGroupDtoDict


class SourceGroupListResult(SdkBaseModel):
    """Paginated list of source groups."""

    total: int
    """Total number of matching source groups across all pages."""

    data: list[SourceGroupDto]
    """Source groups returned for the requested page."""


class SourceGroupListResultDict(TypedDict):
    total: int
    data: list[SourceGroupDtoDict]
