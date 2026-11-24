from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7(str, Enum):
    CODE_BUILD_20161006_CREATE_PROJECT = "CodeBuild_20161006.CreateProject"

    __str__ = str.__str__


XAmzTarget7OrStr: TypeAlias = Annotated[XAmzTarget7 | str, open_enum_validator(XAmzTarget7)]
