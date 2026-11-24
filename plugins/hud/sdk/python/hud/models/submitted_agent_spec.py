from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type_hud_platform_rollouts_api import TypeHudPlatformRolloutsApiOrStr


class SubmittedAgentSpec(SdkBaseModel):
    """Registered identity a hosted runner rebuilds the agent from.

    Mirrors the v6 SDK's hosted submission: the ``AgentType`` value plus the ``Agent.dump()`` config with runtime-only
    state and credentials stripped. The control plane reads ``model`` (for inference routing and billing) and
    ``max_steps`` from ``config``, and stores ``config`` as submitted except that ``model`` becomes the catalog's
    canonical model name. The instance rebuilds the agent through ``AgentType``."""

    type_: TypeHudPlatformRolloutsApiOrStr = Field(alias="type")
    config: Any


class SubmittedAgentSpecDict(TypedDict):
    type_: TypeHudPlatformRolloutsApiOrStr
    config: Any
