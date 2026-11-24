from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicApiRuleTypeDto(str, Enum):
    CHECK = "check"
    MONITOR = "monitor"

    __str__ = str.__str__


PublicApiRuleTypeDtoOrStr: TypeAlias = Annotated[PublicApiRuleTypeDto | str, open_enum_validator(PublicApiRuleTypeDto)]
