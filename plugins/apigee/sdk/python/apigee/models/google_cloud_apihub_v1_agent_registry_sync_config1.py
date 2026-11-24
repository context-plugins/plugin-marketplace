from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1AgentRegistrySyncConfig1(SdkBaseModel):
    """Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry."""

    disabled: Optional[bool] = UNSET
    """Optional. If true, the MCP data sync to the Agent Registry will be disabled. The default value is false."""


class GoogleCloudApihubV1AgentRegistrySyncConfig1Dict(TypedDict):
    disabled: NotRequired[bool]
