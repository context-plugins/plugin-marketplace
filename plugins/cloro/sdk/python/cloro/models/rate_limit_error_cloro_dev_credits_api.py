from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error2_cloro_dev_credits_api import Error2CloroDevCreditsApi, Error2CloroDevCreditsApiDict


class RateLimitErrorCloroDevCreditsApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error2CloroDevCreditsApi] = UNSET


class RateLimitErrorCloroDevCreditsApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error2CloroDevCreditsApiDict]
