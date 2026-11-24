from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Cause5(str, Enum):
    """If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens
    if the parent workflow execution times out or is terminated and the child policy is set to terminate child
    executions."""

    CHILD_POLICY_APPLIED = "CHILD_POLICY_APPLIED"
    EVENT_LIMIT_EXCEEDED = "EVENT_LIMIT_EXCEEDED"
    OPERATOR_INITIATED = "OPERATOR_INITIATED"

    __str__ = str.__str__


Cause5OrStr: TypeAlias = Annotated[Cause5 | str, open_enum_validator(Cause5)]
