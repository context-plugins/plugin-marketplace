from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .object import Object, ObjectDict


class ObjectListResponse(SdkBaseModel):
    objects: list[Object]
    total: Optional[int] = UNSET
    """Total number of Objects matching the query, ignoring ``limit`` and ``skip``."""

    limit: Optional[int] = UNSET
    """The ``limit`` applied to this response."""


class ObjectListResponseDict(TypedDict):
    objects: list[ObjectDict]
    total: NotRequired[int]
    limit: NotRequired[int]
