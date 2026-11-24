from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortCosmicRestApiV3ObjectRevisionsApi(str, Enum):
    CREATED_AT = "created_at"
    CREATED_AT2 = "-created_at"

    __str__ = str.__str__


SortCosmicRestApiV3ObjectRevisionsApiOrStr: TypeAlias = Annotated[
    SortCosmicRestApiV3ObjectRevisionsApi | str, open_enum_validator(SortCosmicRestApiV3ObjectRevisionsApi)
]
