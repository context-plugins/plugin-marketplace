from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContentType(SdkBaseModel):
    confidence: Optional[float] = Field(default=UNSET, alias="Confidence")
    """The confidence level of the label given"""

    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the label"""


class ContentTypeDict(TypedDict):
    confidence: NotRequired[float]
    name: NotRequired[str]
