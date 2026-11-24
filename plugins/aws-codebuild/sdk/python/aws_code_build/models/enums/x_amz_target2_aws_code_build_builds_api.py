from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsCodeBuildBuildsApi(str, Enum):
    CODE_BUILD_20161006_LIST_BUILDS = "CodeBuild_20161006.ListBuilds"

    __str__ = str.__str__


XAmzTarget2AwsCodeBuildBuildsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsCodeBuildBuildsApi | str, open_enum_validator(XAmzTarget2AwsCodeBuildBuildsApi)
]
