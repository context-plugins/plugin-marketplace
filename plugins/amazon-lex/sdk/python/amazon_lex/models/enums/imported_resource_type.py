from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ImportedResourceType(str, Enum):
    """The type of resource that was imported."""

    BOT = "Bot"
    BOT_LOCALE = "BotLocale"
    CUSTOM_VOCABULARY = "CustomVocabulary"
    TEST_SET = "TestSet"

    __str__ = str.__str__


ImportedResourceTypeOrStr: TypeAlias = Annotated[ImportedResourceType | str, open_enum_validator(ImportedResourceType)]
