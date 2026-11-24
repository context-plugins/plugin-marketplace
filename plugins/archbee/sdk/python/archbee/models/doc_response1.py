from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocResponse1(SdkBaseModel):
    content: Optional[str] = UNSET
    """The content of the document in the specified format."""

    format: Optional[str] = UNSET
    """The format of the returned document."""


class DocResponse1Dict(TypedDict):
    content: NotRequired[str]
    format: NotRequired[str]
