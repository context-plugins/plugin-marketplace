from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeDeliverdDevScreenApi(str, Enum):
    ENFORCE = "enforce"
    REPORT_ONLY = "report_only"

    __str__ = str.__str__


ModeDeliverdDevScreenApiOrStr: TypeAlias = Annotated[
    ModeDeliverdDevScreenApi | str, open_enum_validator(ModeDeliverdDevScreenApi)
]
