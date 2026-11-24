from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_contentstack_content_delivery_synchronization_api import (
    TypeContentstackContentDeliverySynchronizationApiOrStr,
)


class SyncItem(SdkBaseModel):
    """A single item in a sync response representing a content change event."""

    type_: Optional[TypeContentstackContentDeliverySynchronizationApiOrStr] = Field(default=UNSET, alias="type")
    """The type of sync event. Possible values: entry_published, entry_unpublished, entry_deleted, asset_published,
    asset_unpublished, asset_deleted, content_type_deleted."""

    data: Optional[Any] = UNSET
    """The content data associated with this sync event."""

    content_type_uid: Optional[str] = UNSET
    """The UID of the content type for entry-related events."""

    locale: Optional[str] = UNSET
    """The locale of the content for locale-specific events."""


class SyncItemDict(TypedDict):
    type_: NotRequired[TypeContentstackContentDeliverySynchronizationApiOrStr]
    data: NotRequired[Any]
    content_type_uid: NotRequired[str]
    locale: NotRequired[str]
