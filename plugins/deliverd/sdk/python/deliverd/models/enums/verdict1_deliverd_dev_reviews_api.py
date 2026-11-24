from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict1DeliverdDevReviewsApi(str, Enum):
    APPROVED = "approved"
    CHANGES_REQUESTED = "changes_requested"

    __str__ = str.__str__


Verdict1DeliverdDevReviewsApiOrStr: TypeAlias = Annotated[
    Verdict1DeliverdDevReviewsApi | str, open_enum_validator(Verdict1DeliverdDevReviewsApi)
]
