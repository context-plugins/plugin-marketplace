from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operation(str, Enum):
    """Describes the type of requested change to a feature. example: 'featureUpdate'"""

    FEATURE_UPDATE = "featureUpdate"
    FEATURE_STATUS_UPDATE = "featureStatusUpdate"
    FEATURE_STATIC_CONFIGURATION_UPDATE = "featureStaticConfigurationUpdate"

    __str__ = str.__str__


OperationOrStr: TypeAlias = Annotated[Operation | str, open_enum_validator(Operation)]
