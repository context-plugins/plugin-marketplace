from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuiltInIntentSummary(SdkBaseModel):
    intent_signature: Optional[str] = Field(default=UNSET, alias="intentSignature")
    """The signature of the built-in intent. Use this to specify the parent intent of a derived intent."""

    description: Optional[str] = UNSET
    """The description of the intent."""


class BuiltInIntentSummaryDict(TypedDict):
    intent_signature: NotRequired[str]
    description: NotRequired[str]
