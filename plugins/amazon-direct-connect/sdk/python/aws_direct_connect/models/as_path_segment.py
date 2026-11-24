from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.path_type import PathTypeOrStr


class AsPathSegment(SdkBaseModel):
    path_type: Optional[PathTypeOrStr] = Field(default=UNSET, alias="pathType")
    """The type of the AS path segment. The valid values are seq (an ordered AS_SEQUENCE) and set (an unordered
    AS_SET)."""

    path: Optional[list[int]] = UNSET
    """The autonomous system (AS) numbers in the segment."""


class AsPathSegmentDict(TypedDict):
    path_type: NotRequired[PathTypeOrStr]
    path: NotRequired[list[int]]
