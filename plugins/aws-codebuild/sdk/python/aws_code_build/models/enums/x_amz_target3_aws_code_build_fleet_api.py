from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCodeBuildFleetApi(str, Enum):
    CODE_BUILD_20161006_LIST_FLEETS = "CodeBuild_20161006.ListFleets"

    __str__ = str.__str__


XAmzTarget3AwsCodeBuildFleetApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCodeBuildFleetApi | str, open_enum_validator(XAmzTarget3AwsCodeBuildFleetApi)
]
