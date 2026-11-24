from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TenseMapping(str, Enum):
    """Target tense. Only used with mapping="switch_tense"."""

    SIMPLE_PAST = "simple past"
    PAST_PERFECT = "past perfect"
    PAST_CONTINUOUS = "past continuous"
    PAST_PERFECT_CONTINUOUS = "past perfect continuous"
    SIMPLE_PRESENT = "simple present"
    PRESENT_PERFECT = "present perfect"
    PRESENT_CONTINUOUS = "present continuous"
    PRESENT_PERFECT_CONTINUOUS = "present perfect continuous"
    SIMPLE_FUTURE = "simple future"
    FUTURE_PERFECT = "future perfect"
    FUTURE_CONTINUOUS = "future continuous"
    FUTURE_PERFECT_CONTINUOUS = "future perfect continuous"

    __str__ = str.__str__


TenseMappingOrStr: TypeAlias = Annotated[TenseMapping | str, open_enum_validator(TenseMapping)]
