from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.maxcostusd import Maxcostusd, MaxcostusdDict


class SessionCostCapRequest(SdkBaseModel):
    """Set the maximum spend for the active run in a session."""

    model_config = ConfigDict(extra="forbid")

    max_cost_usd: Maxcostusd = Field(alias="maxCostUsd")


class SessionCostCapRequestDict(TypedDict):
    max_cost_usd: MaxcostusdDict
