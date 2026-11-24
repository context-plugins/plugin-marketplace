from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .author import Author, AuthorDict


class AuthorsGetResponse(SdkBaseModel):
    data: Author


class AuthorsGetResponseDict(TypedDict):
    data: AuthorDict
