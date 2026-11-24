from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActionMetadata(SdkBaseModel):
    """Metadata about the action that triggered the webhook."""

    source: Optional[str] = UNSET
    """The source of the action (e.g., client, publicApi, formSubmission)."""

    source_metadata: Optional[Any] = Field(default=UNSET, alias="sourceMetadata")
    """Additional metadata about the source."""


class ActionMetadataDict(TypedDict):
    source: NotRequired[str]
    source_metadata: NotRequired[Any]
