from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item1_bundle_social_team_api import Item1BundleSocialTeamApi, Item1BundleSocialTeamApiDict


class ApiV1TeamResponse3(SdkBaseModel):
    items: list[Item1BundleSocialTeamApi]
    total: float


class ApiV1TeamResponse3Dict(TypedDict):
    items: list[Item1BundleSocialTeamApiDict]
    total: float
