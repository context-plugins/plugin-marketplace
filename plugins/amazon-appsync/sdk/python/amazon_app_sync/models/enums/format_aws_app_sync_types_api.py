from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FormatAwsAppSyncTypesApi(str, Enum):
    """The type format: SDL or JSON."""

    SDL = "SDL"
    JSON = "JSON"

    __str__ = str.__str__


FormatAwsAppSyncTypesApiOrStr: TypeAlias = Annotated[
    FormatAwsAppSyncTypesApi | str, open_enum_validator(FormatAwsAppSyncTypesApi)
]
