from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.state import StateOrStr


class SslInspectionResponse(SdkBaseModel):
    """SSL inspection configuration for a policy."""

    state: StateOrStr
    """The state of SSL inspection for this policy."""

    inherits_from_base: bool = Field(alias="inheritsFromBase")
    """Whether SSL inspection is inherited from the Base Policy."""


class SslInspectionResponseDict(TypedDict):
    state: StateOrStr
    inherits_from_base: bool
