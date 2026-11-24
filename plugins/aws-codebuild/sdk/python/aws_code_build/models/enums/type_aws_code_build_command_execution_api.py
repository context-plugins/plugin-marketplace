from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAwsCodeBuildCommandExecutionApi(str, Enum):
    """The command type."""

    SHELL = "SHELL"

    __str__ = str.__str__


TypeAwsCodeBuildCommandExecutionApiOrStr: TypeAlias = Annotated[
    TypeAwsCodeBuildCommandExecutionApi | str, open_enum_validator(TypeAwsCodeBuildCommandExecutionApi)
]
