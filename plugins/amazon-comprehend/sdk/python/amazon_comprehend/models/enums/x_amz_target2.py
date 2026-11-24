from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_KEY_PHRASES = "Comprehend_20171127.BatchDetectKeyPhrases"

    __str__ = str.__str__


XAmzTarget2OrStr: TypeAlias = Annotated[XAmzTarget2 | str, open_enum_validator(XAmzTarget2)]
