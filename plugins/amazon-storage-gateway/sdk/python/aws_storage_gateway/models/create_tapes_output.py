from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateTapesOutput(SdkBaseModel):
    tape_arns: Optional[list[str]] = Field(default=UNSET, alias="TapeARNs")
    """A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were created."""


class CreateTapesOutputDict(TypedDict):
    tape_arns: NotRequired[list[str]]
