from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureOverrides(SdkBaseModel):
    overrides: dict[str, Any]
    unique_team_members: float = Field(alias="uniqueTeamMembers")


class FeatureOverridesDict(TypedDict):
    overrides: dict[str, Any]
    unique_team_members: float
