from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1_cloro_dev_credits_api import Error1CloroDevCreditsApi, Error1CloroDevCreditsApiDict


class InternalErrorErrorCloroDevCreditsApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error1CloroDevCreditsApi] = UNSET


class InternalErrorErrorCloroDevCreditsApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error1CloroDevCreditsApiDict]
