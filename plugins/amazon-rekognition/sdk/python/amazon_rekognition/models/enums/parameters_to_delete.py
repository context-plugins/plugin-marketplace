from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ParametersToDelete(str, Enum):
    CONNECTED_HOME_MIN_CONFIDENCE = "ConnectedHomeMinConfidence"
    REGIONS_OF_INTEREST = "RegionsOfInterest"

    __str__ = str.__str__


ParametersToDeleteOrStr: TypeAlias = Annotated[ParametersToDelete | str, open_enum_validator(ParametersToDelete)]
