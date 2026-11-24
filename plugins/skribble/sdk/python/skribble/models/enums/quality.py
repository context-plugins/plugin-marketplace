from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Quality(str, Enum):
    SES = "SES"
    AES = "AES"
    QES = "QES"

    __str__ = str.__str__


QualityOrStr: TypeAlias = Annotated[Quality | str, open_enum_validator(Quality)]
