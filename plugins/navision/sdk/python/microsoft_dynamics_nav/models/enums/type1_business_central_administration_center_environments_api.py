from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1BusinessCentralAdministrationCenterEnvironmentsApi(str, Enum):
    """Type of environment to create"""

    PRODUCTION = "Production"
    SANDBOX = "Sandbox"

    __str__ = str.__str__


Type1BusinessCentralAdministrationCenterEnvironmentsApiOrStr: TypeAlias = Annotated[
    Type1BusinessCentralAdministrationCenterEnvironmentsApi | str,
    open_enum_validator(Type1BusinessCentralAdministrationCenterEnvironmentsApi),
]
