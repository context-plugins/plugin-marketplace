from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_key import ApiKey, ApiKeyDict


class ListApiKeysResponse(SdkBaseModel):
    api_keys: Optional[list[ApiKey]] = Field(default=UNSET, alias="apiKeys")
    """The ApiKey objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier to pass in the next request to this operation to return the next set of items in the list."""


class ListApiKeysResponseDict(TypedDict):
    api_keys: NotRequired[list[ApiKeyDict]]
    next_token: NotRequired[str]
