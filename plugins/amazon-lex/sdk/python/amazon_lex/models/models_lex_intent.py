from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexIntent(SdkBaseModel):
    intent_name: str = Field(alias="intentName")
    """The name of the intent."""

    intent_version: str = Field(alias="intentVersion")
    """The version of the intent."""


class ModelsLexIntentDict(TypedDict):
    intent_name: str
    intent_version: str
