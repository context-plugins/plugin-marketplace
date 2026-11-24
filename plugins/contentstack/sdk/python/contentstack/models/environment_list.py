from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_model import EnvironmentModel, EnvironmentModelDict


class EnvironmentList(SdkBaseModel):
    """A list of deployment environments."""

    environments: Optional[list[EnvironmentModel]] = UNSET
    """Array of environment objects."""


class EnvironmentListDict(TypedDict):
    environments: NotRequired[list[EnvironmentModelDict]]
