from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCodeBuildFleetApi(str, Enum):
    CODE_BUILD_20161006_UPDATE_FLEET = "CodeBuild_20161006.UpdateFleet"

    __str__ = str.__str__


XAmzTarget4AwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCodeBuildFleetApi | str, open_enum_validator(XAmzTarget4AwsCodeBuildFleetApi)
]
