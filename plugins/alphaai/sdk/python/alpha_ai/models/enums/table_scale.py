from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TableScale(str, Enum):
    """The unit the filing's own table headers name (``(In millions, except per share data)``). The prose and list
    fields (``analysis``, ``balance_sheet_cash_flow``, ``capital_returns``, ``concerns``, …) quote table figures as
    printed, so in a read with ``table_scale: millions`` a bare ``$36,197`` there is $36,197 million; per-share figures
    are always as printed. Null when the headers name no unit or name two without a clear majority. Added 2026-10-01 to
    every stored read."""

    THOUSANDS = "thousands"
    MILLIONS = "millions"
    BILLIONS = "billions"

    __str__ = str.__str__


TableScaleOrStr: TypeAlias = Annotated[TableScale | str, open_enum_validator(TableScale)]
