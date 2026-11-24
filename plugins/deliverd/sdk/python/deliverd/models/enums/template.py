from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Template(str, Enum):
    B_01_01 = "B_01.01"
    B_02_01 = "B_02.01"
    B_02_02 = "B_02.02"
    B_05_01 = "B_05.01"
    B_06_01 = "B_06.01"
    B_07_01 = "B_07.01"

    __str__ = str.__str__


TemplateOrStr: TypeAlias = Annotated[Template | str, open_enum_validator(Template)]
