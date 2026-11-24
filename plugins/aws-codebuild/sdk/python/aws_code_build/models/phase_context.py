from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PhaseContext(SdkBaseModel):
    status_code: Optional[str] = Field(default=UNSET, alias="statusCode")
    """The status code for the context of the build phase."""

    message: Optional[str] = UNSET
    """An explanation of the build phase's context. This might include a command ID and an exit code."""


class PhaseContextDict(TypedDict):
    status_code: NotRequired[str]
    message: NotRequired[str]
