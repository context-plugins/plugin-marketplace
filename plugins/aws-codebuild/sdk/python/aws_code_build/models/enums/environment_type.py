from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EnvironmentType(str, Enum):
    """The environment type of the compute fleet. The environment type ARM_CONTAINER is available only in regions US
    East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo),
    Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo). The environment type
    ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU
    (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
    Asia Pacific (Mumbai). The environ"""

    WINDOWS_CONTAINER = "WINDOWS_CONTAINER"
    LINUX_CONTAINER = "LINUX_CONTAINER"
    LINUX_GPU_CONTAINER = "LINUX_GPU_CONTAINER"
    ARM_CONTAINER = "ARM_CONTAINER"
    WINDOWS_SERVER_2019_CONTAINER = "WINDOWS_SERVER_2019_CONTAINER"
    WINDOWS_SERVER_2022_CONTAINER = "WINDOWS_SERVER_2022_CONTAINER"
    LINUX_LAMBDA_CONTAINER = "LINUX_LAMBDA_CONTAINER"
    ARM_LAMBDA_CONTAINER = "ARM_LAMBDA_CONTAINER"
    LINUX_EC2 = "LINUX_EC2"
    ARM_EC2 = "ARM_EC2"
    WINDOWS_EC2 = "WINDOWS_EC2"
    MAC_ARM = "MAC_ARM"

    __str__ = str.__str__


EnvironmentTypeOrStr: TypeAlias = Annotated[EnvironmentType | str, open_enum_validator(EnvironmentType)]
