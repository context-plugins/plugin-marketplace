from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_field import MongodbField, MongodbFieldDict


class MongodbCollection(SdkBaseModel):
    """MongoDB Collection."""

    collection: Optional[str] = UNSET
    """The collection name."""

    fields: Optional[list[MongodbField]] = UNSET
    """Fields in the collection."""


class MongodbCollectionDict(TypedDict):
    collection: NotRequired[str]
    fields: NotRequired[list[MongodbFieldDict]]
