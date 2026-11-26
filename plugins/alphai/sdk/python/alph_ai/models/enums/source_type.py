from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceType(str, Enum):
    GDELT = "gdelt"
    SEC_FORM4 = "sec_form4"
    SEC_FORM8K = "sec_form8k"
    SEC_FORM6K = "sec_form6k"

    __str__ = str.__str__


SourceTypeOrStr: TypeAlias = Annotated[SourceType | str, open_enum_validator(SourceType)]
