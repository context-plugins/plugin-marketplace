from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActorRole(str, Enum):
    """Enum representing the actor role for reimbursements in the Spend API."""

    SUBMITTER = "SUBMITTER"
    MANAGER = "MANAGER"
    BUDGET_OWNER = "BUDGET_OWNER"
    ADMIN = "ADMIN"
    SYSTEM = "SYSTEM"

    __str__ = str.__str__


ActorRoleOrStr: TypeAlias = Annotated[ActorRole | str, open_enum_validator(ActorRole)]
