from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AlternativePerspectives(SdkBaseModel):
    contrarian_view: Optional[str] = UNSET
    overlooked_factors: Optional[str] = UNSET


class AlternativePerspectivesDict(TypedDict):
    contrarian_view: NotRequired[str]
    overlooked_factors: NotRequired[str]
