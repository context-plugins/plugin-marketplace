from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InvoiceTaxStatus(str, Enum):
    NOT_APPLICABLE = "not_applicable"
    CALCULATED = "calculated"
    COMMITTED = "committed"
    FAILED = "failed"
    VOIDED = "voided"

    __str__ = str.__str__


InvoiceTaxStatusOrStr: TypeAlias = Annotated[InvoiceTaxStatus | str, open_enum_validator(InvoiceTaxStatus)]
