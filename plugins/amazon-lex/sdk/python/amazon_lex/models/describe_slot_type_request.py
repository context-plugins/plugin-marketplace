from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeSlotTypeRequest(SdkBaseModel):
    slot_type_id: str = Field(alias="slotTypeId")
    """The identifier of the slot type."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the slot type."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the slot type."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale of the slot type to describe. The string must match one of the
    supported locales. For more information, see Supported languages."""


class DescribeSlotTypeRequestDict(TypedDict):
    slot_type_id: str
    bot_id: str
    bot_version: str
    locale_id: str
