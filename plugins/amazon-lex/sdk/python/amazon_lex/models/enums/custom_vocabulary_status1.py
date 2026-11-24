from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomVocabularyStatus1(str, Enum):
    """The status of the custom vocabulary. If the status is Ready the custom vocabulary is ready to use."""

    READY = "Ready"
    DELETING = "Deleting"
    EXPORTING = "Exporting"
    IMPORTING = "Importing"
    CREATING = "Creating"

    __str__ = str.__str__


CustomVocabularyStatus1OrStr: TypeAlias = Annotated[
    CustomVocabularyStatus1 | str, open_enum_validator(CustomVocabularyStatus1)
]
