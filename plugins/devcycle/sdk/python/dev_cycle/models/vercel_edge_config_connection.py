from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class VercelEdgeConfigConnection(SdkBaseModel):
    edge_config_name: str = Field(alias="edgeConfigName")
    configuration_id: str = Field(alias="configurationId")


class VercelEdgeConfigConnectionDict(TypedDict):
    edge_config_name: str
    configuration_id: str
