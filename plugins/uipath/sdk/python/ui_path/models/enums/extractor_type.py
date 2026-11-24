from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExtractorType(str, Enum):
    """Technology category of the extractor model"""

    SPECIALIZED = "Specialized"
    GENERATIVE_AI = "GenerativeAI"
    FORM_EXTRACTOR = "FormExtractor"
    INTELLIGENT_FORM_EXTRACTOR = "IntelligentFormExtractor"

    __str__ = str.__str__


ExtractorTypeOrStr: TypeAlias = Annotated[ExtractorType | str, open_enum_validator(ExtractorType)]
