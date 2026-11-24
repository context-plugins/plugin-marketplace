from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogAnomalyType(str, Enum):
    """The type of log anomaly that has been detected."""

    KEYWORD = "KEYWORD"
    KEYWORD_TOKEN = "KEYWORD_TOKEN"
    FORMAT = "FORMAT"
    HTTP_CODE = "HTTP_CODE"
    BLOCK_FORMAT = "BLOCK_FORMAT"
    NUMERICAL_POINT = "NUMERICAL_POINT"
    NUMERICAL_NAN = "NUMERICAL_NAN"
    NEW_FIELD_NAME = "NEW_FIELD_NAME"

    __str__ = str.__str__


LogAnomalyTypeOrStr: TypeAlias = Annotated[LogAnomalyType | str, open_enum_validator(LogAnomalyType)]
