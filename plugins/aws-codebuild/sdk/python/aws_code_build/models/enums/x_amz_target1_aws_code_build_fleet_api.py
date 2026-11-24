from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsCodeBuildFleetApi(str, Enum):
    CODE_BUILD_20161006_CREATE_FLEET = "CodeBuild_20161006.CreateFleet"

    __str__ = str.__str__


XAmzTarget1AwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsCodeBuildFleetApi | str, open_enum_validator(XAmzTarget1AwsCodeBuildFleetApi)
]
