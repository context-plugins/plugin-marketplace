from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind8(str, Enum):
    """hypothesis, test, evidence, finding, conclusion, recommendation, decision, risk, question or action. A decision
    is recorded as a suggestion until a person confirms it"""

    HYPOTHESIS = "hypothesis"
    TEST = "test"
    EVIDENCE = "evidence"
    FINDING = "finding"
    CONCLUSION = "conclusion"
    RECOMMENDATION = "recommendation"
    DECISION = "decision"
    RISK = "risk"
    QUESTION = "question"
    ACTION = "action"

    __str__ = str.__str__


Kind8OrStr: TypeAlias = Annotated[Kind8 | str, open_enum_validator(Kind8)]
