from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_processing_data import PostProcessingData, PostProcessingDataDict


class PostProcessing(SdkBaseModel):
    """Returned when a Send API post is still being created in the background."""

    status: int
    status_text: str = Field(alias="statusText")
    data: PostProcessingData


class PostProcessingDict(TypedDict):
    status: int
    status_text: str
    data: PostProcessingDataDict
