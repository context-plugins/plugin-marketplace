from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .q_in_connect_assistant_configuration import QInConnectAssistantConfiguration, QInConnectAssistantConfigurationDict


class QInConnectIntentConfiguration(SdkBaseModel):
    q_in_connect_assistant_configuration: Optional[QInConnectAssistantConfiguration] = Field(
        default=UNSET, alias="qInConnectAssistantConfiguration"
    )


class QInConnectIntentConfigurationDict(TypedDict):
    q_in_connect_assistant_configuration: NotRequired[QInConnectAssistantConfigurationDict]
