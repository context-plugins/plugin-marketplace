from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SummaryState(str, Enum):
    """``published``: the summary covers every article the story had when it was written. ``stale``: articles joined
    since; the rewrite is queued. ``preparing``: no summary yet — the texts are the lead article's own."""

    PUBLISHED = "published"
    STALE = "stale"
    PREPARING = "preparing"

    __str__ = str.__str__


SummaryStateOrStr: TypeAlias = Annotated[SummaryState | str, open_enum_validator(SummaryState)]
