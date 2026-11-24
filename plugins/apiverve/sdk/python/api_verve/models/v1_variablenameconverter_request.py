from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1VariablenameconverterRequest(SdkBaseModel):
    variables: str
    """Array of variable names to convert (max 100). Every entry must be a string."""

    to: str
    """Target naming convention"""


class V1VariablenameconverterRequestDict(TypedDict):
    variables: str
    to: str
