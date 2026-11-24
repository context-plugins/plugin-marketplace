from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnvironmentsCount(SdkBaseModel):
    production: Optional[int] = UNSET
    """Maximum number of production environments"""

    sandbox: Optional[int] = UNSET
    """Maximum number of sandbox environments"""


class EnvironmentsCountDict(TypedDict):
    production: NotRequired[int]
    sandbox: NotRequired[int]
