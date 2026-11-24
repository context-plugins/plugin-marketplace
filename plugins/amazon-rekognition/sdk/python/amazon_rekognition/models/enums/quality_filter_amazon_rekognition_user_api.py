from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QualityFilterAmazonRekognitionUserApi(str, Enum):
    """A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't
    searched for in the collection. The default value is NONE."""

    NONE = "NONE"
    AUTO = "AUTO"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

    __str__ = str.__str__


QualityFilterAmazonRekognitionUserApiOrStr: TypeAlias = Annotated[
    QualityFilterAmazonRekognitionUserApi | str, open_enum_validator(QualityFilterAmazonRekognitionUserApi)
]
