from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget28(str, Enum):
    CODE_BUILD_20161006_LIST_SOURCE_CREDENTIALS = "CodeBuild_20161006.ListSourceCredentials"

    __str__ = str.__str__


XAmzTarget28OrStr: TypeAlias = Annotated[XAmzTarget28 | str, open_enum_validator(XAmzTarget28)]
