from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.encryption_type import EncryptionTypeOrStr
from .google_cloud_apihub_v1_agent_registry_sync_config1 import (
    GoogleCloudApihubV1AgentRegistrySyncConfig1,
    GoogleCloudApihubV1AgentRegistrySyncConfig1Dict,
)


class GoogleCloudApihubV1Config2(SdkBaseModel):
    """Required. Config of the ApiHub instance."""

    agent_registry_sync_config: Optional[GoogleCloudApihubV1AgentRegistrySyncConfig1] = Field(
        default=UNSET, alias="agentRegistrySyncConfig"
    )
    """Optional. The configuration for syncing MCP data in the API Hub instance to the Agent Registry."""

    encryption_type: Optional[EncryptionTypeOrStr] = Field(default=UNSET, alias="encryptionType")
    """Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must be provided. If
    no encryption type is provided, GMEK will be used."""

    cmek_key_name: Optional[str] = Field(default=UNSET, alias="cmekKeyName")
    """Optional. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the
    format of ``projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)``, where the location must match
    the instance location. If the CMEK is not provided, a GMEK will be created for the instance."""

    vertex_location: Optional[str] = Field(default=UNSET, alias="vertexLocation")
    """Optional. The name of the Vertex AI location where the data store is stored."""

    disable_search: Optional[bool] = Field(default=UNSET, alias="disableSearch")
    """Optional. If true, the search will be disabled for the instance. The default value is false."""


class GoogleCloudApihubV1Config2Dict(TypedDict):
    agent_registry_sync_config: NotRequired[GoogleCloudApihubV1AgentRegistrySyncConfig1Dict]
    encryption_type: NotRequired[EncryptionTypeOrStr]
    cmek_key_name: NotRequired[str]
    vertex_location: NotRequired[str]
    disable_search: NotRequired[bool]
