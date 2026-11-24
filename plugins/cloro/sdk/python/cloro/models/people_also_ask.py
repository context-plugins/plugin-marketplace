from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr
from .source3 import Source3, Source3Dict


class PeopleAlsoAsk(SdkBaseModel):
    question: Optional[str] = UNSET
    """The question text"""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Type of question result"""

    snippet: Optional[str] = UNSET
    """Answer snippet (for LINK type)"""

    title: Optional[str] = UNSET
    """Result title (for LINK type)"""

    link: Optional[str] = UNSET
    """Result URL (for LINK type)"""

    markdown: Optional[str] = UNSET
    """AI Overview markdown content (for AIOVERVIEW type, when include.paaAioverview is true)"""

    sources: Optional[list[Source3]] = UNSET
    """Cited sources (for AIOVERVIEW type, when include.paaAioverview is true)"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class PeopleAlsoAskDict(TypedDict):
    question: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    snippet: NotRequired[str]
    title: NotRequired[str]
    link: NotRequired[str]
    markdown: NotRequired[str]
    sources: NotRequired[list[Source3Dict]]
    redirect_link: NotRequired[str]
