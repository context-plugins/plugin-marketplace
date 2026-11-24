from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DeleteTapeArchiveOutput(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf (VTS)."""


class DeleteTapeArchiveOutputDict(TypedDict):
    tape_arn: NotRequired[str]
