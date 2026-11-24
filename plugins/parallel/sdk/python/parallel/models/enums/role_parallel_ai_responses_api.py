from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RoleParallelAiResponsesApi(str, Enum):
    """The role of the message author."""

    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"
    DEVELOPER = "developer"

    __str__ = str.__str__


RoleParallelAiResponsesApiOrStr: TypeAlias = Annotated[
    RoleParallelAiResponsesApi | str, open_enum_validator(RoleParallelAiResponsesApi)
]
