from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scale(str, Enum):
    """The multiplier ``numeric`` is expressed in. Filled only when something in the filing says it: the printed value
    (``$6.76 billion``, ``$60,801 (In millions)``), the metric name, the row's own prior figure, the same amount printed
    with its unit in the filing's prose, or the filing's table header when it names one scale for its tables. Per-share
    and percentage figures are ``ones``; a per-unit metric (revenue per customer, a price per ounce) never takes a
    table's scale. Null means the filing did not say — treat ``numeric`` as unscaled at your own risk rather than assume
    millions. Added 2026-09-12; the rules were tightened and every stored read recomputed on 2026-10-01."""

    ONES = "ones"
    THOUSANDS = "thousands"
    MILLIONS = "millions"
    BILLIONS = "billions"
    TRILLIONS = "trillions"

    __str__ = str.__str__


ScaleOrStr: TypeAlias = Annotated[Scale | str, open_enum_validator(Scale)]
