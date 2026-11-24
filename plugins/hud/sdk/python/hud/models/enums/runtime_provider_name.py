from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuntimeProviderName(str, Enum):
    """Sandbox runtime provider for HUD-managed instances."""

    EC2 = "ec2"
    MODAL = "modal"

    __str__ = str.__str__


RuntimeProviderNameOrStr: TypeAlias = Annotated[RuntimeProviderName | str, open_enum_validator(RuntimeProviderName)]
