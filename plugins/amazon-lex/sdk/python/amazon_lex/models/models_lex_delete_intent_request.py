from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexDeleteIntentRequest(SdkBaseModel):
    name: str
    """The name of the intent. The name is case sensitive."""


class ModelsLexDeleteIntentRequestDict(TypedDict):
    name: str
