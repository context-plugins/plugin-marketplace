from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExportedEnvironmentVariable(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the exported environment variable."""

    value: Optional[str] = UNSET
    """The value assigned to the exported environment variable."""


class ExportedEnvironmentVariableDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
