from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RunnerResourceClassRequest(SdkBaseModel):
    resource_class: str
    """The resource class name in namespace/name format"""

    description: str
    """A description of the resource class"""


class RunnerResourceClassRequestDict(TypedDict):
    resource_class: str
    description: str
