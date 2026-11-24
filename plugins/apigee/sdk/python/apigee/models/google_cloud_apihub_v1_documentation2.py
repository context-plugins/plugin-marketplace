from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Documentation2(SdkBaseModel):
    """Optional. The documentation of the version."""

    external_uri: Optional[str] = Field(default=UNSET, alias="externalUri")
    """Optional. The uri of the externally hosted documentation."""


class GoogleCloudApihubV1Documentation2Dict(TypedDict):
    external_uri: NotRequired[str]
