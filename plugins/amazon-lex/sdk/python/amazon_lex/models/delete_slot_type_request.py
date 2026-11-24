from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteSlotTypeRequest(SdkBaseModel):
    slot_type_id: str = Field(alias="slotTypeId")
    """The identifier of the slot type to delete."""

    bot_id: str = Field(alias="botId")
    """The identifier of the bot associated with the slot type."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot associated with the slot type."""

    locale_id: str = Field(alias="localeId")
    """The identifier of the language and locale that the slot type will be deleted from. The string must match one of
    the supported locales. For more information, see Supported languages."""

    skip_resource_in_use_check: Optional[bool] = Field(default=UNSET, alias="skipResourceInUseCheck")
    """By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try to delete a slot
    type used by a slot. Set the skipResourceInUseCheck parameter to true to skip this check and remove the slot type
    even if a slot uses it."""


class DeleteSlotTypeRequestDict(TypedDict):
    slot_type_id: str
    bot_id: str
    bot_version: str
    locale_id: str
    skip_resource_in_use_check: NotRequired[bool]
