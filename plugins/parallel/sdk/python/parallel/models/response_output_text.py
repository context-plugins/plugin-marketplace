from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .annotation_url_citation import AnnotationUrlCitation, AnnotationUrlCitationDict
from .logprob import Logprob, LogprobDict


class ResponseOutputText(SdkBaseModel):
    """A text content part of an output message. ``annotations`` carries the URL citations grounding the answer."""

    annotations: list[AnnotationUrlCitation]
    text: str
    type_: Literal["output_text"] = Field(default="output_text", alias="type")
    logprobs: Optional[list[Logprob]] = UNSET


class ResponseOutputTextDict(TypedDict):
    annotations: list[AnnotationUrlCitationDict]
    text: str
    type_: Literal["output_text"]
    logprobs: NotRequired[list[LogprobDict]]
