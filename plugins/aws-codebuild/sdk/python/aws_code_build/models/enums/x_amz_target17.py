from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget17(str, Enum):
    CODE_BUILD_20161006_CREATE_WEBHOOK = "CodeBuild_20161006.CreateWebhook"

    __str__ = str.__str__


XAmzTarget17OrStr: TypeAlias = Annotated[XAmzTarget17 | str, open_enum_validator(XAmzTarget17)]
