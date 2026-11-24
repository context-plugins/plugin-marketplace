from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1ActionExecutionDetail2(SdkBaseModel):
    """Required. The execution details for the action to execute."""

    action_id: Optional[str] = Field(default=UNSET, alias="actionId")
    """Required. The action id of the plugin to execute."""


class GoogleCloudApihubV1ActionExecutionDetail2Dict(TypedDict):
    action_id: NotRequired[str]
