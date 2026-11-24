from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Example(str, Enum):
    _1 = "1"
    STRICT = "strict"
    SUBJECT_PCS = "subject_pcs"
    UNSUPPORTED = "unsupported"
    XML = "xml"
    LIST = "list"

    __str__ = str.__str__


ExampleOrStr: TypeAlias = Annotated[Example | str, open_enum_validator(Example)]
