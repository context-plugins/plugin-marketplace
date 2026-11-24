from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error3_cloro_dev_states_api import Error3CloroDevStatesApi, Error3CloroDevStatesApiDict


class RateLimitErrorCloroDevStatesApi(SdkBaseModel):
    success: Optional[bool] = UNSET
    error: Optional[Error3CloroDevStatesApi] = UNSET


class RateLimitErrorCloroDevStatesApiDict(TypedDict):
    success: NotRequired[bool]
    error: NotRequired[Error3CloroDevStatesApiDict]
