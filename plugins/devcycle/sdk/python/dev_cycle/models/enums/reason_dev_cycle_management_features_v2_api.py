from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReasonDevCycleManagementFeaturesV2Api(str, Enum):
    """Reason for staleness"""

    RELEASED = "released"
    UNUSED = "unused"
    UNMODIFIED_SHORT = "unmodifiedShort"
    UNMODIFIED_LONG = "unmodifiedLong"

    __str__ = str.__str__


ReasonDevCycleManagementFeaturesV2ApiOrStr: TypeAlias = Annotated[
    ReasonDevCycleManagementFeaturesV2Api | str, open_enum_validator(ReasonDevCycleManagementFeaturesV2Api)
]
