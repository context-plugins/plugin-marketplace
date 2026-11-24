from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1MetaData(SdkBaseModel):
    """Metadata for the server configuration in Apigee X."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Display name for the server. For apigee target, this will be used as revision display name."""

    description: Optional[str] = UNSET
    """Optional. Description for the server. For apigee target, this will be used as revision description."""


class GoogleCloudApihubV1MetaDataDict(TypedDict):
    display_name: NotRequired[str]
    description: NotRequired[str]
