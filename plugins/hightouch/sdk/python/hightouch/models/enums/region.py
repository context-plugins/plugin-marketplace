from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Region(str, Enum):
    """The Match Booster region to run the enrichment in. Defaults to the model's configured region."""

    US = "us"
    EU = "eu"

    __str__ = str.__str__


RegionOrStr: TypeAlias = Annotated[Region | str, open_enum_validator(Region)]
