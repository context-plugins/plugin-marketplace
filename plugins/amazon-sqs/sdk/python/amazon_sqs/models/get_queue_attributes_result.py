from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetQueueAttributesResult(SdkBaseModel):
    attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="Attributes")
    """A map of attributes to their respective values."""


class GetQueueAttributesResultDict(TypedDict):
    attributes: NotRequired[dict[str, str]]
