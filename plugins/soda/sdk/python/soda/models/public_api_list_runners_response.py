from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .public_api_runner_dto import PublicApiRunnerDto, PublicApiRunnerDtoDict


class PublicApiListRunnersResponse(SdkBaseModel):
    content: list[PublicApiRunnerDto]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int = Field(alias="totalElements")
    total_pages: int = Field(alias="totalPages")


class PublicApiListRunnersResponseDict(TypedDict):
    content: list[PublicApiRunnerDtoDict]
    first: bool
    last: bool
    number: int
    size: int
    total_elements: int
    total_pages: int
