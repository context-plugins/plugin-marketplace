from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByokCredentialUpdateRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    value: str


class ByokCredentialUpdateRequestDict(TypedDict):
    value: str
