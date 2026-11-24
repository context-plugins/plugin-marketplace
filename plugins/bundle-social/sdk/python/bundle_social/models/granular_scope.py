from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GranularScope(SdkBaseModel):
    scope: str
    target_ids: Optional[list[str]] = UNSET


class GranularScopeDict(TypedDict):
    scope: str
    target_ids: NotRequired[list[str]]
