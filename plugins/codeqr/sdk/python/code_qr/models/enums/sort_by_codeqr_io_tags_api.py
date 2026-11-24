from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByCodeqrIoTagsApi(str, Enum):
    """The field to sort the tags by."""

    NAME = "name"
    CREATED_AT = "createdAt"

    __str__ = str.__str__


SortByCodeqrIoTagsApiOrStr: TypeAlias = Annotated[
    SortByCodeqrIoTagsApi | str, open_enum_validator(SortByCodeqrIoTagsApi)
]
