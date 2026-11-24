from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HostEnvironment(str, Enum):
    """The type of hardware or software platform on which the gateway is running. Tape Gateway is no longer available on
    Snow Family devices."""

    VMWARE = "VMWARE"
    HYPER_V = "HYPER-V"
    EC2 = "EC2"
    KVM = "KVM"
    OTHER = "OTHER"
    SNOWBALL = "SNOWBALL"

    __str__ = str.__str__


HostEnvironmentOrStr: TypeAlias = Annotated[HostEnvironment | str, open_enum_validator(HostEnvironment)]
