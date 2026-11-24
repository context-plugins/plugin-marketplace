from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildSandboxeApi(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_SANDBOXES = "CodeBuild_20161006.BatchGetSandboxes"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildSandboxeApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildSandboxeApi | str, open_enum_validator(XAmzTargetAwsCodeBuildSandboxeApi)
]
