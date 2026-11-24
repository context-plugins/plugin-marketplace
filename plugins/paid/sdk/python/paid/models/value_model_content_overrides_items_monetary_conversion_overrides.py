from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueModelContentOverridesItemsMonetaryConversionOverrides(SdkBaseModel):
    variables: Optional[dict[str, float]] = UNSET


class ValueModelContentOverridesItemsMonetaryConversionOverridesDict(TypedDict):
    variables: NotRequired[dict[str, float]]
