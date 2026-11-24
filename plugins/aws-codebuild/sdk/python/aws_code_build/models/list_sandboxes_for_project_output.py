from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListSandboxesForProjectOutput(SdkBaseModel):
    ids: Optional[list[str]] = UNSET
    """Information about the requested sandbox IDs."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """Information about the next token to get paginated results."""


class ListSandboxesForProjectOutputDict(TypedDict):
    ids: NotRequired[list[str]]
    next_token: NotRequired[str]
