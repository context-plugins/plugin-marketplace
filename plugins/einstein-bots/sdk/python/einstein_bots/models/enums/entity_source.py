from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntitySource(str, Enum):
    """"Prediction system that detects the entity. The Bot API can call NLPs or it can figure out the entity by itself."

    * ``BOT_SERVICE``—Bot detects entity without Natural Language Processing (NLP)
    * ``CORE_NLP``—Third-party NLP
    * ``EINSTEIN_NLP``—Einstein NLP"""

    BOT_SERVICE = "BOT_SERVICE"
    CORE_NLP = "CORE_NLP"
    EINSTEIN_NLP = "EINSTEIN_NLP"

    __str__ = str.__str__


EntitySourceOrStr: TypeAlias = Annotated[EntitySource | str, open_enum_validator(EntitySource)]
