from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnusableEntitlementErrorError(SdkBaseModel):
    reason_tag: Literal["entitlement-violation"] = "entitlement-violation"
    """The tag for violating an entitlement action."""

    entitlement_tag: str
    """Short tag describing the unusable entitlement action taken by the user."""

    message: str
    """Message displayed to the user on why their action failed."""


class UnusableEntitlementErrorErrorDict(TypedDict):
    reason_tag: Literal["entitlement-violation"]
    entitlement_tag: str
    message: str
