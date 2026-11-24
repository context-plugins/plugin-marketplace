from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget26(str, Enum):
    CODE_BUILD_20161006_DELETE_SOURCE_CREDENTIALS = "CodeBuild_20161006.DeleteSourceCredentials"

    __str__ = str.__str__


XAmzTarget26OrStr: TypeAlias = Annotated[XAmzTarget26 | str, open_enum_validator(XAmzTarget26)]
