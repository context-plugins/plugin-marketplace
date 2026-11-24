from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OverflowBehavior(str, Enum):
    """The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to wait on the
    existing fleet instance to become available. For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild
    on-demand. If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure
    that you add the required VPC permissions to your project service role. For more information, see Example policy
    statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface."""

    QUEUE = "QUEUE"
    ON_DEMAND = "ON_DEMAND"

    __str__ = str.__str__


OverflowBehaviorOrStr: TypeAlias = Annotated[OverflowBehavior | str, open_enum_validator(OverflowBehavior)]
