from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_response import PaginationResponse, PaginationResponseDict
from .policy import Policy, PolicyDict


class Data3(SdkBaseModel):
    policies: list[Policy]
    page_info: PaginationResponse = Field(alias="pageInfo")
    """Information about current and next page for cursor based pagination"""


class Data3Dict(TypedDict):
    policies: list[PolicyDict]
    page_info: PaginationResponseDict
