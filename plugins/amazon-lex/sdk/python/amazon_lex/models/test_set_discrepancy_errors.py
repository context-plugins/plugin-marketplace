from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .test_set_intent_discrepancy_item import TestSetIntentDiscrepancyItem, TestSetIntentDiscrepancyItemDict
from .test_set_slot_discrepancy_item import TestSetSlotDiscrepancyItem, TestSetSlotDiscrepancyItemDict


class TestSetDiscrepancyErrors(SdkBaseModel):
    intent_discrepancies: list[TestSetIntentDiscrepancyItem] = Field(alias="intentDiscrepancies")
    """Contains information about discrepancies found for intents between the test set and the bot."""

    slot_discrepancies: list[TestSetSlotDiscrepancyItem] = Field(alias="slotDiscrepancies")
    """Contains information about discrepancies found for slots between the test set and the bot."""


class TestSetDiscrepancyErrorsDict(TypedDict):
    intent_discrepancies: list[TestSetIntentDiscrepancyItemDict]
    slot_discrepancies: list[TestSetSlotDiscrepancyItemDict]
