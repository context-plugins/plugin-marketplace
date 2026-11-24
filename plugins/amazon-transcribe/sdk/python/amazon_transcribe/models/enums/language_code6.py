from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode6(str, Enum):
    """The Language Code that you specified in your request. Same as provided in the StartMedicalScribeStreamRequest."""

    EN_US = "en-US"

    __str__ = str.__str__


LanguageCode6OrStr: TypeAlias = Annotated[LanguageCode6 | str, open_enum_validator(LanguageCode6)]
