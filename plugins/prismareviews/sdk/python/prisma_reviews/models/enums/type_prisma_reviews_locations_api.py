from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypePrismaReviewsLocationsApi(str, Enum):
    WRITE_REVIEW = "write_review"
    LISTING = "listing"

    __str__ = str.__str__


TypePrismaReviewsLocationsApiOrStr: TypeAlias = Annotated[
    TypePrismaReviewsLocationsApi | str, open_enum_validator(TypePrismaReviewsLocationsApi)
]
