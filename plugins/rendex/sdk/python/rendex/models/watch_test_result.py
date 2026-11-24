from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class WatchTestResult(SdkBaseModel):
    """Result of POST /v1/watches/test (the pre-create dry-run)."""

    ok: Optional[bool] = UNSET
    """True when the page was rendered."""

    reachable: Optional[bool] = UNSET
    """True when the page could be read (not blocked/errored)."""

    format: Optional[str] = UNSET
    """Capture format (png/jpeg/webp/pdf)."""

    http_status: OptionalNullable[int] = Field(default=UNSET, alias="httpStatus")
    """Navigated page HTTP status (URL mode; null for geo)."""

    used_geo: Optional[bool] = Field(default=UNSET, alias="usedGeo")
    """Whether the geo (Decodo) render path was used."""

    screenshot_url: OptionalNullable[str] = Field(default=UNSET, alias="screenshotUrl")
    """Signed URL of the captured screenshot (short-lived)."""

    extracted_text: OptionalNullable[str] = Field(default=UNSET, alias="extractedText")
    """Text a text-watch would compare (text mode only)."""

    captured_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="capturedAt")
    reason: Optional[str] = UNSET
    """Actionable reason when reachable is false (blocked / needs login / HTTP error)."""


class WatchTestResultDict(TypedDict):
    ok: NotRequired[bool]
    reachable: NotRequired[bool]
    format: NotRequired[str]
    http_status: NotRequired[int | None]
    used_geo: NotRequired[bool]
    screenshot_url: NotRequired[str | None]
    extracted_text: NotRequired[str | None]
    captured_at: NotRequired[RFC3339DateTime]
    reason: NotRequired[str]
