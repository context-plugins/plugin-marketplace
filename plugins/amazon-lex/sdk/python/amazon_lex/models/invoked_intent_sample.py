from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InvokedIntentSample(SdkBaseModel):
    intent_name: Optional[str] = Field(default=UNSET, alias="intentName")
    """The name of an intent that was invoked."""


class InvokedIntentSampleDict(TypedDict):
    intent_name: NotRequired[str]
