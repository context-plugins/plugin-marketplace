from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Service(str, Enum):
    SMS = "sms"

    __str__ = str.__str__


ServiceOrStr: TypeAlias = Annotated[Service | str, open_enum_validator(Service)]
