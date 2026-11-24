from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1ContentstackContentDeliverySynchronizationApi(str, Enum):
    ENTRY_PUBLISHED = "entry_published"
    ENTRY_UNPUBLISHED = "entry_unpublished"
    ENTRY_DELETED = "entry_deleted"
    ASSET_PUBLISHED = "asset_published"
    ASSET_UNPUBLISHED = "asset_unpublished"
    ASSET_DELETED = "asset_deleted"
    CONTENT_TYPE_DELETED = "content_type_deleted"

    __str__ = str.__str__


Type1ContentstackContentDeliverySynchronizationApiOrStr: TypeAlias = Annotated[
    Type1ContentstackContentDeliverySynchronizationApi | str,
    open_enum_validator(Type1ContentstackContentDeliverySynchronizationApi),
]
