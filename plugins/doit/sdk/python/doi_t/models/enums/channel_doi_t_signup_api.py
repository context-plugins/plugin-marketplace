from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChannelDoiTSignupApi(str, Enum):
    AGENT = "agent"
    CONSOLE = "console"
    WEB = "web"

    __str__ = str.__str__


ChannelDoiTSignupApiOrStr: TypeAlias = Annotated[ChannelDoiTSignupApi | str, open_enum_validator(ChannelDoiTSignupApi)]
