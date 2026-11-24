from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MessageResponse(SdkBaseModel):
    message: Optional[str] = UNSET
    """A message describing the result of the operation"""


class MessageResponseDict(TypedDict):
    message: NotRequired[str]
