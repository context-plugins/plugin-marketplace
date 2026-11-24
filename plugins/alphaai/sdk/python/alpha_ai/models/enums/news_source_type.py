from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NewsSourceType(str, Enum):
    """Where a row was ingested from, the axis the ``source_type`` filter on ``/api/news/`` selects on. ``gdelt`` is
    press coverage (every publisher channel: the GDELT stream, RSS feeds, directly parsed publisher pages);
    ``sec_form4`` an insider transaction (``category`` ``insider``); ``sec_form8k`` an 8-K current report (carries the
    ``filing`` block, filterable by ``item``); ``sec_form6k`` a foreign private issuer's 6-K earnings release. The row's
    ``original.source`` names the outlet or the SEC form in words."""

    GDELT = "gdelt"
    SEC_FORM4 = "sec_form4"
    SEC_FORM8K = "sec_form8k"
    SEC_FORM6K = "sec_form6k"

    __str__ = str.__str__


NewsSourceTypeOrStr: TypeAlias = Annotated[NewsSourceType | str, open_enum_validator(NewsSourceType)]
