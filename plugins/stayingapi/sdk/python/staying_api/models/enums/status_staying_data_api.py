from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusStayingDataApi(str, Enum):
    OK = "ok"
    FAILED = "failed"
    SKIPPED = "skipped"

    __str__ = str.__str__


StatusStayingDataApiOrStr: TypeAlias = Annotated[StatusStayingDataApi | str, open_enum_validator(StatusStayingDataApi)]
