from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Version(str, Enum):
    """The version of the webhook"""

    V1_0 = "V1_0"
    V2_0 = "V2_0"

    __str__ = str.__str__


VersionOrStr: TypeAlias = Annotated[Version | str, open_enum_validator(Version)]
