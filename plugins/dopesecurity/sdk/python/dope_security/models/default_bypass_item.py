from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.state1 import State1OrStr


class DefaultBypassItem(SdkBaseModel):
    """A read-only bypass entry pre-configured by Dope Security. Default entries cannot be created or deleted, but
    partners can set their state to ignored to prevent them from being enforced."""

    name: str
    """The name of the default bypass entry (application name or URL pattern)"""

    state: State1OrStr
    """Whether this default entry is applied or ignored for the policy"""


class DefaultBypassItemDict(TypedDict):
    name: str
    state: State1OrStr
