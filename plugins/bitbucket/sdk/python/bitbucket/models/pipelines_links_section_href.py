from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelinesLinksSectionHref(SdkBaseModel):
    """All Of object, pipelines_links_section_href."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    href: Optional[str] = UNSET
    """A link"""


class PipelinesLinksSectionHrefDict(TypedDict):
    type_: NotRequired[str]
    href: NotRequired[str]
