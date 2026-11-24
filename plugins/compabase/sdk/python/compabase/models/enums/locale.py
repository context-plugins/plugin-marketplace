from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Locale(str, Enum):
    PL = "pl"
    EN = "en"
    DE = "de"

    __str__ = str.__str__


LocaleOrStr: TypeAlias = Annotated[Locale | str, open_enum_validator(Locale)]
