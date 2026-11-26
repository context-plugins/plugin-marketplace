from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListIndustriesResponseDto(SdkBaseModel):
    """List type for Industries list."""

    results: Optional[list[str]] = UNSET


class ListIndustriesResponseDtoDict(TypedDict):
    results: NotRequired[list[str]]
