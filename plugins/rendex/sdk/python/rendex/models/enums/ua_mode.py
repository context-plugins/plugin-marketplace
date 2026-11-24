from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UaMode(str, Enum):
    """How the monitor presents its User-Agent. ``auto`` (default) identifies as RendexWatch and retries once with a
    standard browser identity if the page looks blocked; ``identify`` always identifies as RendexWatch and never falls
    back; ``stealth`` always presents a standard browser identity. See https://rendex.dev/bot."""

    AUTO = "auto"
    IDENTIFY = "identify"
    STEALTH = "stealth"

    __str__ = str.__str__


UaModeOrStr: TypeAlias = Annotated[UaMode | str, open_enum_validator(UaMode)]
