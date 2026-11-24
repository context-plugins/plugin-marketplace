from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateTapeWithBarcodeOutput(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """A unique Amazon Resource Name (ARN) that represents the virtual tape that was created."""


class CreateTapeWithBarcodeOutputDict(TypedDict):
    tape_arn: NotRequired[str]
