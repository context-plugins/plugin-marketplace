from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResultSaplingGenerationApi(str, Enum):
    SUCCESS = "success"

    __str__ = str.__str__


ResultSaplingGenerationApiOrStr: TypeAlias = Annotated[
    ResultSaplingGenerationApi | str, open_enum_validator(ResultSaplingGenerationApi)
]
