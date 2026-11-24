from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Search(SdkBaseModel):
    endpoint: Optional[str] = UNSET
    parameters: Optional[list[str]] = UNSET
    searchable_types: Optional[list[str]] = UNSET
    per_resource: Optional[list[str]] = UNSET


class SearchDict(TypedDict):
    endpoint: NotRequired[str]
    parameters: NotRequired[list[str]]
    searchable_types: NotRequired[list[str]]
    per_resource: NotRequired[list[str]]
