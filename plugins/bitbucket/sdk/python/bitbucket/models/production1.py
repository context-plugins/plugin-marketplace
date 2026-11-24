from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .branch import Branch, BranchDict


class Production1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    branch: Optional[Branch] = UNSET
    name: str
    """Name of the target branch. Will be listed here even when the target branch does not exist. Will be ``null`` if
    targeting the main branch and the repository is empty."""

    use_mainbranch: bool
    """Indicates if the setting points at an explicit branch (``false``) or tracks the main branch (``true``)."""


class Production1Dict(TypedDict):
    branch: NotRequired[BranchDict]
    name: str
    use_mainbranch: bool
