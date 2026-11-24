from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDevCycleManagementDeprecatedFeaturesV1Api(str, Enum):
    """Type of rollout"""

    SCHEDULE = "schedule"
    GRADUAL = "gradual"
    STEPPED = "stepped"

    __str__ = str.__str__


TypeDevCycleManagementDeprecatedFeaturesV1ApiOrStr: TypeAlias = Annotated[
    TypeDevCycleManagementDeprecatedFeaturesV1Api | str,
    open_enum_validator(TypeDevCycleManagementDeprecatedFeaturesV1Api),
]
