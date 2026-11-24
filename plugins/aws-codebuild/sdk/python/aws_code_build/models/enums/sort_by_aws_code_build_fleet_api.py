from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByAwsCodeBuildFleetApi(str, Enum):
    """The criterion to be used to list compute fleet names. Valid values include: CREATED_TIME: List based on when each
    compute fleet was created. LAST_MODIFIED_TIME: List based on when information about each compute fleet was last
    changed. NAME: List based on each compute fleet's name. Use sortOrder to specify in what order to list the compute
    fleet names based on the preceding criteria."""

    NAME = "NAME"
    CREATED_TIME = "CREATED_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

    __str__ = str.__str__


SortByAwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    SortByAwsCodeBuildFleetApi | str, open_enum_validator(SortByAwsCodeBuildFleetApi)
]
