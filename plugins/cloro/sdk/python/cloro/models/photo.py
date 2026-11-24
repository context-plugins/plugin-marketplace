from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Photo(SdkBaseModel):
    url: Optional[str] = UNSET
    """Photo URL"""

    alt_text: Optional[str] = Field(default=UNSET, alias="altText")
    """Alt text for the photo"""

    provider_name: Optional[str] = Field(default=UNSET, alias="providerName")
    """Photo provider name"""

    provider_url: Optional[str] = Field(default=UNSET, alias="providerUrl")
    """Photo provider URL"""


class PhotoDict(TypedDict):
    url: NotRequired[str]
    alt_text: NotRequired[str]
    provider_name: NotRequired[str]
    provider_url: NotRequired[str]
