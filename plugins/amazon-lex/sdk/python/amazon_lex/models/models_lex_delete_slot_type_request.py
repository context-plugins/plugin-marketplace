from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexDeleteSlotTypeRequest(SdkBaseModel):
    name: str
    """The name of the slot type. The name is case sensitive."""


class ModelsLexDeleteSlotTypeRequestDict(TypedDict):
    name: str
