from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class To(str, Enum):
    ALLOW = "allow"
    DENY = "deny"
    REQUIRE_HUMAN = "require_human"
    REQUIRE_REVIEW = "require_review"

    __str__ = str.__str__


ToOrStr: TypeAlias = Annotated[To | str, open_enum_validator(To)]
