from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BrowserExtensionView(SdkBaseModel):
    """An extension installed in a browser session."""

    id: UUID
    """Extension ID from POST /api/v4/extensions"""

    runtime_id: str = Field(alias="runtimeId")
    """Chromium extension ID, as in chrome-extension://{runtimeId}/"""

    version: str
    """Version from the extension manifest"""


class BrowserExtensionViewDict(TypedDict):
    id: UUID
    runtime_id: str
    version: str
