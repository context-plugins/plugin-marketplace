from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .config_model import ConfigModel, ConfigModelDict
from .method1 import Method1, Method1Dict
from .partial_payment import PartialPayment, PartialPaymentDict
from .theme import Theme, ThemeDict


class Checkout(SdkBaseModel):
    name: Optional[str] = UNSET
    """Custom business name displayed on checkout."""

    theme: Optional[Theme] = UNSET
    method: Optional[Method1] = UNSET
    """Enable or disable specific payment methods."""

    config: Optional[ConfigModel] = UNSET
    """Advanced checkout display configuration (blocks, sequence, preferences)."""

    partial_payment: Optional[PartialPayment] = UNSET
    """Rename partial payment labels (for localisation)."""


class CheckoutDict(TypedDict):
    name: NotRequired[str]
    theme: NotRequired[ThemeDict]
    method: NotRequired[Method1Dict]
    config: NotRequired[ConfigModelDict]
    partial_payment: NotRequired[PartialPaymentDict]
