from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DecisionEngineVariableVariant(SdkBaseModel):
    """Variant within a message variable (Public API)"""

    model_config = ConfigDict(extra="forbid")

    value: str
    """The default (non-localized) value for this variant"""

    tags: Optional[dict[str, str]] = UNSET
    """Key-value tags for categorizing this variant"""

    first_eligible_send_date: Optional[str] = Field(default=UNSET, alias="firstEligibleSendDate")
    """Earliest date this variant is eligible to be sent (ISO 8601)"""

    last_eligible_send_date: Optional[str] = Field(default=UNSET, alias="lastEligibleSendDate")
    """Latest date this variant is eligible to be sent (ISO 8601)"""

    user_audience_filter: Optional[Any] = Field(default=UNSET, alias="userAudienceFilter")
    locale_values: Optional[dict[str, str]] = Field(default=UNSET, alias="localeValues")
    """Localized values for this variant, keyed by locale code (e.g. "en-US", "de-DE"). These are only used at runtime
    when ``localizationEnabled`` is true on the parent variable. You can stage translations by providing localeValues
    while leaving localizationEnabled unset or false."""


class DecisionEngineVariableVariantDict(TypedDict):
    value: str
    tags: NotRequired[dict[str, str]]
    first_eligible_send_date: NotRequired[str]
    last_eligible_send_date: NotRequired[str]
    user_audience_filter: NotRequired[Any]
    locale_values: NotRequired[dict[str, str]]
