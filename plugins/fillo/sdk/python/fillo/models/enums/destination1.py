from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Destination1(str, Enum):
    GDRIVE = "gdrive"
    BOX = "box"
    S3 = "s3"
    R2 = "r2"
    TRANSIT = "transit"
    NONE = "none"

    __str__ = str.__str__


Destination1OrStr: TypeAlias = Annotated[Destination1 | str, open_enum_validator(Destination1)]
