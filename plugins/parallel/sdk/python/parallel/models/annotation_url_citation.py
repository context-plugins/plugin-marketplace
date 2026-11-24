from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnnotationUrlCitation(SdkBaseModel):
    """A citation for a web resource used to generate a model response."""

    end_index: int
    start_index: int
    title: str
    type_: Literal["url_citation"] = Field(default="url_citation", alias="type")
    url: str


class AnnotationUrlCitationDict(TypedDict):
    end_index: int
    start_index: int
    title: str
    type_: Literal["url_citation"]
    url: str
