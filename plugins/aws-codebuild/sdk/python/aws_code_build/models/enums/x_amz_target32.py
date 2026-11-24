from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget32(str, Enum):
    CODE_BUILD_20161006_INVALIDATE_PROJECT_CACHE = "CodeBuild_20161006.InvalidateProjectCache"

    __str__ = str.__str__


XAmzTarget32OrStr: TypeAlias = Annotated[XAmzTarget32 | str, open_enum_validator(XAmzTarget32)]
