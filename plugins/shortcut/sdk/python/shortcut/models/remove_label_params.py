from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RemoveLabelParams(SdkBaseModel):
    """Request parameters for removing a Label from a Shortcut Story."""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the new Label to remove."""


class RemoveLabelParamsDict(TypedDict):
    name: str
