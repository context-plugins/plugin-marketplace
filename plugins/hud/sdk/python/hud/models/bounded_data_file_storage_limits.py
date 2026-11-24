from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BoundedDataFileStorageLimits(SdkBaseModel):
    """Concrete storage capacity for a metered team."""

    kind: Literal["bounded"] = "bounded"
    max_files_per_member: int
    max_member_bytes: int
    max_shared_files: int
    max_shared_bytes: int
    max_team_files: int
    max_team_bytes: int


class BoundedDataFileStorageLimitsDict(TypedDict):
    kind: Literal["bounded"]
    max_files_per_member: int
    max_member_bytes: int
    max_shared_files: int
    max_shared_bytes: int
    max_team_files: int
    max_team_bytes: int
