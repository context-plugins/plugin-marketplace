from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MongodbObjectIdentifier(SdkBaseModel):
    """MongoDB data source object identifier."""

    collection: Optional[str] = UNSET
    """Required. The collection name."""

    database: Optional[str] = UNSET
    """Required. The database name."""


class MongodbObjectIdentifierDict(TypedDict):
    collection: NotRequired[str]
    database: NotRequired[str]
