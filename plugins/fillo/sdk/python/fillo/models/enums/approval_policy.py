from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApprovalPolicy(str, Enum):
    """``ask`` sends every outward action to a human approval link first; ``auto`` runs Tier B directly. Destructive
    actions always need the link."""

    ASK = "ask"
    AUTO = "auto"

    __str__ = str.__str__


ApprovalPolicyOrStr: TypeAlias = Annotated[ApprovalPolicy | str, open_enum_validator(ApprovalPolicy)]
