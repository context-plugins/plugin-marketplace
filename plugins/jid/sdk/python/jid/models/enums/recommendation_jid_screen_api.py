from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RecommendationJidScreenApi(str, Enum):
    ENGAGE = "engage"
    VERIFY_FIRST = "verify_first"
    DO_NOT_ENGAGE = "do_not_engage"

    __str__ = str.__str__


RecommendationJidScreenApiOrStr: TypeAlias = Annotated[
    RecommendationJidScreenApi | str, open_enum_validator(RecommendationJidScreenApi)
]
