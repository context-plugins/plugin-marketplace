from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EnableRegistrationFundraising(SdkBaseModel):
    """Registration fundraising configuration. JSON object (e.g. ``goal``, ``minimum``, ``description``)."""

    name: Literal["enable_registration_fundraising"] = "enable_registration_fundraising"
    value: OptionalNullable[Any] = UNSET


class EnableRegistrationFundraisingDict(TypedDict):
    name: Literal["enable_registration_fundraising"]
    value: NotRequired[Any | None]
