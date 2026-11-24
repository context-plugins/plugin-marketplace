from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind(str, Enum):
    WEBHOOK = "webhook"
    INTEGRATION = "integration"

    __str__ = str.__str__


KindOrStr: TypeAlias = Annotated[Kind | str, open_enum_validator(Kind)]
