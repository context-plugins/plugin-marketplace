from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """Specifies the type of artifact."""

    CODEPIPELINE = "CODEPIPELINE"
    S3 = "S3"
    NO_ARTIFACTS = "NO_ARTIFACTS"

    __str__ = str.__str__


Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
