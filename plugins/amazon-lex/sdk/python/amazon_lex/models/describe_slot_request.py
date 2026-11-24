from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeSlotRequest(SdkBaseModel):
    slot_id: str = Field(alias="slotId")
    """The unique identifier for the slot."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the slot."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the slot."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the slot to describe. The string must match one of the supported
    locales. For more information, see Supported languages."""

    intent_id: str = Field(alias="intentId")
    """The identifier of the intent that contains the slot."""


class DescribeSlotRequestDict(TypedDict):
    slot_id: str
    bot_id: str
    bot_version: str
    locale_id: str
    intent_id: str
