from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UserAgent(str, Enum):
    PRISMA_WEBHOOKS_1 = "Prisma-Webhooks/1"

    __str__ = str.__str__


UserAgentOrStr: TypeAlias = Annotated[UserAgent | str, open_enum_validator(UserAgent)]
