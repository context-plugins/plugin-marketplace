from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusEinsteinBotsApiBetaVersionsApi(str, Enum):
    """API Version status."""

    ACTIVE = "ACTIVE"
    DEPRECATED = "DEPRECATED"

    __str__ = str.__str__


StatusEinsteinBotsApiBetaVersionsApiOrStr: TypeAlias = Annotated[
    StatusEinsteinBotsApiBetaVersionsApi | str, open_enum_validator(StatusEinsteinBotsApiBetaVersionsApi)
]
