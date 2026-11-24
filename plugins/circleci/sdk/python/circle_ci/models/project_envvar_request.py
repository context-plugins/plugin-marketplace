from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProjectEnvvarRequest(SdkBaseModel):
    name: str
    """The name of the environment variable"""

    value: str
    """The value of the environment variable"""


class ProjectEnvvarRequestDict(TypedDict):
    name: str
    value: str
