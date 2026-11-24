from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    CODE_BUILD_20161006_UPDATE_WEBHOOK = "CodeBuild_20161006.UpdateWebhook"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
