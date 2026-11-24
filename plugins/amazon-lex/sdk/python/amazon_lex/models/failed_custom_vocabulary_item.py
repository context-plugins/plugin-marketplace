from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error_code import ErrorCodeOrStr


class FailedCustomVocabularyItem(SdkBaseModel):
    item_id: Optional[str] = Field(default=UNSET, alias="itemId")
    """The unique item identifer for the failed custom vocabulary item from the custom vocabulary list."""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """The error message for the failed custom vocabulary item from the custom vocabulary list."""

    error_code: Optional[ErrorCodeOrStr] = Field(default=UNSET, alias="errorCode")
    """The unique error code for the failed custom vocabulary item from the custom vocabulary list."""


class FailedCustomVocabularyItemDict(TypedDict):
    item_id: NotRequired[str]
    error_message: NotRequired[str]
    error_code: NotRequired[ErrorCodeOrStr]
