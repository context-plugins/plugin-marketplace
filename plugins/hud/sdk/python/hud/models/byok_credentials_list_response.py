from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .byok_credential_item import ByokCredentialItem, ByokCredentialItemDict
from .byok_provider_option import ByokProviderOption, ByokProviderOptionDict


class ByokCredentialsListResponse(SdkBaseModel):
    credentials: list[ByokCredentialItem]
    providers: list[ByokProviderOption]


class ByokCredentialsListResponseDict(TypedDict):
    credentials: list[ByokCredentialItemDict]
    providers: list[ByokProviderOptionDict]
