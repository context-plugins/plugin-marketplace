from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HostKernelOverride(str, Enum):
    """The host operating system kernel for this build that overrides the one specified in the build project."""

    LINUX_KERNEL_4 = "LINUX_KERNEL_4"
    LINUX_KERNEL_6 = "LINUX_KERNEL_6"
    LINUX_KERNEL_LATEST = "LINUX_KERNEL_LATEST"

    __str__ = str.__str__


HostKernelOverrideOrStr: TypeAlias = Annotated[HostKernelOverride | str, open_enum_validator(HostKernelOverride)]
