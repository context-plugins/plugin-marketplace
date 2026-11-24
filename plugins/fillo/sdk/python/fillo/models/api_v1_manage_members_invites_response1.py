from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1ManageMembersInvitesResponse1(SdkBaseModel):
    id: str
    cancelled: Literal["True"] = "True"


class ApiV1ManageMembersInvitesResponse1Dict(TypedDict):
    id: str
    cancelled: Literal["True"]
