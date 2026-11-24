from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PublicApiCreateRunnerResponse(SdkBaseModel):
    api_key_id: Optional[str] = Field(default=UNSET, alias="apiKeyId")
    api_key_secret: Optional[str] = Field(default=UNSET, alias="apiKeySecret")


class PublicApiCreateRunnerResponseDict(TypedDict):
    api_key_id: NotRequired[str]
    api_key_secret: NotRequired[str]
