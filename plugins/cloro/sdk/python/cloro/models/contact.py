from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Contact(SdkBaseModel):
    label: Optional[str] = UNSET
    """Link label"""

    url: Optional[str] = UNSET
    """Link URL"""

    redirect_link: Optional[str] = Field(default=UNSET, alias="redirectLink")
    """Google's ``/goto`` redirect for this link, in the absolute form ``POST /v1/monitor/google/goto`` accepts. Present
    only when Google served the link as a redirect — the sibling link field holds the destination cloro resolved it
    to."""


class ContactDict(TypedDict):
    label: NotRequired[str]
    url: NotRequired[str]
    redirect_link: NotRequired[str]
