from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1QuerystringbuilderRequest(SdkBaseModel):
    params: str
    """JSON object of parameters"""

    encode: Optional[bool] = UNSET
    """URL encode parameter values"""


class V1QuerystringbuilderRequestDict(TypedDict):
    params: str
    encode: NotRequired[bool]
