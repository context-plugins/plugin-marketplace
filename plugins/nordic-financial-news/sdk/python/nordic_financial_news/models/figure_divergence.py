from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group import Group, GroupDict


class FigureDivergence(SdkBaseModel):
    """Detail behind ``member_figures_disagree``: the specific metrics whose values disagree across member articles,
    with the per-source figures and range. Null when there is no disagreement; omitted on a tombstone."""

    groups: Optional[list[Group]] = UNSET
    """One entry per disagreeing metric."""


class FigureDivergenceDict(TypedDict):
    groups: NotRequired[list[GroupDict]]
