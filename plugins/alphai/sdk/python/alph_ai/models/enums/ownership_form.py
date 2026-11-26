from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OwnershipForm(str, Enum):
    """SEC Form 4 insider rows only — the holding pool the transaction touched. ``null`` for non-insider news. A single
    Form 4 can surface a ``direct`` and an ``indirect`` leg of the same plan as two separate articles (same filing URL,
    same date); they are distinct economic events, so SUM them rather than dedupe by URL/accession."""

    DIRECT = "direct"
    INDIRECT = "indirect"

    __str__ = str.__str__


OwnershipFormOrStr: TypeAlias = Annotated[OwnershipForm | str, open_enum_validator(OwnershipForm)]
