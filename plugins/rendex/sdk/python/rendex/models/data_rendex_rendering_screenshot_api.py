from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.format1 import Format1OrStr
from .enums.quality import QualityOrStr


class DataRendexRenderingScreenshotApi(SdkBaseModel):
    image: Optional[str] = UNSET
    """Base64-encoded screenshot image"""

    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """MIME type of the image"""

    url: Optional[str] = UNSET
    """Captured URL"""

    width: Optional[int] = UNSET
    """Viewport width used"""

    height: Optional[int] = UNSET
    """Viewport height used"""

    format: Optional[Format1OrStr] = UNSET
    bytes_size: Optional[int] = Field(default=UNSET, alias="bytesSize")
    """Image size in bytes"""

    captured_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="capturedAt")
    """ISO 8601 timestamp of capture"""

    quality: Optional[QualityOrStr] = UNSET
    """Capture quality signal"""

    wait_strategy: Optional[str] = Field(default=UNSET, alias="waitStrategy")
    """Navigation strategy that succeeded"""

    load_time_ms: Optional[int] = Field(default=UNSET, alias="loadTimeMs")
    """Page load time in milliseconds"""

    truncated: Optional[bool] = UNSET
    """Whether full-page capture was height-capped"""


class DataRendexRenderingScreenshotApiDict(TypedDict):
    image: NotRequired[str]
    content_type: NotRequired[str]
    url: NotRequired[str]
    width: NotRequired[int]
    height: NotRequired[int]
    format: NotRequired[Format1OrStr]
    bytes_size: NotRequired[int]
    captured_at: NotRequired[RFC3339DateTime]
    quality: NotRequired[QualityOrStr]
    wait_strategy: NotRequired[str]
    load_time_ms: NotRequired[int]
    truncated: NotRequired[bool]
