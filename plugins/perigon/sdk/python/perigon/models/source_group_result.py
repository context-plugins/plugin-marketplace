from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .source_group_dto import SourceGroupDto, SourceGroupDtoDict


class SourceGroupResult(SdkBaseModel):
    """Single source group response."""

    data: SourceGroupDto
    """Named group of news source domains for filtering search and monitors."""


class SourceGroupResultDict(TypedDict):
    data: SourceGroupDtoDict
