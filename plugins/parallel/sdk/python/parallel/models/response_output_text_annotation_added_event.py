from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .annotation_url_citation import AnnotationUrlCitation, AnnotationUrlCitationDict


class ResponseOutputTextAnnotationAddedEvent(SdkBaseModel):
    annotation: AnnotationUrlCitation
    """A citation for a web resource used to generate a model response."""

    annotation_index: int
    content_index: int
    item_id: str
    output_index: int
    sequence_number: int
    type_: Literal["response.output_text.annotation.added"] = Field(
        default="response.output_text.annotation.added", alias="type"
    )


class ResponseOutputTextAnnotationAddedEventDict(TypedDict):
    annotation: AnnotationUrlCitationDict
    annotation_index: int
    content_index: int
    item_id: str
    output_index: int
    sequence_number: int
    type_: Literal["response.output_text.annotation.added"]
