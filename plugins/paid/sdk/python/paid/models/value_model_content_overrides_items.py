from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value_model_content_overrides_items_additional_signals_items import (
    ValueModelContentOverridesItemsAdditionalSignalsItems,
    ValueModelContentOverridesItemsAdditionalSignalsItemsDict,
)
from .value_model_content_overrides_items_monetary_conversion_overrides import (
    ValueModelContentOverridesItemsMonetaryConversionOverrides,
    ValueModelContentOverridesItemsMonetaryConversionOverridesDict,
)
from .value_model_content_overrides_items_scope import (
    ValueModelContentOverridesItemsScope,
    ValueModelContentOverridesItemsScopeDict,
)
from .value_model_content_overrides_items_signal_overrides import (
    ValueModelContentOverridesItemsSignalOverrides,
    ValueModelContentOverridesItemsSignalOverridesDict,
)


class ValueModelContentOverridesItems(SdkBaseModel):
    id: str
    label: str
    scope: ValueModelContentOverridesItemsScope
    currency: Optional[str] = UNSET
    signal_overrides: Optional[dict[str, ValueModelContentOverridesItemsSignalOverrides]] = Field(
        default=UNSET, alias="signalOverrides"
    )
    additional_signals: Optional[list[ValueModelContentOverridesItemsAdditionalSignalsItems]] = Field(
        default=UNSET, alias="additionalSignals"
    )
    monetary_conversion_overrides: Optional[
        dict[str, ValueModelContentOverridesItemsMonetaryConversionOverrides]
    ] = Field(default=UNSET, alias="monetaryConversionOverrides")


class ValueModelContentOverridesItemsDict(TypedDict):
    id: str
    label: str
    scope: ValueModelContentOverridesItemsScopeDict
    currency: NotRequired[str]
    signal_overrides: NotRequired[dict[str, ValueModelContentOverridesItemsSignalOverridesDict]]
    additional_signals: NotRequired[list[ValueModelContentOverridesItemsAdditionalSignalsItemsDict]]
    monetary_conversion_overrides: NotRequired[
        dict[str, ValueModelContentOverridesItemsMonetaryConversionOverridesDict]
    ]
