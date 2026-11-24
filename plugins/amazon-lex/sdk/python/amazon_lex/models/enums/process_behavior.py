from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProcessBehavior(str, Enum):
    """If you set the processBehavior element to BUILD, Amazon Lex builds the bot so that it can be run. If you set the
    element to SAVE Amazon Lex saves the bot, but doesn't build it. If you don't specify this value, the default value
    is BUILD."""

    SAVE = "SAVE"
    BUILD = "BUILD"

    __str__ = str.__str__


ProcessBehaviorOrStr: TypeAlias = Annotated[ProcessBehavior | str, open_enum_validator(ProcessBehavior)]
