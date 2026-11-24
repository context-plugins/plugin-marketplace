from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByAmazonRekognitionContentModerationApi(str, Enum):
    """Sort to use for elements in the ModerationLabelDetections array. Use TIMESTAMP to sort array elements by the time
    labels are detected. Use NAME to alphabetically group elements for a label together. Within each label group, the
    array element are sorted by detection confidence. The default sort is by TIMESTAMP."""

    NAME = "NAME"
    TIMESTAMP = "TIMESTAMP"

    __str__ = str.__str__


SortByAmazonRekognitionContentModerationApiOrStr: TypeAlias = Annotated[
    SortByAmazonRekognitionContentModerationApi | str, open_enum_validator(SortByAmazonRekognitionContentModerationApi)
]
