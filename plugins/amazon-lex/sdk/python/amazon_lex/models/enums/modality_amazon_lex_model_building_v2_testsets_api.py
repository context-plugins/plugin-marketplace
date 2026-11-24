from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModalityAmazonLexModelBuildingV2TestsetsApi(str, Enum):
    """Indicates whether the test set is audio or text data."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


ModalityAmazonLexModelBuildingV2TestsetsApiOrStr: TypeAlias = Annotated[
    ModalityAmazonLexModelBuildingV2TestsetsApi | str, open_enum_validator(ModalityAmazonLexModelBuildingV2TestsetsApi)
]
