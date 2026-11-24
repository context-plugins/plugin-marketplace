from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCodeBuildFleetApi(str, Enum):
    CODE_BUILD_20161006_DELETE_FLEET = "CodeBuild_20161006.DeleteFleet"

    __str__ = str.__str__


XAmzTarget2AwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCodeBuildFleetApi | str, open_enum_validator(XAmzTarget2AwsCodeBuildFleetApi)
]
