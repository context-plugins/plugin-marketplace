from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsCodeBuildFleetApi(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_FLEETS = "CodeBuild_20161006.BatchGetFleets"

    __str__ = str.__str__


XAmzTargetAwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsCodeBuildFleetApi | str, open_enum_validator(XAmzTargetAwsCodeBuildFleetApi)
]
