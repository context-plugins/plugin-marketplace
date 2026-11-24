from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Stack2(SdkBaseModel):
    name: str
    """Display name for the new stack."""

    master_locale: str
    """Default locale code for the stack (e.g., en-us)."""

    description: Optional[str] = UNSET
    """Description of the stack's purpose."""


class Stack2Dict(TypedDict):
    name: str
    master_locale: str
    description: NotRequired[str]
