from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Set on a ``plan_like`` buyer when the Form 4's own footnotes or remarks decided it: ``placement`` — bought from
    the issuer (a PIPE, a subscription or securities purchase agreement, SPAC sponsor units); ``offering`` — allocated
    in a public offering or IPO; ``private`` — a negotiated block from another holder (a stock transfer agreement, a
    private transaction). Null when the price shape alone decided the role. Read by the collector since 2026-09-26;
    earlier filings are backfilled for 90 days."""

    PLACEMENT = "placement"
    OFFERING = "offering"
    PRIVATE = "private"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
