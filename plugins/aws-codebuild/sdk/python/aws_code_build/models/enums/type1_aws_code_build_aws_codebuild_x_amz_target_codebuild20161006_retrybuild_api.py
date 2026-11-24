from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(str, Enum):
    """The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER."""

    OAUTH = "OAUTH"
    CODECONNECTIONS = "CODECONNECTIONS"
    SECRETS_MANAGER = "SECRETS_MANAGER"

    __str__ = str.__str__


Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr: TypeAlias = Annotated[
    Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi | str,
    open_enum_validator(Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi),
]
