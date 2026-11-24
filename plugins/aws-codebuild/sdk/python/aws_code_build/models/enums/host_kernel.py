from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class HostKernel(str, Enum):
    """The host operating system kernel used for on-demand builds in the build project. The host kernel does not affect
    the build environment operating system, which is determined by the image you specify. Valid values are:
    LINUX_KERNEL_4: Runs on an Amazon Linux 2 host (kernel 4.x). LINUX_KERNEL_6: Runs on an Amazon Linux 2023 host
    (kernel 6.x). LINUX_KERNEL_LATEST: Runs on the latest supported host kernel. This setting applies to the
    LINUX_CONTAINER, ARM_CONTAINER, LINUX_EC2, and ARM_EC2 environment types. It is not applicable to Windows, Lambda,
    or Mac environment types."""

    LINUX_KERNEL_4 = "LINUX_KERNEL_4"
    LINUX_KERNEL_6 = "LINUX_KERNEL_6"
    LINUX_KERNEL_LATEST = "LINUX_KERNEL_LATEST"

    __str__ = str.__str__


HostKernelOrStr: TypeAlias = Annotated[HostKernel | str, open_enum_validator(HostKernel)]
