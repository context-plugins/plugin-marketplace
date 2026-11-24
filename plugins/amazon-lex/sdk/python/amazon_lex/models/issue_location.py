from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IssueLocation(SdkBaseModel):
    bot_locale: Optional[str] = Field(default=UNSET, alias="botLocale")
    """The locale identifier where the issue was found."""

    intent_id: Optional[str] = Field(default=UNSET, alias="intentId")
    """The intent identifier where the issue was found, if applicable."""

    slot_id: Optional[str] = Field(default=UNSET, alias="slotId")
    """The slot identifier where the issue was found, if applicable."""


class IssueLocationDict(TypedDict):
    bot_locale: NotRequired[str]
    intent_id: NotRequired[str]
    slot_id: NotRequired[str]
