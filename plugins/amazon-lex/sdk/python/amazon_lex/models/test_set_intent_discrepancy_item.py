from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TestSetIntentDiscrepancyItem(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The name of the intent in the discrepancy report."""

    error_message: str = Field(alias="errorMessage")
    """The error message for a discrepancy for an intent between the test set and the bot."""


class TestSetIntentDiscrepancyItemDict(TypedDict):
    intent_name: str
    error_message: str
