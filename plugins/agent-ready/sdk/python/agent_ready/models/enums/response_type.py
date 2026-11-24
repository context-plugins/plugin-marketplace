from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ResponseType(str, Enum):
    ANSWER = "answer"
    FAILURE = "failure"
    ELICITATION = "elicitation"
    PROMISE = "promise"

    __str__ = str.__str__


ResponseTypeOrStr: TypeAlias = Annotated[ResponseType | str, open_enum_validator(ResponseType)]
