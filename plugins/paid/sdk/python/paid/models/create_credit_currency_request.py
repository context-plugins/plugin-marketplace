from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CreateCreditCurrencyRequest(SdkBaseModel):
    name: str
    """Human-readable name shown for this credit currency."""

    key: str
    """Stable machine-readable key for this credit currency. Use lowercase letters, numbers, underscores, and hyphens.
    Keys are unique within an organization."""

    description: OptionalNullable[str] = UNSET
    """Optional description for this credit currency."""


class CreateCreditCurrencyRequestDict(TypedDict):
    name: str
    key: str
    description: NotRequired[str | None]
