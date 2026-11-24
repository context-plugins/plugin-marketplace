from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_variable import EnvironmentVariable, EnvironmentVariableDict


class EnvironmentVariableList(SdkBaseModel):
    items: Optional[list[EnvironmentVariable]] = UNSET
    """List of environment variables"""

    next_page_token: Optional[str] = UNSET
    """Token for retrieving the next page"""


class EnvironmentVariableListDict(TypedDict):
    items: NotRequired[list[EnvironmentVariableDict]]
    next_page_token: NotRequired[str]
