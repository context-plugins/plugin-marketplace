from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class QInConnectAssistantConfiguration(SdkBaseModel):
    assistant_arn: str = Field(alias="assistantArn")
    """The assistant Arn details of the Qinconnect assistant configuration."""


class QInConnectAssistantConfigurationDict(TypedDict):
    assistant_arn: str
