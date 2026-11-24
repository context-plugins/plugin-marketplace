from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.scope import ScopeOrStr


class ByokCredentialCreateRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    provider_id: int
    scope: ScopeOrStr
    value: str


class ByokCredentialCreateRequestDict(TypedDict):
    provider_id: int
    scope: ScopeOrStr
    value: str
