from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CountryCode(str, Enum):
    US = "US"

    __str__ = str.__str__


CountryCodeOrStr: TypeAlias = Annotated[CountryCode | str, open_enum_validator(CountryCode)]
