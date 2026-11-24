from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FeatureAmazonRekognitionProjectVersionApi(str, Enum):
    """The feature that was customized."""

    CONTENT_MODERATION = "CONTENT_MODERATION"
    CUSTOM_LABELS = "CUSTOM_LABELS"

    __str__ = str.__str__


FeatureAmazonRekognitionProjectVersionApiOrStr: TypeAlias = Annotated[
    FeatureAmazonRekognitionProjectVersionApi | str, open_enum_validator(FeatureAmazonRekognitionProjectVersionApi)
]
