from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByDoiTAnnotationsApi(str, Enum):
    ID = "id"
    CONTENT = "content"
    TIMESTAMP = "timestamp"
    TIME_CREATED = "timeCreated"
    TIME_MODIFIED = "timeModified"

    __str__ = str.__str__


SortByDoiTAnnotationsApiOrStr: TypeAlias = Annotated[
    SortByDoiTAnnotationsApi | str, open_enum_validator(SortByDoiTAnnotationsApi)
]
