from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .invitation1 import Invitation1, Invitation1Dict


class ApiV1ManageMembersInvitesResponse(SdkBaseModel):
    invitation: Invitation1


class ApiV1ManageMembersInvitesResponseDict(TypedDict):
    invitation: Invitation1Dict
