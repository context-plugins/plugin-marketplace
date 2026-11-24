from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.connection_state import ConnectionStateOrStr
from .enums.state8 import State8OrStr


class GoogleCloudApigeeV1EndpointAttachment(SdkBaseModel):
    """Apigee endpoint attachment. For more information, see [Southbound networking patterns]
    (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints)."""

    service_attachment: Optional[str] = Field(default=UNSET, alias="serviceAttachment")
    """Format: projects/*/regions/*/serviceAttachments/*"""

    location: Optional[str] = UNSET
    """Required. Location of the endpoint attachment."""

    connection_state: Optional[ConnectionStateOrStr] = Field(default=UNSET, alias="connectionState")
    """Output only. State of the endpoint attachment connection to the service attachment."""

    state: Optional[State8OrStr] = UNSET
    """Output only. State of the endpoint attachment. Values other than ``ACTIVE`` mean the resource is not ready to
    use."""

    host: Optional[str] = UNSET
    """Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target
    server."""

    name: Optional[str] = UNSET
    """Name of the endpoint attachment. Use the following structure in your request:
    ``organizations/{org}/endpointAttachments/{endpoint_attachment}``"""


class GoogleCloudApigeeV1EndpointAttachmentDict(TypedDict):
    service_attachment: NotRequired[str]
    location: NotRequired[str]
    connection_state: NotRequired[ConnectionStateOrStr]
    state: NotRequired[State8OrStr]
    host: NotRequired[str]
    name: NotRequired[str]
