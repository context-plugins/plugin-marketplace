from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data2 import Data2, Data2Dict
from .enums.status import StatusOrStr


class DocsSearchResponse(SdkBaseModel):
    """Process status"""

    status: Optional[StatusOrStr] = UNSET
    """Response Status"""

    data: Optional[Data2] = UNSET
    """Response Data"""


class DocsSearchResponseDict(TypedDict):
    status: NotRequired[StatusOrStr]
    data: NotRequired[Data2Dict]
