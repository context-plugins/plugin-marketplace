from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomVocabularyStatus(str, Enum):
    """The status of removing the custom vocabulary."""

    READY = "Ready"
    DELETING = "Deleting"
    EXPORTING = "Exporting"
    IMPORTING = "Importing"
    CREATING = "Creating"

    __str__ = str.__str__


CustomVocabularyStatusOrStr: TypeAlias = Annotated[
    CustomVocabularyStatus | str, open_enum_validator(CustomVocabularyStatus)
]
