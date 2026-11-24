from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_key import ApiKey, ApiKeyDict


class CreateApiKeyResponse(SdkBaseModel):
    api_key: Optional[ApiKey] = Field(default=UNSET, alias="apiKey")


class CreateApiKeyResponseDict(TypedDict):
    api_key: NotRequired[ApiKeyDict]
