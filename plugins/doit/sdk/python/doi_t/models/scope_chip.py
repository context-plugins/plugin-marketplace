from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScopeChip(SdkBaseModel):
    key: Optional[str] = UNSET
    values: Optional[list[str]] = UNSET


class ScopeChipDict(TypedDict):
    key: NotRequired[str]
    values: NotRequired[list[str]]
