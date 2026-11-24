from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .response import Response, ResponseDict


class ResponseFailedEvent(SdkBaseModel):
    response: Response
    """A response from the ``parallel`` model. A completed response contains a single assistant message whose text is
    annotated with URL citations grounding the answer."""

    sequence_number: int
    type_: Literal["response.failed"] = Field(default="response.failed", alias="type")


class ResponseFailedEventDict(TypedDict):
    response: ResponseDict
    sequence_number: int
    type_: Literal["response.failed"]
