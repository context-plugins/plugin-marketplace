from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2(str, Enum):
    CODE_BUILD_20161006_START_SANDBOX_CONNECTION = "CodeBuild_20161006.StartSandboxConnection"

    __str__ = str.__str__


XAmzTarget2OrStr: TypeAlias = Annotated[XAmzTarget2 | str, open_enum_validator(XAmzTarget2)]
