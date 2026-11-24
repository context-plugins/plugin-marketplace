from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KeywordMatchMode(str, Enum):
    """Controls what keyword match options to use. If both keyword_match_mode and disable_keyword_match are set,
    keyword_match_mode will take precedence. Defaults to KeywordMatchMode.KEYWORD_MATCH_ALL if no value is specified."""

    KEYWORD_MATCH_MODE_UNSPECIFIED = "KEYWORD_MATCH_MODE_UNSPECIFIED"
    KEYWORD_MATCH_DISABLED = "KEYWORD_MATCH_DISABLED"
    KEYWORD_MATCH_ALL = "KEYWORD_MATCH_ALL"
    KEYWORD_MATCH_TITLE_ONLY = "KEYWORD_MATCH_TITLE_ONLY"

    __str__ = str.__str__


KeywordMatchModeOrStr: TypeAlias = Annotated[KeywordMatchMode | str, open_enum_validator(KeywordMatchMode)]
