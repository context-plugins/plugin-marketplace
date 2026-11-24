from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4AwsCodeBuildSandboxeApi(str, Enum):
    """The type of the file system. The one supported type is EFS."""

    EFS = "EFS"

    __str__ = str.__str__


Type4AwsCodeBuildSandboxeApiOrStr: TypeAlias = Annotated[
    Type4AwsCodeBuildSandboxeApi | str, open_enum_validator(Type4AwsCodeBuildSandboxeApi)
]
