from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Event lifecycle status. ``scheduled`` is upcoming; ``published`` means the event has occurred (events flip ~2
    days after their date); ``cancelled`` means the issuer withdrew it. List endpoints return ``scheduled`` +
    ``published`` and exclude ``cancelled`` by default. Pass the ``status`` query parameter to filter (e.g.
    ``status=cancelled``)."""

    SCHEDULED = "scheduled"
    PUBLISHED = "published"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
