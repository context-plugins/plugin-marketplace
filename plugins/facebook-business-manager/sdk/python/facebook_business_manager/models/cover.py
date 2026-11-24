from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Cover(SdkBaseModel):
    """The Page cover photo"""

    id: Optional[str] = UNSET
    source: Optional[str] = UNSET


class CoverDict(TypedDict):
    id: NotRequired[str]
    source: NotRequired[str]
