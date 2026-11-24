from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCodeBuildSandboxeApi(str, Enum):
    CODE_BUILD_20161006_LIST_SANDBOXES = "CodeBuild_20161006.ListSandboxes"

    __str__ = str.__str__


XAmzTarget1AwsCodeBuildSandboxeApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCodeBuildSandboxeApi | str, open_enum_validator(XAmzTarget1AwsCodeBuildSandboxeApi)
]
