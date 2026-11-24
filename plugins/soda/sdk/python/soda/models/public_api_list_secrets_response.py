from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .public_api_secret_dto import PublicApiSecretDto, PublicApiSecretDtoDict


class PublicApiListSecretsResponse(SdkBaseModel):
    content: list[PublicApiSecretDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListSecretsResponseDict(TypedDict):
    content: list[PublicApiSecretDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
