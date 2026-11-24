from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget27(str, Enum):
    CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS = "CodeBuild_20161006.ImportSourceCredentials"

    __str__ = str.__str__


XAmzTarget27OrStr: TypeAlias = Annotated[XAmzTarget27 | str, open_enum_validator(XAmzTarget27)]
