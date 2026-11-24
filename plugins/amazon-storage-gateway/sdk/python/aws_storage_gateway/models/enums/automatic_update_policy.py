from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AutomaticUpdatePolicy(str, Enum):
    """Indicates the automatic update policy for a gateway. ALL_VERSIONS - Enables regular gateway maintenance updates.
    EMERGENCY_VERSIONS_ONLY - Disables regular gateway maintenance updates. The gateway will still receive emergency
    version updates on rare occasions if necessary to remedy highly critical security or durability issues. You will be
    notified before an emergency version update is applied. These updates are applied during your gateway's scheduled
    maintenance window."""

    ALL_VERSIONS = "ALL_VERSIONS"
    EMERGENCY_VERSIONS_ONLY = "EMERGENCY_VERSIONS_ONLY"

    __str__ = str.__str__


AutomaticUpdatePolicyOrStr: TypeAlias = Annotated[
    AutomaticUpdatePolicy | str, open_enum_validator(AutomaticUpdatePolicy)
]
