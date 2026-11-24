from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MappingModel(str, Enum):
    """Transformation to apply. Defaults to "paraphrase"."""

    PARAPHRASE = "paraphrase"
    PASSIVE_TO_ACTIVE = "passive_to_active"
    ACTIVE_TO_PASSIVE = "active_to_passive"
    INFORMAL_TO_FORMAL = "informal_to_formal"
    FORMAL_TO_INFORMAL = "formal_to_informal"
    SENTENCE_SPLIT = "sentence_split"
    REWORD = "reword"
    GENERATE_TITLE = "generate_title"
    GENERATE_ACRONYM = "generate_acronym"
    GENERATE_META_DESCRIPTION = "generate_meta_description"
    SUMMARIZE = "summarize"
    EXPAND = "expand"
    SHORTEN = "shorten"
    SWITCH_TONE = "switch_tone"
    SWITCH_TENSE = "switch_tense"

    __str__ = str.__str__


MappingModelOrStr: TypeAlias = Annotated[MappingModel | str, open_enum_validator(MappingModel)]
