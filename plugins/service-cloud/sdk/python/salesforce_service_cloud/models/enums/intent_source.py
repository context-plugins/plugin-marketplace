from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IntentSource(str, Enum):
    """Prediction system that detects the intent.

    * ``DIRECT``—Utterance search or an exact match
    * ``CORE_NLP``—Third-party Natural Language Processing (NLP)
    * ``EINSTEIN_NLP``—Einstein NLP"""

    DIRECT = "DIRECT"
    CORE_NLP = "CORE_NLP"
    EINSTEIN_NLP = "EINSTEIN_NLP"

    __str__ = str.__str__


IntentSourceOrStr: TypeAlias = Annotated[IntentSource | str, open_enum_validator(IntentSource)]
