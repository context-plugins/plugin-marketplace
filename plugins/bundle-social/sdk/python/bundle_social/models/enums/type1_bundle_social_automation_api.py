from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1BundleSocialAutomationApi(str, Enum):
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    AUDIO = "AUDIO"
    FILE = "FILE"

    __str__ = str.__str__


Type1BundleSocialAutomationApiOrStr: TypeAlias = Annotated[
    Type1BundleSocialAutomationApi | str, open_enum_validator(Type1BundleSocialAutomationApi)
]
