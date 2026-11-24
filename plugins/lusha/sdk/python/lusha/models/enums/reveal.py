from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reveal(str, Enum):
    EMAILS = "emails"
    PHONES = "phones"

    __str__ = str.__str__


RevealOrStr: TypeAlias = Annotated[Reveal | str, open_enum_validator(Reveal)]
