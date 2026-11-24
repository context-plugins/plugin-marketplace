from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExternalSegment(SdkBaseModel):
    """The user facing ID for any created lists or audiences in the sync destination"""

    id: Optional[str] = UNSET


class ExternalSegmentDict(TypedDict):
    id: NotRequired[str]
