from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiPublishContractRequestDto(SdkBaseModel):
    contents: str


class PublicApiPublishContractRequestDtoDict(TypedDict):
    contents: str
