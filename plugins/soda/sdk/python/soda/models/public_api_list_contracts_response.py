from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contract_content_dto import ContractContentDto, ContractContentDtoDict


class PublicApiListContractsResponse(SdkBaseModel):
    content: list[ContractContentDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListContractsResponseDict(TypedDict):
    content: list[ContractContentDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
