from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EntitlementRequestDto(SdkBaseModel):
    entitlements: list[str]
    """The entitlements to evaluate for the given user and site"""


class EntitlementRequestDtoDict(TypedDict):
    entitlements: list[str]
