from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .screenshot_request import ScreenshotRequest, ScreenshotRequestDict
from .url import Url, UrlDict


class BatchRequest(SdkBaseModel):
    urls: list[Url]
    """List of URLs to capture (each item can override defaults)"""

    defaults: Optional[ScreenshotRequest] = UNSET
    """Provide exactly one of ``url``, ``html``, or ``markdown`` (mutually exclusive). If none is provided, the request
    will fail with a validation error."""

    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    """URL to receive a webhook notification when the batch completes (Starter+ channel; Free/Basic poll GET
    /v1/batches/{batchId} instead)."""


class BatchRequestDict(TypedDict):
    urls: list[UrlDict]
    defaults: NotRequired[ScreenshotRequestDict]
    webhook_url: NotRequired[str]
