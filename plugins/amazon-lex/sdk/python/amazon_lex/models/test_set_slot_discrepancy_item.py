from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TestSetSlotDiscrepancyItem(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The name of the intent associated with the slot in the discrepancy report."""

    slot_name: str = Field(alias="slotName")
    """The name of the slot in the discrepancy report."""

    error_message: str = Field(alias="errorMessage")
    """The error message for a discrepancy for an intent between the test set and the bot."""


class TestSetSlotDiscrepancyItemDict(TypedDict):
    intent_name: str
    slot_name: str
    error_message: str
