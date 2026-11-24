from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CallbackMethod1(str, Enum):
    """Required when callback_url is set."""

    GET = "get"

    __str__ = str.__str__


CallbackMethod1OrStr: TypeAlias = Annotated[CallbackMethod1 | str, open_enum_validator(CallbackMethod1)]
