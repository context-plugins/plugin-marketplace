from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Category(str, Enum):
    """What kind of incident it was, which the AI risk scorecard counts: data_disclosure, sensitive_data,
    prompt_injection, fairness, wrong_output, outage, unauthorised_action or other"""

    DATA_DISCLOSURE = "data_disclosure"
    SENSITIVE_DATA = "sensitive_data"
    PROMPT_INJECTION = "prompt_injection"
    FAIRNESS = "fairness"
    WRONG_OUTPUT = "wrong_output"
    OUTAGE = "outage"
    UNAUTHORISED_ACTION = "unauthorised_action"
    OTHER = "other"

    __str__ = str.__str__


CategoryOrStr: TypeAlias = Annotated[Category | str, open_enum_validator(Category)]
