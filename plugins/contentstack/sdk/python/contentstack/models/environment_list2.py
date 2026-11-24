from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment2 import Environment2, Environment2Dict


class EnvironmentList2(SdkBaseModel):
    """A list of deployment environments."""

    data: Optional[list[Environment2]] = UNSET
    """Array of environment objects."""


class EnvironmentList2Dict(TypedDict):
    data: NotRequired[list[Environment2Dict]]
