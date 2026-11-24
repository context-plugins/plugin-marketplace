from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .entitlement_result_dto import EntitlementResultDto, EntitlementResultDtoDict


class EntitlementResponseDto(SdkBaseModel):
    entitlements: dict[str, EntitlementResultDto]
    """A map of entitlements to the result given a user and site"""


class EntitlementResponseDtoDict(TypedDict):
    entitlements: dict[str, EntitlementResultDtoDict]
