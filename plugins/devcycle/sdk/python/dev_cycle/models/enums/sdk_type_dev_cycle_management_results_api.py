from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SdkTypeDevCycleManagementResultsApi(str, Enum):
    CLIENT = "client"
    SERVER = "server"
    MOBILE = "mobile"
    API = "api"

    __str__ = str.__str__


SdkTypeDevCycleManagementResultsApiOrStr: TypeAlias = Annotated[
    SdkTypeDevCycleManagementResultsApi | str, open_enum_validator(SdkTypeDevCycleManagementResultsApi)
]
