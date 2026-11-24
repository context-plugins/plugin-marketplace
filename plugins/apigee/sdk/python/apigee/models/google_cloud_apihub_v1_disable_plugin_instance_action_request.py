from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1DisablePluginInstanceActionRequest(SdkBaseModel):
    """The DisablePluginInstanceAction method's request."""

    action_id: Optional[str] = Field(default=UNSET, alias="actionId")
    """Required. The action id to disable."""


class GoogleCloudApihubV1DisablePluginInstanceActionRequestDict(TypedDict):
    action_id: NotRequired[str]
