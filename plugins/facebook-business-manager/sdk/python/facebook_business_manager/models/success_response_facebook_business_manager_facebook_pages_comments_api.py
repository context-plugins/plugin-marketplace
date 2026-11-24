from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi(SdkBaseModel):
    success: Optional[bool] = UNSET


class SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApiDict(TypedDict):
    success: NotRequired[bool]
