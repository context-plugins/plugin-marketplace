from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi(str, Enum):
    """The type of cache used by the build project. Valid values include: NO_CACHE: The build project does not use any
    cache. S3: The build project reads and writes from and to S3. LOCAL: The build project stores a cache locally on a
    build host that is only available to that build host."""

    NO_CACHE = "NO_CACHE"
    S3 = "S3"
    LOCAL = "LOCAL"

    __str__ = str.__str__


Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr: TypeAlias = Annotated[
    Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi | str,
    open_enum_validator(Type2AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi),
]
