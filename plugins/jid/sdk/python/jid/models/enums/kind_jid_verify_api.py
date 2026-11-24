from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindJidVerifyApi(str, Enum):
    REGISTRATION = "registration"
    FLAG = "flag"
    UNHELD = "unheld"

    __str__ = str.__str__


KindJidVerifyApiOrStr: TypeAlias = Annotated[KindJidVerifyApi | str, open_enum_validator(KindJidVerifyApi)]
