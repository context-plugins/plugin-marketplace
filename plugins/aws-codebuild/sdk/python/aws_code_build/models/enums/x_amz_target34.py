from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget34(str, Enum):
    CODE_BUILD_20161006_LIST_CURATED_ENVIRONMENT_IMAGES = "CodeBuild_20161006.ListCuratedEnvironmentImages"

    __str__ = str.__str__


XAmzTarget34OrStr: TypeAlias = Annotated[XAmzTarget34 | str, open_enum_validator(XAmzTarget34)]
