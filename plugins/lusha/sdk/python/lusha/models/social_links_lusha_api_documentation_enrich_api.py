from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SocialLinksLushaApiDocumentationEnrichApi(SdkBaseModel):
    linkedin: Optional[str] = UNSET
    x_url: Optional[str] = Field(default=UNSET, alias="xUrl")


class SocialLinksLushaApiDocumentationEnrichApiDict(TypedDict):
    linkedin: NotRequired[str]
    x_url: NotRequired[str]
