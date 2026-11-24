from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    INVALID_TYPE = "invalid_type"
    INVALID_LITERAL = "invalid_literal"
    CUSTOM = "custom"
    INVALID_UNION = "invalid_union"
    INVALID_UNION_DISCRIMINATOR = "invalid_union_discriminator"
    INVALID_ENUM_VALUE = "invalid_enum_value"
    UNRECOGNIZED_KEYS = "unrecognized_keys"
    INVALID_ARGUMENTS = "invalid_arguments"
    INVALID_RETURN_TYPE = "invalid_return_type"
    INVALID_DATE = "invalid_date"
    INVALID_STRING = "invalid_string"
    TOO_SMALL = "too_small"
    TOO_BIG = "too_big"
    INVALID_INTERSECTION_TYPES = "invalid_intersection_types"
    NOT_MULTIPLE_OF = "not_multiple_of"
    NOT_FINITE = "not_finite"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
