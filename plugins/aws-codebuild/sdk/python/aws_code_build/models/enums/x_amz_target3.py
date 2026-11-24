from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3(str, Enum):
    CODE_BUILD_20161006_BATCH_GET_BUILD_BATCHES = "CodeBuild_20161006.BatchGetBuildBatches"

    __str__ = str.__str__


XAmzTarget3OrStr: TypeAlias = Annotated[XAmzTarget3 | str, open_enum_validator(XAmzTarget3)]
