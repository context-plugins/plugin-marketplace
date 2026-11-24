from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Outcome(str, Enum):
    """legit, sales_pitch, spam and scam on a qualification are also community reports (jid.com/privacy section 2b)."""

    LEGIT = "legit"
    SALES_PITCH = "sales_pitch"
    SPAM = "spam"
    SCAM = "scam"
    CLOSED = "closed"
    GOOD = "good"
    JUNK = "junk"
    NO_RESPONSE = "no_response"

    __str__ = str.__str__


OutcomeOrStr: TypeAlias = Annotated[Outcome | str, open_enum_validator(Outcome)]
