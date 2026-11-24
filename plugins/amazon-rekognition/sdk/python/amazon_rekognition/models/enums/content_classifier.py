from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentClassifier(str, Enum):
    FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
    FREE_OF_ADULT_CONTENT = "FreeOfAdultContent"

    __str__ = str.__str__


ContentClassifierOrStr: TypeAlias = Annotated[ContentClassifier | str, open_enum_validator(ContentClassifier)]
