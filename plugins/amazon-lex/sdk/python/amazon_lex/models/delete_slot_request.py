from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteSlotRequest(SdkBaseModel):
    slot_id: str = Field(alias="slotId")
    """The identifier of the slot to delete."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the slot to delete."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the slot to delete."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that the slot will be deleted from. The string must match one of the
    supported locales. For more information, see Supported languages."""

    intent_id: str = Field(alias="intentId")
    """The identifier of the intent associated with the slot."""


class DeleteSlotRequestDict(TypedDict):
    slot_id: str
    bot_id: str
    bot_version: str
    locale_id: str
    intent_id: str
