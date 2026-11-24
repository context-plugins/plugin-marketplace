from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypePrismaReviewsPlatformsApi(str, Enum):
    TEXT = "text"
    SECRET = "secret"
    TEXTAREA = "textarea"
    LIST = "list"
    URL = "url"

    __str__ = str.__str__


TypePrismaReviewsPlatformsApiOrStr: TypeAlias = Annotated[
    TypePrismaReviewsPlatformsApi | str, open_enum_validator(TypePrismaReviewsPlatformsApi)
]
