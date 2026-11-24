from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SocialLinksLushaApiDocumentationEnrichmentApi(SdkBaseModel):
    linkedin: str
    x_url: Optional[str] = Field(default=UNSET, alias="xUrl")


class SocialLinksLushaApiDocumentationEnrichmentApiDict(TypedDict):
    linkedin: str
    x_url: NotRequired[str]
