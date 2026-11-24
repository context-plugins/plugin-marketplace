from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AwsCodeBuildBuildsApi(str, Enum):
    CODE_BUILD_20161006_STOP_BUILD = "CodeBuild_20161006.StopBuild"

    __str__ = str.__str__


XAmzTarget5AwsCodeBuildBuildsApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AwsCodeBuildBuildsApi | str, open_enum_validator(XAmzTarget5AwsCodeBuildBuildsApi)
]
