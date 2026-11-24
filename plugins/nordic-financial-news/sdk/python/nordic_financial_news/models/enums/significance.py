from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Significance(str, Enum):
    """Editorial importance (omitted on a tombstone). ``notable`` = front-page-worthy; ``routine`` = factual ledger
    record; ``commentary`` = single-article opinion/analysis."""

    NOTABLE = "notable"
    ROUTINE = "routine"
    COMMENTARY = "commentary"

    __str__ = str.__str__


SignificanceOrStr: TypeAlias = Annotated[Significance | str, open_enum_validator(Significance)]
