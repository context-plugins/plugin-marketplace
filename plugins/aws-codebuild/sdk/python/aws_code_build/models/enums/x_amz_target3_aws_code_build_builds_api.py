from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsCodeBuildBuildsApi(str, Enum):
    CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT = "CodeBuild_20161006.ListBuildsForProject"

    __str__ = str.__str__


XAmzTarget3AwsCodeBuildBuildsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsCodeBuildBuildsApi | str, open_enum_validator(XAmzTarget3AwsCodeBuildBuildsApi)
]
