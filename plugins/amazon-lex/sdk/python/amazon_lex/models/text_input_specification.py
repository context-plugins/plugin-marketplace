from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TextInputSpecification(SdkBaseModel):
    start_timeout_ms: int = Field(alias="startTimeoutMs")
    """Time for which a bot waits before re-prompting a customer for text input."""


class TextInputSpecificationDict(TypedDict):
    start_timeout_ms: int
