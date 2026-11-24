from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Source8(SdkBaseModel):
    position: Optional[float] = UNSET
    """The position index of the source in the response"""

    url: Optional[str] = UNSET
    """The URL of the source"""

    label: Optional[str] = UNSET
    """The article title of the source"""

    description: Optional[str] = UNSET
    """A snippet or summary of the source content"""

    footnote: Optional[bool] = UNSET
    """Whether this source appears as a footnote (in a subsequent list in the sources modal)"""

    date_published: Optional[str] = Field(default=UNSET, alias="datePublished")
    """The publication date of the source. Omitted from the response when the source has no publish date — never emitted
    as ``null``."""


class Source8Dict(TypedDict):
    position: NotRequired[float]
    url: NotRequired[str]
    label: NotRequired[str]
    description: NotRequired[str]
    footnote: NotRequired[bool]
    date_published: NotRequired[str]
