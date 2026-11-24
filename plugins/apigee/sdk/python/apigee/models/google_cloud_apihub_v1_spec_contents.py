from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApihubV1SpecContents(SdkBaseModel):
    """The spec contents."""

    mime_type: Optional[str] = Field(default=UNSET, alias="mimeType")
    """Required. The mime type of the content for example application/json, application/yaml, application/wsdl etc."""

    contents: Optional[str] = UNSET
    """Required. The contents of the spec. The contents should be base64 encoded while calling the OnePlatform APIs like
    CreateSpec, UpdateSpec and CollectApiData."""


class GoogleCloudApihubV1SpecContentsDict(TypedDict):
    mime_type: NotRequired[str]
    contents: NotRequired[str]
