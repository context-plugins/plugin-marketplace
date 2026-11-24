from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Rule(str, Enum):
    """What applies before the step's action: none, gate (check_gate for ``action``), approval (request_approval) or
    review (request_review). none when omitted"""

    NONE = "none"
    GATE = "gate"
    APPROVAL = "approval"
    REVIEW = "review"

    __str__ = str.__str__


RuleOrStr: TypeAlias = Annotated[Rule | str, open_enum_validator(Rule)]
