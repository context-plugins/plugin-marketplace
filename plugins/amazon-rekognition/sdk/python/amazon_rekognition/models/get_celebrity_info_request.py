from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetCelebrityInfoRequest(SdkBaseModel):
    id: str = Field(alias="Id")
    """The ID for the celebrity. You get the celebrity ID from a call to the RecognizeCelebrities operation, which
    recognizes celebrities in an image."""


class GetCelebrityInfoRequestDict(TypedDict):
    id: str
