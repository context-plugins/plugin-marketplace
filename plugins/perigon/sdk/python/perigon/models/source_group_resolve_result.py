from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .source_group_dto import SourceGroupDto, SourceGroupDtoDict


class SourceGroupResolveResult(SdkBaseModel):
    """Resolved source groups response."""

    data: list[SourceGroupDto]
    """Resolved source groups."""


class SourceGroupResolveResultDict(TypedDict):
    data: list[SourceGroupDtoDict]
