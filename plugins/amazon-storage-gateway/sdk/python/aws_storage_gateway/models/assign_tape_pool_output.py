from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AssignTapePoolOutput(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape pool."""


class AssignTapePoolOutputDict(TypedDict):
    tape_arn: NotRequired[str]
