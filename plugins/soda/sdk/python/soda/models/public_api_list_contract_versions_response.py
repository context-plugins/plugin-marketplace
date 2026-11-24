from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .contract_version_dto import ContractVersionDto, ContractVersionDtoDict


class PublicApiListContractVersionsResponse(SdkBaseModel):
    content: list[ContractVersionDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListContractVersionsResponseDict(TypedDict):
    content: list[ContractVersionDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
