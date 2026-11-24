from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathTestManagerRequirementsApi(str, Enum):
    """Lifecycle status of the requirement"""

    ACTIVE = "Active"
    DEPRECATED = "Deprecated"

    __str__ = str.__str__


StatusUiPathTestManagerRequirementsApiOrStr: TypeAlias = Annotated[
    StatusUiPathTestManagerRequirementsApi | str, open_enum_validator(StatusUiPathTestManagerRequirementsApi)
]
