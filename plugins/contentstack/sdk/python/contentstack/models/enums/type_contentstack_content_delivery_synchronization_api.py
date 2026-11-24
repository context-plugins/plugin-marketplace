from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeContentstackContentDeliverySynchronizationApi(str, Enum):
    """The type of sync event. Possible values: entry_published, entry_unpublished, entry_deleted, asset_published,
    asset_unpublished, asset_deleted, content_type_deleted."""

    ENTRY_PUBLISHED = "entry_published"
    ENTRY_UNPUBLISHED = "entry_unpublished"
    ENTRY_DELETED = "entry_deleted"
    ASSET_PUBLISHED = "asset_published"
    ASSET_UNPUBLISHED = "asset_unpublished"
    ASSET_DELETED = "asset_deleted"
    CONTENT_TYPE_DELETED = "content_type_deleted"

    __str__ = str.__str__


TypeContentstackContentDeliverySynchronizationApiOrStr: TypeAlias = Annotated[
    TypeContentstackContentDeliverySynchronizationApi | str,
    open_enum_validator(TypeContentstackContentDeliverySynchronizationApi),
]
