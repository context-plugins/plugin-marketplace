from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1WebscreenshotsRequest(SdkBaseModel):
    url: str
    """The URL of the web page to capture the screenshot (e.g., https://example.com)"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The image format for the screenshot"""

    width: Optional[float] = UNSET
    """The width of the screenshot in pixels (e.g., 1920). Must be between 100 and 3840"""

    height: Optional[float] = UNSET
    """The height of the screenshot in pixels (e.g., 1080). Must be between 100 and 3840"""

    fullpage: Optional[bool] = UNSET
    """Whether to capture the full page screenshot (true or false)"""


class V1WebscreenshotsRequestDict(TypedDict):
    url: str
    type_: NotRequired[str]
    width: NotRequired[float]
    height: NotRequired[float]
    fullpage: NotRequired[bool]
