from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProposalState(str, Enum):
    """The state of the proposal. The following are possible values: accepted: The proposal has been accepted. The
    Direct Connect gateway association is available to use in this state. deleted: The proposal has been deleted by the
    owner that made the proposal. The Direct Connect gateway association cannot be used in this state. requested: The
    proposal has been requested. The Direct Connect gateway association cannot be used in this state."""

    REQUESTED = "requested"
    ACCEPTED = "accepted"
    DELETED = "deleted"

    __str__ = str.__str__


ProposalStateOrStr: TypeAlias = Annotated[ProposalState | str, open_enum_validator(ProposalState)]
