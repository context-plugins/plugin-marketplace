from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget18(str, Enum):
    CODE_BUILD_20161006_DELETE_WEBHOOK = "CodeBuild_20161006.DeleteWebhook"

    __str__ = str.__str__


XAmzTarget18OrStr: TypeAlias = Annotated[XAmzTarget18 | str, open_enum_validator(XAmzTarget18)]
