from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1HostingService(SdkBaseModel):
    """The information related to the service implemented by the plugin developer, used to invoke the plugin's
    functionality."""

    service_uri: Optional[str] = Field(default=UNSET, alias="serviceUri")
    """Optional. The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.
    This information is only required for user defined plugins."""


class GoogleCloudApihubV1HostingServiceDict(TypedDict):
    service_uri: NotRequired[str]
