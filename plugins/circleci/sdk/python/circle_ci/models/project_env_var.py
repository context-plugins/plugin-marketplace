from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProjectEnvVar(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the environment variable"""

    value: Optional[str] = UNSET
    """The masked value of the environment variable"""


class ProjectEnvVarDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
