from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LanguageCode2AmazonTranscribeServiceOperationsApi(str, Enum):
    """The Language Code of the HealthScribe streaming session."""

    EN_US = "en-US"

    __str__ = str.__str__


LanguageCode2AmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    LanguageCode2AmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(LanguageCode2AmazonTranscribeServiceOperationsApi),
]
