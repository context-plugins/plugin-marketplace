from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FeatureType(str, Enum):
    TABLES = "TABLES"
    FORMS = "FORMS"

    __str__ = str.__str__


FeatureTypeOrStr: TypeAlias = Annotated[FeatureType | str, open_enum_validator(FeatureType)]
