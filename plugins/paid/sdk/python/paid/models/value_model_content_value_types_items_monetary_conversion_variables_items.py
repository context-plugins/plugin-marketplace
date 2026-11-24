from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValueModelContentValueTypesItemsMonetaryConversionVariablesItems(SdkBaseModel):
    id: str
    label: str
    default: float


class ValueModelContentValueTypesItemsMonetaryConversionVariablesItemsDict(TypedDict):
    id: str
    label: str
    default: float
