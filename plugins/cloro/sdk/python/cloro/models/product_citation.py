from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProductCitation(SdkBaseModel):
    title: Optional[str] = UNSET
    url: Optional[str] = UNSET
    snippet: Optional[str] = UNSET
    """Short extract of the page"""

    pub_date: Optional[str] = Field(default=UNSET, alias="pubDate")
    """Publication date of the page"""


class ProductCitationDict(TypedDict):
    title: NotRequired[str]
    url: NotRequired[str]
    snippet: NotRequired[str]
    pub_date: NotRequired[str]
