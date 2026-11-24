from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict2(str, Enum):
    """The status of the most severe error on the page. If a page has both warnings and errors, the page status is
    error. Error status means the page cannot be shown in Search results."""

    VERDICT_UNSPECIFIED = "VERDICT_UNSPECIFIED"
    PASS = "PASS"
    PARTIAL = "PARTIAL"
    FAIL = "FAIL"
    NEUTRAL = "NEUTRAL"

    __str__ = str.__str__


Verdict2OrStr: TypeAlias = Annotated[Verdict2 | str, open_enum_validator(Verdict2)]
