from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Output(str, Enum):
    JSON = "json"
    HTML = "html"

    __str__ = str.__str__


OutputOrStr: TypeAlias = Annotated[Output | str, open_enum_validator(Output)]
