from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeJuriSignTemplatesApi(str, Enum):
    SIGNATURE = "signature"
    TEXT = "text"
    DATE = "date"
    CHECKBOX = "checkbox"

    __str__ = str.__str__


TypeJuriSignTemplatesApiOrStr: TypeAlias = Annotated[
    TypeJuriSignTemplatesApi | str, open_enum_validator(TypeJuriSignTemplatesApi)
]
