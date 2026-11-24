from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCodeBuildSandboxeApi(str, Enum):
    CODE_BUILD_20161006_LIST_SANDBOXES_FOR_PROJECT = "CodeBuild_20161006.ListSandboxesForProject"

    __str__ = str.__str__


XAmzTarget2AwsCodeBuildSandboxeApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCodeBuildSandboxeApi | str, open_enum_validator(XAmzTarget2AwsCodeBuildSandboxeApi)
]
