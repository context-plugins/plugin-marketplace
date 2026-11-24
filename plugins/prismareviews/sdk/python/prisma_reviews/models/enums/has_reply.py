from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HasReply(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


HasReplyOrStr: TypeAlias = Annotated[HasReply | str, open_enum_validator(HasReply)]
