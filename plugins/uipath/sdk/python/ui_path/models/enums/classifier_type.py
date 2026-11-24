from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassifierType(str, Enum):
    """Technology category of the classifier model"""

    SPECIALIZED = "Specialized"
    GENERATIVE_AI = "GenerativeAI"
    KEYWORD_BASED = "KeywordBased"

    __str__ = str.__str__


ClassifierTypeOrStr: TypeAlias = Annotated[ClassifierType | str, open_enum_validator(ClassifierType)]
