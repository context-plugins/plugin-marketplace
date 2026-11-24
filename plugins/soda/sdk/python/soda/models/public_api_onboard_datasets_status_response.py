from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.public_api_onboarding_state_dto import PublicApiOnboardingStateDtoOrStr


class PublicApiOnboardDatasetsStatusResponse(SdkBaseModel):
    ended: Optional[RFC3339DateTime] = UNSET
    id: str
    message: Optional[str] = UNSET
    started: Optional[RFC3339DateTime] = UNSET
    state: PublicApiOnboardingStateDtoOrStr


class PublicApiOnboardDatasetsStatusResponseDict(TypedDict):
    ended: NotRequired[RFC3339DateTime]
    id: str
    message: NotRequired[str]
    started: NotRequired[RFC3339DateTime]
    state: PublicApiOnboardingStateDtoOrStr
