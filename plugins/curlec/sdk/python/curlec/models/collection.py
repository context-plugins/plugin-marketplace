from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity import EntityOrStr


class Collection(SdkBaseModel):
    entity: Optional[EntityOrStr] = UNSET
    count: Optional[int] = UNSET
    """Number of items in the current page."""

    items: Optional[list[Any]] = UNSET


class CollectionDict(TypedDict):
    entity: NotRequired[EntityOrStr]
    count: NotRequired[int]
    items: NotRequired[list[Any]]
