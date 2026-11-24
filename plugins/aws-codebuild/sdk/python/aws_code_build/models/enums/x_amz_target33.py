from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget33(str, Enum):
    CODE_BUILD_20161006_RETRY_BUILD_BATCH = "CodeBuild_20161006.RetryBuildBatch"

    __str__ = str.__str__


XAmzTarget33OrStr: TypeAlias = Annotated[XAmzTarget33 | str, open_enum_validator(XAmzTarget33)]
