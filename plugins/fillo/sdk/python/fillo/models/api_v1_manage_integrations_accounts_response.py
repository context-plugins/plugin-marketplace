from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.provider1 import Provider1OrStr


class ApiV1ManageIntegrationsAccountsResponse(SdkBaseModel):
    removed: Literal["True"] = "True"
    id: str
    provider: Provider1OrStr
    label: str


class ApiV1ManageIntegrationsAccountsResponseDict(TypedDict):
    removed: Literal["True"]
    id: str
    provider: Provider1OrStr
    label: str
