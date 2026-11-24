from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Documentation5(SdkBaseModel):
    """Optional. The documentation of the plugin, that explains how to set up and use the plugin."""

    external_uri: Optional[str] = Field(default=UNSET, alias="externalUri")
    """Optional. The uri of the externally hosted documentation."""


class GoogleCloudApihubV1Documentation5Dict(TypedDict):
    external_uri: NotRequired[str]
