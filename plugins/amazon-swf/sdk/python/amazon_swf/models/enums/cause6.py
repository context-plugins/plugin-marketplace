from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Cause6(str, Enum):
    """If set, indicates that the request to cancel the workflow execution was automatically generated, and specifies
    the cause. This happens if the parent workflow execution times out or is terminated, and the child policy is set to
    cancel child executions."""

    CHILD_POLICY_APPLIED = "CHILD_POLICY_APPLIED"

    __str__ = str.__str__


Cause6OrStr: TypeAlias = Annotated[Cause6 | str, open_enum_validator(Cause6)]
