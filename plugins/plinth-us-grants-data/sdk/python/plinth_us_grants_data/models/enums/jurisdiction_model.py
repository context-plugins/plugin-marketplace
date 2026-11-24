from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JurisdictionModel(str, Enum):
    US = "us"
    CA = "ca"

    __str__ = str.__str__


JurisdictionModelOrStr: TypeAlias = Annotated[JurisdictionModel | str, open_enum_validator(JurisdictionModel)]
