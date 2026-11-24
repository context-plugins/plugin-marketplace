from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1DevCycleManagementDeprecatedFeaturesV1Api(str, Enum):
    """Defines the transition into this percentage level"""

    LINEAR = "linear"
    DISCRETE = "discrete"

    __str__ = str.__str__


Type1DevCycleManagementDeprecatedFeaturesV1ApiOrStr: TypeAlias = Annotated[
    Type1DevCycleManagementDeprecatedFeaturesV1Api | str,
    open_enum_validator(Type1DevCycleManagementDeprecatedFeaturesV1Api),
]
