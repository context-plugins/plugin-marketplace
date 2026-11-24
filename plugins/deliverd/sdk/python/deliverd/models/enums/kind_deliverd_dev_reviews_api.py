from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KindDeliverdDevReviewsApi(str, Enum):
    USER = "user"
    GUEST = "guest"

    __str__ = str.__str__


KindDeliverdDevReviewsApiOrStr: TypeAlias = Annotated[
    KindDeliverdDevReviewsApi | str, open_enum_validator(KindDeliverdDevReviewsApi)
]
