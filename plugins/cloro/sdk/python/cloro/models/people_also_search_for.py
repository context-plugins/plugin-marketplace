from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PeopleAlsoSearchFor(SdkBaseModel):
    name: Optional[str] = UNSET
    """Related entity name"""

    link: Optional[str] = UNSET
    """Google search URL for this related entity"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class PeopleAlsoSearchForDict(TypedDict):
    name: NotRequired[str]
    link: NotRequired[str]
    redirect_link: NotRequired[str]
