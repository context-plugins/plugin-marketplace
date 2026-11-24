from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.value_model_content_overrides_items_signal_overrides_defaults import (
    ValueModelContentOverridesItemsSignalOverridesDefaults,
    ValueModelContentOverridesItemsSignalOverridesDefaultsDict,
)


class ValueModelContentOverridesItemsSignalOverrides(SdkBaseModel):
    defaults: Optional[dict[str, ValueModelContentOverridesItemsSignalOverridesDefaults]] = UNSET


class ValueModelContentOverridesItemsSignalOverridesDict(TypedDict):
    defaults: NotRequired[dict[str, ValueModelContentOverridesItemsSignalOverridesDefaultsDict]]
