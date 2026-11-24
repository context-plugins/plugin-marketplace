from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BodySignupSignupPost(SdkBaseModel):
    email: Optional[str] = UNSET
    """optional, for receipts"""


class BodySignupSignupPostDict(TypedDict):
    email: NotRequired[str]
