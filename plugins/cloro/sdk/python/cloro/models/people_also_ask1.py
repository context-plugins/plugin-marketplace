from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type import TypeOrStr
from .source9 import Source9, Source9Dict


class PeopleAlsoAsk1(SdkBaseModel):
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

    sources: Optional[list[Source9]] = UNSET
    """Cited sources (for AIOVERVIEW type, when include.paaAioverview is true)"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect. The sibling link field holds the destination cloro resolved it to,
    or is empty, missing or a ``google.com/goto`` URL when the link is not resolved yet. In that case, resolve this
    value with ``POST /v1/monitor/google/goto``."""


class PeopleAlsoAsk1Dict(TypedDict):
    question: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    snippet: NotRequired[str]
    title: NotRequired[str]
    link: NotRequired[str]
    markdown: NotRequired[str]
    sources: NotRequired[list[Source9Dict]]
    redirect_link: NotRequired[str]
