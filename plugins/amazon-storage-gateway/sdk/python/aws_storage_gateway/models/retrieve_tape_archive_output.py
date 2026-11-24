from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RetrieveTapeArchiveOutput(SdkBaseModel):
    tape_arn: Optional[str] = Field(default=UNSET, alias="TapeARN")
    """The Amazon Resource Name (ARN) of the retrieved virtual tape."""


class RetrieveTapeArchiveOutputDict(TypedDict):
    tape_arn: NotRequired[str]
