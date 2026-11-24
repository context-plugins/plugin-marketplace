from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FormatInfosResponse(SdkBaseModel):
    file_type: Optional[str] = Field(default=UNSET, alias="fileType")
    """File Type"""

    quality: Optional[str] = UNSET
    """(Optional) File Type Quality"""

    producer: Optional[str] = UNSET
    """(Optional) File producer"""


class FormatInfosResponseDict(TypedDict):
    file_type: NotRequired[str]
    quality: NotRequired[str]
    producer: NotRequired[str]
