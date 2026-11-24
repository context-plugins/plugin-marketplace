from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reply(str, Enum):
    """``api``: Prisma publishes replies. ``read``: read only."""

    API = "api"
    READ = "read"

    __str__ = str.__str__


ReplyOrStr: TypeAlias = Annotated[Reply | str, open_enum_validator(Reply)]
