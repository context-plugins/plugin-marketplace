from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Country(str, Enum):
    US = "US"

    __str__ = str.__str__


CountryOrStr: TypeAlias = Annotated[Country | str, open_enum_validator(Country)]
