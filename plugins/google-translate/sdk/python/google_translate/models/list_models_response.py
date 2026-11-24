from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .model import Model, ModelDict


class ListModelsResponse(SdkBaseModel):
    """Response message for ListModels."""

    models: Optional[list[Model]] = UNSET
    """The models read."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to
    obtain the corresponding page."""


class ListModelsResponseDict(TypedDict):
    models: NotRequired[list[ModelDict]]
    next_page_token: NotRequired[str]
