from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Link2(SdkBaseModel):
    id: str
    """The unique ID of the short link."""

    domain: str
    """The domain of the short link. If not provided, the main domain of the project will be used (or ``codeqr.link`` if
    the project has no domains)."""

    key: str
    """The slug of the short link. If not provided, a random 7-character slug will be generated."""

    short_link: Optional[str] = Field(default=UNSET, alias="shortLink")
    """The complete URL of the short link, including the https protocol (for example, ``https://codeqr.link/try``)."""


class Link2Dict(TypedDict):
    id: str
    domain: str
    key: str
    short_link: NotRequired[str]
