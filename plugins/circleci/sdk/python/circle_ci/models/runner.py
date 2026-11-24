from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Runner(SdkBaseModel):
    resource_class: Optional[str] = UNSET
    """The resource class the runner belongs to in namespace/name format"""

    hostname: Optional[str] = UNSET
    """The hostname of the machine running the runner agent"""

    name: Optional[str] = UNSET
    """The name assigned to the runner"""

    first_connected: Optional[RFC3339DateTime] = UNSET
    """When the runner first connected to CircleCI"""

    last_connected: Optional[RFC3339DateTime] = UNSET
    """When the runner last connected to CircleCI"""

    last_used: Optional[RFC3339DateTime] = UNSET
    """When the runner last executed a task"""

    version: Optional[str] = UNSET
    """The version of the runner agent"""

    ip: Optional[str] = UNSET
    """The IP address of the runner"""

    os: Optional[str] = UNSET
    """The operating system of the runner"""

    arch: Optional[str] = UNSET
    """The CPU architecture of the runner"""


class RunnerDict(TypedDict):
    resource_class: NotRequired[str]
    hostname: NotRequired[str]
    name: NotRequired[str]
    first_connected: NotRequired[RFC3339DateTime]
    last_connected: NotRequired[RFC3339DateTime]
    last_used: NotRequired[RFC3339DateTime]
    version: NotRequired[str]
    ip: NotRequired[str]
    os: NotRequired[str]
    arch: NotRequired[str]
