from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputModeAmazonLexModelBuildingV2TestsetgenerationsApi(str, Enum):
    """The selection to filter by input mode for the conversation logs."""

    SPEECH = "Speech"
    TEXT = "Text"

    __str__ = str.__str__


InputModeAmazonLexModelBuildingV2TestsetgenerationsApiOrStr: TypeAlias = Annotated[
    InputModeAmazonLexModelBuildingV2TestsetgenerationsApi | str,
    open_enum_validator(InputModeAmazonLexModelBuildingV2TestsetgenerationsApi),
]
