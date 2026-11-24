from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1Documentation(SdkBaseModel):
    """Documentation details."""

    external_uri: Optional[str] = Field(default=UNSET, alias="externalUri")
    """Optional. The uri of the externally hosted documentation."""


class GoogleCloudApihubV1DocumentationDict(TypedDict):
    external_uri: NotRequired[str]
