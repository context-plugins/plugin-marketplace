from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FeatureAmazonRekognitionProjectApi(str, Enum):
    """Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default."""

    CONTENT_MODERATION = "CONTENT_MODERATION"
    CUSTOM_LABELS = "CUSTOM_LABELS"

    __str__ = str.__str__


FeatureAmazonRekognitionProjectApiOrStr: TypeAlias = Annotated[
    FeatureAmazonRekognitionProjectApi | str, open_enum_validator(FeatureAmazonRekognitionProjectApi)
]
