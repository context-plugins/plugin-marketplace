from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Lang(str, Enum):
    EN = "en"
    DE = "de"
    FR = "fr"

    __str__ = str.__str__


LangOrStr: TypeAlias = Annotated[Lang | str, open_enum_validator(Lang)]
