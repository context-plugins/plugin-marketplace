from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Feature(str, Enum):
    GENERAL_LABELS = "GENERAL_LABELS"
    IMAGE_PROPERTIES = "IMAGE_PROPERTIES"

    __str__ = str.__str__


FeatureOrStr: TypeAlias = Annotated[Feature | str, open_enum_validator(Feature)]
