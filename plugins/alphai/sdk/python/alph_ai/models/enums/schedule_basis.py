from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScheduleBasis(str, Enum):
    """``official``: the date is printed on the agency's own schedule page. ``inferred``: derived from the documented
    publication cadence — weekly jobless claims (DOL publishes no forward schedule) and FOMC minutes dates the Fed has
    not printed yet (three weeks after the meeting). Inferred dates flip to official once the agency lists them."""

    OFFICIAL = "official"
    INFERRED = "inferred"

    __str__ = str.__str__


ScheduleBasisOrStr: TypeAlias = Annotated[ScheduleBasis | str, open_enum_validator(ScheduleBasis)]
