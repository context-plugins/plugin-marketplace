from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Development(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """Name of the target branch. If inherited by a repository, it will default to the main branch if the specified
    branch does not exist."""

    use_mainbranch: bool
    """Indicates if the setting points at an explicit branch (``false``) or tracks the main branch (``true``)."""


class DevelopmentDict(TypedDict):
    name: str
    use_mainbranch: bool
