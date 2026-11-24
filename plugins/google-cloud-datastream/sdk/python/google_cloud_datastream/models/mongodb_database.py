from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .mongodb_collection import MongodbCollection, MongodbCollectionDict


class MongodbDatabase(SdkBaseModel):
    """MongoDB Database."""

    collections: Optional[list[MongodbCollection]] = UNSET
    """Collections in the database."""

    database: Optional[str] = UNSET
    """The database name."""


class MongodbDatabaseDict(TypedDict):
    collections: NotRequired[list[MongodbCollectionDict]]
    database: NotRequired[str]
