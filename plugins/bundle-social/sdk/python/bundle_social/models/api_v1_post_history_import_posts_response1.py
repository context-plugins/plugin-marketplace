from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1PostHistoryImportPostsResponse1(SdkBaseModel):
    deleted_count: float = Field(alias="deletedCount")


class ApiV1PostHistoryImportPostsResponse1Dict(TypedDict):
    deleted_count: float
