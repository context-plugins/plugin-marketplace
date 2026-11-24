from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Country(str, Enum):
    """The register the row came from. Present on every row, so no result is currency-ambiguous."""

    US = "US"
    CA = "CA"

    __str__ = str.__str__


CountryOrStr: TypeAlias = Annotated[Country | str, open_enum_validator(Country)]
