from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TeamMemberRemoveRequest(SdkBaseModel):
    membership_ids: list[int]


class TeamMemberRemoveRequestDict(TypedDict):
    membership_ids: list[int]
