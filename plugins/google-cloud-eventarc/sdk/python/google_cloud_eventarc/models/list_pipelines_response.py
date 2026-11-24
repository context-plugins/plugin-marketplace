from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pipeline import Pipeline, PipelineDict


class ListPipelinesResponse(SdkBaseModel):
    """The response message for the ListPipelines method."""

    pipelines: Optional[list[Pipeline]] = UNSET
    """The requested pipelines, up to the number specified in ``page_size``."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListPipelines`` to request the next page. If this is empty, then there are no
    more pages."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""


class ListPipelinesResponseDict(TypedDict):
    pipelines: NotRequired[list[PipelineDict]]
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
