from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .api_key import ApiKey, ApiKeyDict


class ApiKeyList(SdkBaseModel):
    keys: list[ApiKey]


class ApiKeyListDict(TypedDict):
    keys: list[ApiKeyDict]
