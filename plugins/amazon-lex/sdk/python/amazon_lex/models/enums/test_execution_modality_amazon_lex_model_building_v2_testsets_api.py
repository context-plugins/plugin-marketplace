from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi(str, Enum):
    """Indicates whether audio or text is used."""

    TEXT = "Text"
    AUDIO = "Audio"

    __str__ = str.__str__


TestExecutionModalityAmazonLexModelBuildingV2TestsetsApiOrStr: TypeAlias = Annotated[
    TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi | str,
    open_enum_validator(TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi),
]
