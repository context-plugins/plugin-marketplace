from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsCodeBuildBuildsApi(str, Enum):
    CODE_BUILD_20161006_START_BUILD = "CodeBuild_20161006.StartBuild"

    __str__ = str.__str__


XAmzTarget4AwsCodeBuildBuildsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsCodeBuildBuildsApi | str, open_enum_validator(XAmzTarget4AwsCodeBuildBuildsApi)
]
