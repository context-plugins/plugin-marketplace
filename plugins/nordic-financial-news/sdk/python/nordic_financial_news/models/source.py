from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.source_type import SourceTypeOrStr


class Source(SdkBaseModel):
    """The news source that published this article"""

    id: Optional[str] = UNSET
    """Unique source identifier"""

    name: Optional[str] = UNSET
    domain: Optional[str] = UNSET
    source_type: Optional[SourceTypeOrStr] = UNSET


class SourceDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
    source_type: NotRequired[SourceTypeOrStr]
