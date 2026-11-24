from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .revoked import Revoked, RevokedDict


class ApiV1ReportsShareResponse1(SdkBaseModel):
    revoked: list[Revoked]


class ApiV1ReportsShareResponse1Dict(TypedDict):
    revoked: list[RevokedDict]
