from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PromptCacheRetention(str, Enum):
    IN_MEMORY = "in_memory"
    _24H = "24h"

    __str__ = str.__str__


PromptCacheRetentionOrStr: TypeAlias = Annotated[PromptCacheRetention | str, open_enum_validator(PromptCacheRetention)]
