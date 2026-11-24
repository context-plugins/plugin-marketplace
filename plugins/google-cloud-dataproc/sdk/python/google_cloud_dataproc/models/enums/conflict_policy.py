from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConflictPolicy(str, Enum):
    """Optional. The policy to handle conflicts when migrating resources, defaults to SKIP if not specified."""

    CONFLICT_POLICY_UNSPECIFIED = "CONFLICT_POLICY_UNSPECIFIED"
    SKIP = "SKIP"
    OVERWRITE = "OVERWRITE"

    __str__ = str.__str__


ConflictPolicyOrStr: TypeAlias = Annotated[ConflictPolicy | str, open_enum_validator(ConflictPolicy)]
