from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind2 import Kind2OrStr


class BranchType2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    enabled: Optional[bool] = UNSET
    """Whether the branch type is enabled or not. A disabled branch type may contain an invalid ``prefix``."""

    kind: Kind2OrStr
    """The kind of the branch type."""

    prefix: Optional[str] = UNSET
    """The prefix for this branch type. A branch with this prefix will be classified as per ``kind``. The ``prefix`` of
    an enabled branch type must be a valid branch prefix.Additionally, it cannot be blank, empty or ``null``. The
    ``prefix`` for a disabled branch type can be empty or invalid."""


class BranchType2Dict(TypedDict):
    enabled: NotRequired[bool]
    kind: Kind2OrStr
    prefix: NotRequired[str]
