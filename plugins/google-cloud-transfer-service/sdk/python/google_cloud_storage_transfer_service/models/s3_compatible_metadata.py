from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.auth_method import AuthMethodOrStr
from .enums.list_api import ListApiOrStr
from .enums.protocol import ProtocolOrStr
from .enums.request_model import RequestModelOrStr


class S3CompatibleMetadata(SdkBaseModel):
    """S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data
    providers."""

    request_model: Optional[RequestModelOrStr] = Field(default=UNSET, alias="requestModel")
    """Specifies the API request model used to call the storage service. When not specified, the default value of
    RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used."""

    protocol: Optional[ProtocolOrStr] = UNSET
    """Specifies the network protocol of the agent. When not specified, the default value of NetworkProtocol
    NETWORK_PROTOCOL_HTTPS is used."""

    auth_method: Optional[AuthMethodOrStr] = Field(default=UNSET, alias="authMethod")
    """Specifies the authentication and authorization method used by the storage service. When not specified, Transfer
    Service will attempt to determine right auth method to use."""

    list_api: Optional[ListApiOrStr] = Field(default=UNSET, alias="listApi")
    """The Listing API to use for discovering objects. When not specified, Transfer Service will attempt to determine
    the right API to use."""


class S3CompatibleMetadataDict(TypedDict):
    request_model: NotRequired[RequestModelOrStr]
    protocol: NotRequired[ProtocolOrStr]
    auth_method: NotRequired[AuthMethodOrStr]
    list_api: NotRequired[ListApiOrStr]
